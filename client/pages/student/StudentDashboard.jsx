import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { BookOpen, FileText, Briefcase, Bell, Clock, CheckCircle, AlertCircle } from "lucide-react";

export default function StudentDashboard() {
  const studentData = {
    name: "Thabo Mokoena",
    email: "thabo.mokoena@student.ls",
    gpa: 3.8,
    applications: 2,
    admissions: 1,
  };

  const recentApplications = [
    {
      id: 1,
      institution: "National University of Lesotho",
      course: "Computer Science",
      status: "accepted",
      appliedDate: "2024-01-15",
      decidedDate: "2024-02-20",
    },
    {
      id: 2,
      institution: "Lesotho College of Education",
      course: "Education & Technology",
      status: "pending",
      appliedDate: "2024-02-01",
      decidedDate: null,
    },
  ];

  const notifications = [
    { id: 1, type: "admission", message: "You were admitted to NUL - Computer Science", date: "2024-02-20" },
    { id: 2, type: "job", message: "New job: Junior Developer at Tech Solutions Ltd", date: "2024-02-18" },
    { id: 3, type: "update", message: "Your application to LCE is under review", date: "2024-02-15" },
  ];

  const chartData = [
    { month: "Jan", applications: 1 },
    { month: "Feb", applications: 2 },
    { month: "Mar", applications: 2 },
    { month: "Apr", applications: 0 },
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case "accepted": return "text-green-600 bg-green-50";
      case "rejected": return "text-red-600 bg-red-50";
      case "pending": return "text-yellow-600 bg-yellow-50";
      default: return "text-blue-600 bg-blue-50";
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />

      <div className="flex-1 section-padding">
        <div className="container-custom">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-slate-900 mb-2">Welcome back, {studentData.name}! 👋</h1>
            <p className="text-lg text-slate-600">Track your applications and explore opportunities</p>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            {[
              { icon: <FileText />, label: "Applications", value: studentData.applications, color: "blue" },
              { icon: <CheckCircle />, label: "Admissions", value: studentData.admissions, color: "green" },
              { icon: <BookOpen />, label: "GPA", value: studentData.gpa.toFixed(2), color: "purple" },
              { icon: <Bell />, label: "Notifications", value: notifications.length, color: "orange" },
            ].map((stat, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 border border-slate-200 card-hover">
                <div className={`text-${stat.color}-600 mb-3`}>{stat.icon}</div>
                <p className="text-slate-600 text-sm">{stat.label}</p>
                <p className="text-3xl font-bold text-slate-900 mt-2">{stat.value}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            {/* Recent Applications */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl border border-slate-200 p-6">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Your Applications</h2>
                <div className="space-y-4">
                  {recentApplications.map((app) => (
                    <div key={app.id} className="p-4 border border-slate-200 rounded-lg hover:shadow-md transition">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-bold text-slate-900">{app.institution}</h3>
                          <p className="text-slate-600 text-sm">{app.course}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(app.status)}`}>
                          {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                        </span>
                      </div>
                      <div className="flex gap-6 text-xs text-slate-500">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          Applied: {new Date(app.appliedDate).toLocaleDateString()}
                        </div>
                        {app.decidedDate && (
                          <div className="flex items-center gap-1">
                            <CheckCircle className="w-4 h-4" />
                            Decided: {new Date(app.decidedDate).toLocaleDateString()}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <Link
                  to="/student/applications"
                  className="mt-6 inline-block text-primary font-semibold hover:underline"
                >
                  View all applications →
                </Link>
              </div>

              {/* Applications Chart */}
              <div className="bg-white rounded-xl border border-slate-200 p-6 mt-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Application Trend</h2>
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
            </div>

            {/* Notifications Sidebar */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 h-fit">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Notifications</h2>
              <div className="space-y-3">
                {notifications.map((notif) => (
                  <div key={notif.id} className="p-3 bg-blue-50 rounded-lg border border-blue-100">
                    <p className="text-sm font-medium text-slate-900">{notif.message}</p>
                    <p className="text-xs text-slate-500 mt-1">{notif.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-gradient-to-r from-primary/10 to-cyan-500/10 rounded-xl border border-slate-200 p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Quick Actions</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                to="/student/institutions"
                className="p-4 bg-white rounded-lg border border-slate-200 hover:shadow-md transition flex items-center gap-3"
              >
                <BookOpen className="w-6 h-6 text-primary" />
                <div>
                  <p className="font-semibold text-slate-900">Browse Institutions</p>
                  <p className="text-sm text-slate-600">Explore top universities</p>
                </div>
              </Link>
              <Link
                to="/student/jobs"
                className="p-4 bg-white rounded-lg border border-slate-200 hover:shadow-md transition flex items-center gap-3"
              >
                <Briefcase className="w-6 h-6 text-primary" />
                <div>
                  <p className="font-semibold text-slate-900">Browse Jobs</p>
                  <p className="text-sm text-slate-600">Find career opportunities</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
