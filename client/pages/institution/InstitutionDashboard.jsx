import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Users, BookOpen, FileText, TrendingUp, Plus, CheckCircle } from "lucide-react";

export default function InstitutionDashboard() {
  const institutionData = {
    name: "National University of Lesotho",
    location: "Roma, Lesotho",
    totalStudents: 8500,
    totalCourses: 45,
    totalFaculties: 8,
    pendingApplications: 342,
  };

  const courseStats = [
    { id: 1, name: "Computer Science", applications: 125, capacity: 80 },
    { id: 2, name: "Engineering", applications: 98, capacity: 60 },
    { id: 3, name: "Business Admin", applications: 156, capacity: 100 },
    { id: 4, name: "Education", applications: 89, capacity: 70 },
  ];

  const recentApplications = [
    { id: 1, studentName: "Tumelo Mkhize", course: "Computer Science", status: "pending", date: "2024-02-20" },
    { id: 2, studentName: "Naledi Dlamini", course: "Engineering", status: "pending", date: "2024-02-19" },
    { id: 3, studentName: "Sipho Nkosi", course: "Business Admin", status: "reviewed", date: "2024-02-18" },
    { id: 4, studentName: "Thandi Mbatha", course: "Education", status: "pending", date: "2024-02-17" },
  ];

  const chartData = [
    { month: "Sep", applications: 120 },
    { month: "Oct", applications: 180 },
    { month: "Nov", applications: 220 },
    { month: "Dec", applications: 280 },
    { month: "Jan", applications: 320 },
    { month: "Feb", applications: 342 },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />

      <div className="flex-1 section-padding">
        <div className="container-custom">
          {/* Welcome */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-slate-900">Welcome, {institutionData.name}! 📚</h1>
            <p className="text-slate-600 mt-2">Manage your programs, applications, and admissions</p>
          </div>

          {/* Key Stats */}
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            {[
              { icon: <Users />, label: "Total Students", value: institutionData.totalStudents, color: "blue" },
              { icon: <BookOpen />, label: "Courses", value: institutionData.totalCourses, color: "green" },
              { icon: <FileText />, label: "Pending Apps", value: institutionData.pendingApplications, color: "orange" },
              { icon: <TrendingUp />, label: "Faculties", value: institutionData.totalFaculties, color: "purple" },
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
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="applications" stroke="#2563eb" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 h-fit">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <Link
                  to="/institution/manage-courses"
                  className="w-full p-3 bg-primary text-white rounded-lg font-medium hover:opacity-90 transition flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  Add Course
                </Link>
                <Link
                  to="/institution/manage-faculties"
                  className="w-full p-3 bg-blue-100 text-blue-700 rounded-lg font-medium hover:bg-blue-200 transition"
                >
                  Manage Faculties
                </Link>
                <Link
                  to="/institution/publish-admissions"
                  className="w-full p-3 bg-green-100 text-green-700 rounded-lg font-medium hover:bg-green-200 transition"
                >
                  Publish Admissions
                </Link>
              </div>
            </div>
          </div>

          {/* Top Courses */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Top Courses by Applications</h2>
            <div className="space-y-4">
              {courseStats.map((course) => (
                <div key={course.id} className="p-4 border border-slate-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-slate-900">{course.name}</h3>
                    <span className="text-sm font-semibold text-slate-600">{course.applications}/{course.capacity}</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-primary to-cyan-500 h-2 rounded-full"
                      style={{ width: `${(course.applications / course.capacity) * 100}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    {Math.round((course.applications / course.capacity) * 100)}% capacity
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Applications */}
          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-slate-900">Recent Applications</h2>
              <Link
                to="/institution/applications"
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
                      <p className="font-semibold text-slate-900">{app.studentName}</p>
                      <p className="text-sm text-slate-600">{app.course}</p>
                    </div>
                    <div className="text-right">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        app.status === "pending" ? "bg-yellow-100 text-yellow-700" : "bg-blue-100 text-blue-700"
                      }`}>
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
