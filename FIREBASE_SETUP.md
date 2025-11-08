# Firebase Setup Guide

This guide walks you through setting up Firebase for the Career Guidance & Employment Integration Platform.

## Prerequisites

- Node.js 16+ and pnpm installed
- A Google account
- Admin access to create a Firebase project

## Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Click "Add project"
3. Enter project name: `career-guidance-platform`
4. Choose your region
5. Enable Google Analytics (optional)
6. Click "Create project"

## Step 2: Enable Firestore Database

1. In the Firebase console, go to **Build** → **Firestore Database**
2. Click **"Create database"**
3. Select **"Start in production mode"** (for security)
4. Choose your database location (select closest to your users)
5. Click **"Create"**

## Step 3: Enable Authentication

1. Go to **Build** → **Authentication**
2. Click **"Get started"**
3. Under "Sign-in method", enable:
   - **Email/Password** (required)
   - **Google** (optional, for ease of use)
   - **GitHub** (optional)
4. Fill in required details and save

## Step 4: Generate Service Account Key

1. Go to **Project settings** (gear icon)
2. Click **Service Accounts** tab
3. Click **"Generate new private key"**
4. A JSON file will download - **keep this safe!**
5. Open the downloaded JSON file in a text editor

## Step 5: Configure Environment Variables

1. Copy `.env.example` to `.env`
2. Open your downloaded Firebase service account JSON
3. Fill in the `.env` file with values from the JSON:

```env
FIREBASE_TYPE=service_account
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_PRIVATE_KEY_ID=your_private_key_id
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
FIREBASE_CLIENT_EMAIL=your_client_email
FIREBASE_CLIENT_ID=your_client_id
FIREBASE_AUTH_URI=https://accounts.google.com/o/oauth2/auth
FIREBASE_TOKEN_URI=https://oauth2.googleapis.com/token
FIREBASE_AUTH_PROVIDER_X509_CERT_URL=https://www.googleapis.com/oauth2/v1/certs
FIREBASE_CLIENT_X509_CERT_URL=your_client_x509_cert_url
FIREBASE_DATABASE_URL=https://your-project.firebaseio.com
```

## Step 6: Set Up Firestore Collections

Once your database is ready, create the following collections in Firestore:

### 1. Users Collection
```javascript
{
  userId: "string",
  email: "string",
  fullName: "string",
  role: "student" | "institution" | "company" | "admin",
  profileComplete: boolean,
  createdAt: timestamp,
  updatedAt: timestamp,
  
  // Role-specific fields
  // For students:
  gpa: number,
  transcript: "storage-path",
  
  // For institutions:
  institution_name: "string",
  institution_address: "string",
  
  // For companies:
  company_name: "string",
  company_address: "string"
}
```

### 2. Institutions Collection
```javascript
{
  institutionId: "string",
  name: "string",
  address: "string",
  email: "string",
  phone: "string",
  website: "string",
  description: "string",
  approved: boolean,
  createdAt: timestamp,
  updatedAt: timestamp
}
```

### 3. Faculties Collection (nested under institutions)
```javascript
{
  facultyId: "string",
  name: "string",
  institutionId: "string",
  description: "string",
  createdAt: timestamp,
  updatedAt: timestamp
}
```

### 4. Courses Collection (nested under faculties)
```javascript
{
  courseId: "string",
  name: "string",
  code: "string",
  institutionId: "string",
  facultyId: "string",
  description: "string",
  credits: number,
  capacity: number,
  qualificationCriteria: {
    minGPA: number,
    requiredCertificates: ["string"]
  },
  createdAt: timestamp,
  updatedAt: timestamp
}
```

### 5. Applications Collection
```javascript
{
  applicationId: "string",
  studentId: "string",
  courseId: "string",
  institutionId: "string",
  status: "pending" | "accepted" | "rejected" | "withdrawn",
  appliedAt: timestamp,
  decidedAt: timestamp,
  notes: "string"
}
```

### 6. Companies Collection
```javascript
{
  companyId: "string",
  name: "string",
  address: "string",
  email: "string",
  phone: "string",
  website: "string",
  description: "string",
  industry: "string",
  approved: boolean,
  createdAt: timestamp,
  updatedAt: timestamp
}
```

