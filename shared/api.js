/**
 * Shared types between client and server
 * These define the API contracts for all endpoints
 */

// Auth endpoints
export const AuthEndpoints = {
  REGISTER: "/api/auth/register",
  LOGIN: "/api/auth/login",
  LOGOUT: "/api/auth/logout",
  VERIFY_EMAIL: "/api/auth/verify-email",
  REFRESH_TOKEN: "/api/auth/refresh",
};

// Student endpoints
export const StudentEndpoints = {
  GET_PROFILE: "/api/students/profile",
  UPDATE_PROFILE: "/api/students/profile",
  GET_APPLICATIONS: "/api/students/applications",
  CREATE_APPLICATION: "/api/students/applications",
  GET_ADMISSION_RESULTS: "/api/students/admissions",
  GET_JOB_OPPORTUNITIES: "/api/students/jobs",
  APPLY_FOR_JOB: "/api/students/jobs/apply",
  UPLOAD_TRANSCRIPT: "/api/students/transcript",
};

// Institution endpoints
export const InstitutionEndpoints = {
  GET_PROFILE: "/api/institutions/profile",
  UPDATE_PROFILE: "/api/institutions/profile",
  GET_FACULTIES: "/api/institutions/faculties",
  CREATE_FACULTY: "/api/institutions/faculties",
  UPDATE_FACULTY: "/api/institutions/faculties/:id",
  GET_COURSES: "/api/institutions/courses",
  CREATE_COURSE: "/api/institutions/courses",
  UPDATE_COURSE: "/api/institutions/courses/:id",
  GET_APPLICATIONS: "/api/institutions/applications",
  UPDATE_APPLICATION_STATUS: "/api/institutions/applications/:id/status",
  PUBLISH_ADMISSIONS: "/api/institutions/publish-admissions",
};

// Company endpoints
export const CompanyEndpoints = {
  GET_PROFILE: "/api/companies/profile",
  UPDATE_PROFILE: "/api/companies/profile",
  GET_JOBS: "/api/companies/jobs",
  CREATE_JOB: "/api/companies/jobs",
  UPDATE_JOB: "/api/companies/jobs/:id",
  GET_APPLICATIONS: "/api/companies/applications",
  GET_QUALIFIED_APPLICANTS: "/api/companies/qualified-applicants",
};

// Admin endpoints
export const AdminEndpoints = {
  GET_DASHBOARD: "/api/admin/dashboard",
  GET_USERS: "/api/admin/users",
  GET_INSTITUTIONS: "/api/admin/institutions",
  APPROVE_INSTITUTION: "/api/admin/institutions/:id/approve",
  SUSPEND_INSTITUTION: "/api/admin/institutions/:id/suspend",
  GET_COMPANIES: "/api/admin/companies",
  APPROVE_COMPANY: "/api/admin/companies/:id/approve",
  SUSPEND_COMPANY: "/api/admin/companies/:id/suspend",
  GET_REPORTS: "/api/admin/reports",
};

// Example responses
export const DemoResponse = {
  message: "Hello from Express server",
};

// User types for reference
export const UserRole = {
  ADMIN: "admin",
  STUDENT: "student",
  INSTITUTION: "institution",
  COMPANY: "company",
};

// Application status
export const ApplicationStatus = {
  PENDING: "pending",
  ACCEPTED: "accepted",
  REJECTED: "rejected",
  WITHDRAWN: "withdrawn",
};

// Job status
export const JobStatus = {
  OPEN: "open",
  CLOSED: "closed",
  FILLED: "filled",
};
