import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Briefcase, Users, FileText, TrendingUp, Plus, Eye } from "lucide-react";

export default function CompanyDashboard() {
  const companyData = {
    name: "Tech Solutions Ltd",
    location: "Maseru, Lesotho",
    industry: "Information Technology",
    activeJobs: 5,
    totalApplications: 127,
    viewsThisMonth: 1240,
  };

  const jobPostings = [
    { id: 1, title: "Junior Developer", applications: 35, views: 245, posted: "2024-01-15" },
    { id: 2, title: "UI/UX Designer", applications: 28, views: 189, posted: "2024-01-20" },
    { id: 3, title: "Data Analyst", applications: 42, views: 312, posted: "2024-02-01" },
    { id: 4, title: "Project Manager", applications: 22, views: 156, posted: "2024-02-10" },
  ];

  const recentApplications = [
    { id: 1, applicantName: "John Dlamini", position: "Junior Developer", status: "new", date: "2024-02-21" },
    { id: 2, applicantName: "Lesedi Mokoena", position: "UI/UX Designer", status: "interview", date: "2024-02-20" },
    { id: 3, applicantName: "Thato Khubone", position: "Data Analyst", status: "reviewing", date: "2024-02-20" },
    { id: 4, applicantName: "Naledi Setshotla", position: "Junior Developer", status: "new", date: "2024-02-19" },
  ];

  const chartData = [
    { month: "Sep", applications: 12 },
    { month: "Oct", applications: 18 },
    { month: "Nov", applications: 22 },
    { month: "Dec", applications: 28 },
    { month: "Jan", applications: 35 },
    { month: "Feb", applications: 42 },
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case "new": return "bg-blue-100 text-blue-700";
      case "reviewing": return "bg-yellow-100 text-yellow-700";
      case "interview": return "bg-green-100 text-green-700";
      default: return "bg-slate-100 text-slate-700";
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />

      <div className="flex-1 section-padding">
        <div className="container-custom">
          {/* Welcome */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-slate-900">Welcome, {companyData.name}! 🎯</h1>
            <p className="text-slate-600 mt-2">Find and hire top talent from our network</p>
          </div>

          {/* Key Stats */}
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            {[
              { icon: <Briefcase />, label: "Active Jobs", value: companyData.activeJobs, color: "blue" },
              { icon: <Users />, label: "Applications", value: companyData.totalApplications, color: "green" },
              { icon: <Eye />, label: "Views (Month)", value: companyData.viewsThisMonth, color: "purple" },
              { icon: <TrendingUp />, label: "Profile Views", value: "2.5K", color: "orange" },
            ].map((stat, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 border border-slate-200 card-hover">
                <div className={`text-${stat.color}-600 mb-3`}>{stat.icon}</div>
                <p className="text-slate-600 text-sm">{stat.label}</p>
                <p className="text-3xl font-bold text-slate-900 mt-2">{stat.value}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            {/* Application Trends */}
            <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 p-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Application Trends</h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="applications" fill="#2563eb" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 h-fit">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <Link
                  to="/company/post-job"
                  className="w-full p-3 bg-primary text-white rounded-lg font-medium hover:opacity-90 transition flex items-center gap-2 justify-center"
                >
                  <Plus className="w-4 h-4" />
                  Post Job
                </Link>
                <Link
                  to="/company/applications"
                  className="w-full p-3 bg-blue-100 text-blue-700 rounded-lg font-medium hover:bg-blue-200 transition"
                >
                  View Applications
                </Link>
                <Link
                  to="/company/profile"
                  className="w-full p-3 bg-slate-100 text-slate-700 rounded-lg font-medium hover:bg-slate-200 transition"
                >
                  Edit Profile
                </Link>
              </div>
            </div>
          </div>

          {/* Active Job Postings */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-slate-900">Active Job Postings</h2>
              <Link
                to="/company/jobs"
                className="text-primary font-semibold hover:underline"
              >
                Manage Jobs →
              </Link>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {jobPostings.map((job) => (
                <div key={job.id} className="p-4 border border-slate-200 rounded-lg hover:shadow-md transition">
                  <h3 className="font-bold text-slate-900 mb-2">{job.title}</h3>
                  <div className="space-y-1 text-sm text-slate-600 mb-3">
                    <p>📊 {job.applications} applications</p>
                    <p>👁️ {job.views} views</p>
                    <p>📅 Posted {job.posted}</p>
                  </div>
                  <Link
                    to={`/company/job/${job.id}`}
                    className="text-primary font-semibold text-sm hover:underline"
                  >
                    View Details →
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Applications */}
          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-slate-900">Recent Applications</h2>
              <Link
                to="/company/applications"
                className="text-primary font-semibold hover:underline"
              >
                View All →
              </Link>
            </div>
            <div className="space-y-3">
              {recentApplications.map((app) => (
                <div key={app.id} className="p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-slate-900">{app.applicantName}</p>
                      <p className="text-sm text-slate-600">{app.position}</p>
                    </div>
                    <div className="text-right">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(app.status)}`}>
                        {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                      </span>
                      <p className="text-xs text-slate-500 mt-1">{app.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