### 7. Jobs Collection
```javascript
{
  jobId: "string",
  companyId: "string",
  title: "string",
  description: "string",
  requirements: {
    minGPA: number,
    requiredCertificates: ["string"],
    experienceYears: number
  },
  salary: {
    min: number,
    max: number,
    currency: "string"
  },
  location: "string",
  status: "open" | "closed" | "filled",
  createdAt: timestamp,
  closingDate: timestamp
}
```

### 8. Job Applications Collection
```javascript
{
  jobApplicationId: "string",
  jobId: "string",
  studentId: "string",
  companyId: "string",
  status: "applied" | "reviewed" | "interview" | "offer" | "rejected",
  appliedAt: timestamp,
  updatedAt: timestamp
}
```

### 9. Notifications Collection
```javascript
{
  notificationId: "string",
  userId: "string",
  type: "job" | "admission" | "message" | "system",
  title: "string",
  message: "string",
  read: boolean,
  createdAt: timestamp,
  expiresAt: timestamp
}
```

## Step 7: Set Firestore Security Rules

In the Firebase console, go to **Firestore Database** → **Rules** and set:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow authenticated users to read their own data
    match /users/{userId} {
      allow read: if request.auth.uid == userId;
      allow create: if request.auth.uid == request.resource.data.userId;
      allow update, delete: if request.auth.uid == userId;
    }

    // Public read, authenticated write for institutions
    match /institutions/{institutionId} {
      allow read: if true;
      allow write: if request.auth != null && 
                      get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'institution';
      
      // Nested faculties
      match /faculties/{facultyId} {
        allow read: if true;
        allow write: if request.auth != null && 
                        get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'institution';
        
        // Nested courses
        match /courses/{courseId} {
          allow read: if true;
          allow write: if request.auth != null && 
                          get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'institution';
        }
      }
    }

    // Public read, authenticated write for applications
    match /applications/{applicationId} {
      allow read: if request.auth != null;
      allow create: if request.auth.uid == request.resource.data.studentId;
      allow update: if request.auth.uid == request.resource.data.studentId;
    }

    // Public read, authenticated write for companies
    match /companies/{companyId} {
      allow read: if true;
      allow write: if request.auth != null && 
                      get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'company';
      
      // Nested jobs
      match /jobs/{jobId} {
        allow read: if true;
        allow write: if request.auth != null && 
                        get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'company';
      }
    }

    // Job applications
    match /jobApplications/{jobApplicationId} {
      allow read: if request.auth != null;
      allow create: if request.auth.uid == request.resource.data.studentId;
      allow update: if request.auth.uid == request.resource.data.studentId;
    }

    // Notifications
    match /notifications/{notificationId} {
      allow read: if request.auth.uid == resource.data.userId;
      allow create: if request.auth != null;
    }

    // Admin-only settings
    match /admin/{document=**} {
      allow read, write: if request.auth != null && 
                            get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }
  }
}
```

## Step 8: Start Development

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev
```

The app will be available at `http://localhost:8080`

## Step 9: Test Authentication

1. Go to `/register` and create an account
2. Enter email and password
3. Select your role (Student, Institution, or Company)
4. Check Firebase console to see the user created in Authentication

## Deployment with Firebase Hosting

To deploy to Firebase Hosting:

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize Firebase hosting
firebase init hosting

# Build and deploy
pnpm build
firebase deploy
```

## Troubleshooting

### "Service account key error"
- Ensure `.env` file is not in `.gitignore` exceptions
- Verify all environment variables are set correctly
- Check that the `FIREBASE_PRIVATE_KEY` includes newline characters: `\n`

### "Firestore permission denied"
- Check security rules in Firebase console
- Ensure user is authenticated
- Verify user role is set in Firestore

### Build fails
- Clear node_modules: `rm -rf node_modules && pnpm install`
- Clear build cache: `rm -rf dist`
- Restart dev server: `pnpm dev`

## Next Steps

1. Implement Firebase authentication in client code
2. Create API routes for CRUD operations
3. Set up real-time listeners for notifications
4. Configure Cloud Functions for email verification
5. Set up Cloud Storage for transcripts and documents
6. Implement admin dashboard

## Resources

- [Firebase Documentation](https://firebase.google.com/docs)
- [Firestore Guide](https://firebase.google.com/docs/firestore)
- [Firebase Authentication](https://firebase.google.com/docs/auth)
- [Firebase Security Rules](https://firebase.google.com/docs/firestore/security/start)

---

For more information, see the main [README.md](README.md)
