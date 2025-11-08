# Career Guidance Platform - Pages Navigation Guide

## Complete Page Structure

All pages are now live and fully functional with mock data for testing!

### 🏠 Public Pages

| Page         | URL         | Description                                         |
| ------------ | ----------- | --------------------------------------------------- |
| Landing Page | `/`         | Beautiful hero section with features and CTAs       |
| Login        | `/login`    | Multi-role login form (Student/Institution/Company) |
| Register     | `/register` | Multi-step registration with role selection         |

---

## 👨‍🎓 Student Module

### Dashboard

- **URL**: `/student/dashboard`
- **Features**:
  - Welcome message with student stats (Applications, Admissions, GPA, Notifications)
  - Recent applications list with status badges
  - Application trends chart
  - Notifications sidebar
  - Quick action buttons

### Browse Institutions

- **URL**: `/student/institutions`
- **Features**:
  - Search institutions by name
  - Filter by type (All, Universities, Colleges)
  - Featured institutions showcase
  - Institution cards with stats (students, courses, rating)
  - Location and rating information

### View Applications

- **URL**: `/student/applications`
- **Features**:
  - View all submitted applications
  - Application status tracking (Pending, Accepted, Rejected)
  - Applied and decision dates
  - Requirements (Min GPA, required courses)
  - Withdraw application option for pending apps
  - Statistics by status
  - Application tips section

### Job Opportunities

- **URL**: `/student/jobs`
- **Features**:
  - Browse job postings
  - Search by job title or company
  - Filter by category (IT, Business, Marketing, HR, Education)
  - Featured job positions
  - Job details (salary, location, requirements)
  - Apply button for each position
  - Minimum GPA requirements

---

## 🏫 Institution Module

### Dashboard

- **URL**: `/institution/dashboard`
- **Features**:
  - Key metrics (Total Students, Courses, Pending Apps, Faculties)
  - Application trends line chart
  - Quick action buttons
  - Top courses by application count
  - Recent applications list with status
  - Application pipeline visualization

### Manage Courses

- **URL**: `/institution/manage-courses`
- **Features**:
  - List all courses with details
  - Add new course modal form
  - Edit course information
  - Delete courses
  - View application stats per course
  - Capacity and enrollment tracking
  - Progress bars showing course capacity

---

## 🏢 Company Module

### Dashboard

- **URL**: `/company/dashboard`
- **Features**:
  - Active jobs, applications, and views stats
  - Application trends bar chart
  - Quick action buttons (Post Job, View Applications, Edit Profile)
  - Active job postings with stats
  - Recent applications list with status
  - Applicant status tracking (New, Reviewing, Interview)

---

## 👨‍💼 Admin Module

### Dashboard

- **URL**: `/admin/dashboard`
- **Features**:
  - System overview stats (Total Users, Students, Institutions, Companies)
  - User growth trends multi-line chart
  - Approvals status (Approved Companies, Pending Review)
  - Pending approvals list with approve/reject buttons
  - Recent system activity feed
  - Quick management links (Institutions, Companies, Users, Reports)

---

## 📊 Interactive Features

### Charts & Visualizations

- **Line Charts**: Application trends, user growth
- **Bar Charts**: Application statistics, monthly submissions
- **Progress Bars**: Course capacity, enrollment rates
- **Status Indicators**: Color-coded badges for application/job status

### Forms & Modals

- **Add Course Modal**: Institution can add new courses
- **Search & Filter**: Search across all pages with real-time filtering
- **Status Badges**: Visual indicators for application/job status

### Data & Mock Values

- **Students**: 10,200+ registered
- **Institutions**: 15 active institutions
- **Companies**: 28 registered companies
- **Applications**: 3,420+ total applications
- **Jobs**: 5+ active job postings

---

## 🎨 Design Features

### Responsive Design

- ✅ Mobile-first approach
- ✅ Tablet-friendly layouts
- ✅ Desktop-optimized views
- ✅ Flexible grid systems

### Styling

- Modern color scheme (Blue primary, Cyan accents)
- Consistent spacing and padding
- Smooth animations and transitions
- Card-based layouts
- Professional typography

### Interactive Elements

- Hover effects on buttons and cards
- Active state indicators
- Modal dialogs with forms
- Progress indicators
- Loading states ready

---

## 🔄 Navigation Flow

```
Landing Page (/)
├── Student Path
│   ├── /login → /student/dashboard
│   │   ├── /student/institutions (Browse)
│   │   ├── /student/applications (Track)
│   │   └── /student/jobs (Job search)
│
├── Institution Path
│   ├── /login → /institution/dashboard
│   │   └── /institution/manage-courses
│
├── Company Path
│   ├── /login → /company/dashboard
│
└── Admin Path
    ├── /login → /admin/dashboard
```

---

## 📱 Mobile Views

All pages are fully responsive:

- **Mobile (375px)**: Touch-friendly buttons, stacked layouts
- **Tablet (768px)**: Two-column grids, optimized charts
- **Desktop (1400px)**: Full-featured layouts with sidebars

---

## 🚀 Quick Access URLs

Click to navigate to each page:

### Students

- http://localhost:8080/student/dashboard
- http://localhost:8080/student/institutions
- http://localhost:8080/student/applications
- http://localhost:8080/student/jobs

### Institutions

- http://localhost:8080/institution/dashboard
- http://localhost:8080/institution/manage-courses

### Companies

- http://localhost:8080/company/dashboard

### Admin

- http://localhost:8080/admin/dashboard

### Public

- http://localhost:8080/
- http://localhost:8080/login
- http://localhost:8080/register

---

## 🔗 Next Steps

To implement backend functionality:

1. **Connect Firebase** - Add user authentication
2. **Implement Forms** - Collect real data from users
3. **API Integration** - Connect to backend endpoints
4. **Database Sync** - Save data to Firestore
5. **Real-time Updates** - Enable live notifications
6. **Email Notifications** - Send alerts to users

---

## 📝 File Locations

```
client/pages/
├── Index.jsx                          # Landing page
├── LoginPage.jsx                      # Login form
├── RegisterPage.jsx                   # Registration form
├── NotFound.jsx                       # 404 page
├── student/
│   ├── StudentDashboard.jsx           # Student home
│   ├── BrowseInstitutions.jsx         # Institution search
│   ├── StudentApplications.jsx        # Track applications
│   └── StudentJobs.jsx                # Job search
├── institution/
│   ├── InstitutionDashboard.jsx       # Institution home
│   └── ManageCourses.jsx              # Course management
├── company/
│   └── CompanyDashboard.jsx           # Company home
└── admin/
    └── AdminDashboard.jsx             # Admin panel
```

---

## ✨ Features Ready for Enhancement

Each page has placeholders for:

- Real authentication checks
- Firebase data integration
- Dynamic content loading
- User profile information
- Notification system
- Email notifications
- File uploads
- Advanced filtering
- Export functionality
- Analytics dashboard

---

**Version**: 1.0.0
**Last Updated**: 2024
**Status**: ✅ All pages functional with mock data
