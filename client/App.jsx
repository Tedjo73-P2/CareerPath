import "./global.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Public Pages
import Index from "./pages/Index";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NotFound from "./pages/NotFound";

// Student Pages
import StudentDashboard from "./pages/student/StudentDashboard";
import BrowseInstitutions from "./pages/student/BrowseInstitutions";
import StudentApplications from "./pages/student/StudentApplications";
import StudentJobs from "./pages/student/StudentJobs";

// Institution Pages
import InstitutionDashboard from "./pages/institution/InstitutionDashboard";
import ManageCourses from "./pages/institution/ManageCourses";

// Company Pages
import CompanyDashboard from "./pages/company/CompanyDashboard";

// Admin Pages
import AdminDashboard from "./pages/admin/AdminDashboard";

const queryClient = new QueryClient();

const RootApp = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Student Routes */}
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/student/institutions" element={<BrowseInstitutions />} />
        <Route path="/student/applications" element={<StudentApplications />} />
        <Route path="/student/jobs" element={<StudentJobs />} />

        {/* Institution Routes */}
        <Route path="/institution/dashboard" element={<InstitutionDashboard />} />
        <Route path="/institution/manage-courses" element={<ManageCourses />} />

        {/* Company Routes */}
        <Route path="/company/dashboard" element={<CompanyDashboard />} />

        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />

        {/* Legacy Dashboard Route - Redirect to student dashboard */}
        <Route path="/dashboard" element={<StudentDashboard />} />

        {/* 404 Catch-all */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

// Initialize React root
const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<RootApp />);
}

export default RootApp;
