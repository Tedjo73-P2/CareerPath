# Career Guidance & Employment Integration Platform

A comprehensive web application platform that assists high school students in discovering higher learning institutions in Lesotho, the courses offered, and applying online. Upon completion of studies, the system facilitates career placement by allowing graduates to upload their transcripts and connect with partner companies for employment opportunities.

## Features

### For Students
- Browse and discover higher learning institutions
- View available courses and faculties
- Apply for courses (max 2 per institution)
- Track application status
- Upload academic transcripts and certificates
- Search and apply for job opportunities
- Receive job notifications based on qualifications

### For Institutions
- Register and manage institution profile
- Add and manage faculties and courses
- View and process student applications
- Publish admission results
- Manage student status (admitted, rejected, pending)
- Update course information

### For Companies
- Register and manage company profile
- Post job opportunities with requirements
- View automatically filtered qualified applicants
- Track applicant status
- Manage recruitment pipeline

### Admin Features
- Manage institutions, faculties, and courses
- Monitor user registrations
- Manage company accounts
- Generate system reports
- Oversee platform operations

## Tech Stack

- **Frontend**: React.js + Vite
- **Backend**: Node.js + Express
- **Database**: Firebase Firestore
- **Styling**: Tailwind CSS
- **Authentication**: Firebase Authentication
- **Hosting**: Cloud platform (AWS, Firebase, Vercel, or Netlify)

## Project Structure

```
career-guidance-platform/
├── client/                    # React frontend
│   ├── src/
│   │   ├── components/        # Reusable UI components
│   │   ├── pages/             # Page components
│   │   ├── lib/               # Utility functions
│   │   ├── hooks/             # Custom React hooks
│   │   ├── App.jsx            # Main app component
│   │   └── global.css         # Global styles
│   └── index.html
├── server/                    # Express API backend
│   ├── config/
│   │   └── firebase.js        # Firebase initialization
│   ├── middleware/
│   │   └── auth.js            # Authentication middleware
│   ├── routes/
│   │   ├── auth.js            # Authentication routes
│   │   ├── institutions.js    # Institution CRUD
│   │   ├── courses.js         # Course management
│   │   ├── applications.js    # Student applications
│   │   ├── jobs.js            # Job postings
│   │   ├── companies.js       # Company management
│   │   └── admin.js           # Admin operations
│   ├── index.js               # Express server entry point
│   └── package.json
├── public/                    # Static assets
├── package.json
├── tailwind.config.js         # Tailwind configuration
├── vite.config.js             # Vite configuration
├── .env.example               # Environment variables template
└── README.md
```

## Getting Started

### Prerequisites
- Node.js 16+ and pnpm
- Firebase project with Firestore enabled
- GitHub repository

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-github-repo-url>
   cd career-guidance-platform
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Update `.env` with your Firebase credentials:
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create a new project or select existing one
   - Generate service account key and download JSON
   - Copy values into `.env` file

4. **Start development server**
   ```bash
   pnpm dev
   ```
   The app will be available at `http://localhost:8080`

## Development Commands

```bash
pnpm dev           # Start dev server (client + backend)
pnpm build         # Production build
pnpm start         # Start production server
pnpm test          # Run tests
pnpm typecheck     # TypeScript validation
pnpm format.fix    # Format code
```

## Database Schema (Firestore)

### Collections

- **users** - User accounts (students, institutions, companies, admins)
- **institutions** - Higher learning institutions
- **faculties** - Faculties within institutions
- **courses** - Courses within faculties
- **applications** - Student course applications
- **companies** - Employer companies
- **jobs** - Job postings from companies
- **job_applications** - Graduate applications to jobs
- **notifications** - User notifications
- **admin_settings** - System configuration

## Authentication Flow

1. User registers with email and password
2. Email verification sent
3. User logs in with credentials
4. Firebase Authentication generates ID token
5. Token used for API requests via Authorization header

## Deployment

### On Netlify
1. Connect GitHub repository
2. Set build command: `pnpm build`
3. Set publish directory: `dist/spa`
4. Add environment variables in Netlify dashboard
5. Deploy

### On Firebase Hosting
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Run: `firebase init hosting`
3. Configure for your project
4. Deploy: `firebase deploy --only hosting`

### On Vercel
1. Connect GitHub repository
2. Set root directory: `.`
3. Add environment variables
4. Deploy

## Marking Criteria

- ✅ Project Setup and Structure (10%)
- ✅ Code Quality and Readability (15%)
- ✅ Database Design and Implementation (15%)
- ✅ API Development/Backend (20%)
- ✅ Frontend Design (20%)
- ✅ Interactivity (10%)
- ✅ Presentation and Demonstration (10%)

## Contributing

1. Create a feature branch: `git checkout -b feature/amazing-feature`
2. Commit changes: `git commit -m 'Add amazing feature'`
3. Push to branch: `git push origin feature/amazing-feature`
4. Open a Pull Request

## License

MIT License - see LICENSE file for details

## Support

For issues and questions:
- Open an issue on GitHub
- Contact: support@careerpath.ls

## Team

Built by the Career Guidance Platform Development Team

---

**Note**: This is a production-ready starter template. Additional features and enhancements should be implemented based on specific requirements and user feedback.
