import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  Users,
  Building2,
  Briefcase,
  TrendingUp,
  AlertCircle,
  CheckCircle,
} from "lucide-react";

export default function AdminDashboard() {
  const systemStats = {
    totalUsers: 12450,
    students: 10200,
    institutions: 15,
    companies: 28,
    applications: 3420,
    approvedCompanies: 26,
    pendingCompanies: 2,
  };

  const userGrowth = [
    { month: "Jul", students: 8200, institutions: 12, companies: 18 },
    { month: "Aug", students: 8600, institutions: 13, companies: 20 },
    { month: "Sep", students: 9000, institutions: 13, companies: 22 },
    { month: "Oct", students: 9400, institutions: 14, companies: 24 },
    { month: "Nov", students: 9800, institutions: 14, companies: 26 },
    { month: "Dec", students: 10200, institutions: 15, companies: 28 },
  ];

  const recentActivity = [
    {
      id: 1,
      type: "user",
      message: "New student registration: Mpilo Ndaba",
      date: "2024-02-21 14:32",
    },
    {
      id: 2,
      type: "company",
      message: "Company approval: Stellar Innovations Ltd",
      date: "2024-02-21 12:15",
    },
    {
      id: 3,
      type: "institution",
      message: "New course added: NUL - Data Science",
      date: "2024-02-20 16:45",
    },
    {
      id: 4,
      type: "application",
      message: "1000 applications submitted this week",
      date: "2024-02-20 10:20",
    },
    {
      id: 5,
      type: "alert",
      message: "System performance: 99.8% uptime",
      date: "2024-02-19 23:59",
    },
  ];

  const pendingApprovals = [
    {
      id: 1,
      name: "Digital Innovations Ltd",
      type: "company",
      submitted: "2024-02-18",
    },
    {
      id: 2,
      name: "Swift Tech Solutions",
      type: "company",
      submitted: "2024-02-19",
    },
  ];

  const getActivityIcon = (type) => {
    switch (type) {
      case "user":
        return "👤";
      case "company":
        return "🏢";
      case "institution":
        return "🎓";
      case "application":
        return "📄";
      case "alert":
        return "⚠️";
      default:
        return "📌";
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />

      <div className="flex-1 section-padding">
        <div className="container-custom">
          {/* Welcome */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-slate-900">
              System Administration Dashboard 🛡️
            </h1>
            <p className="text-slate-600 mt-2">
              Manage the platform, users, and approvals
            </p>
          </div>

          {/* Key Stats */}
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            {[
              {
                icon: <Users />,
                label: "Total Users",
                value: systemStats.totalUsers,
                color: "blue",
              },
              {
                icon: <Users />,
                label: "Students",
                value: systemStats.students,
                color: "green",
              },
              {
                icon: <Building2 />,
                label: "Institutions",
                value: systemStats.institutions,
                color: "purple",
              },
              {
                icon: <Briefcase />,
                label: "Companies",
                value: systemStats.companies,
                color: "orange",
              },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 border border-slate-200 card-hover"
              >
                <div className={`text-${stat.color}-600 mb-3`}>{stat.icon}</div>
                <p className="text-slate-600 text-sm">{stat.label}</p>
                <p className="text-3xl font-bold text-slate-900 mt-2">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            {/* User Growth Chart */}
            <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 p-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                User Growth Trends
              </h2>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={userGrowth}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="students"
                    stroke="#2563eb"
                    strokeWidth={2}
                  />
                  <Line
                    type="monotone"
                    dataKey="institutions"
                    stroke="#059669"
                    strokeWidth={2}
                  />
                  <Line
                    type="monotone"
                    dataKey="companies"
                    stroke="#f59e0b"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Approvals Status */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 h-fit">
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                Approvals Status
              </h2>
              <div className="space-y-4">
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <p className="font-semibold text-green-900">
                      Approved Companies
                    </p>
                  </div>
                  <p className="text-2xl font-bold text-green-700">
                    {systemStats.approvedCompanies}
                  </p>
                </div>
                <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <div className="flex items-center gap-2 mb-1">
                    <AlertCircle className="w-5 h-5 text-yellow-600" />
                    <p className="font-semibold text-yellow-900">
                      Pending Review
                    </p>
                  </div>
                  <p className="text-2xl font-bold text-yellow-700">
                    {systemStats.pendingCompanies}
                  </p>
                </div>
                <Link
                  to="/admin/approvals"
                  className="w-full p-3 bg-primary text-white rounded-lg font-medium hover:opacity-90 transition text-center"
                >
                  Review Pending
                </Link>
              </div>
            </div>
          </div>

          {/* Pending Approvals */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-slate-900">
                Pending Approvals
              </h2>
              <Link
                to="/admin/approvals"
                className="text-primary font-semibold hover:underline"
              >
                View All →
              </Link>
            </div>
            {pendingApprovals.length > 0 ? (
              <div className="space-y-3">
                {pendingApprovals.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 border border-yellow-200 bg-yellow-50 rounded-lg flex items-center justify-between"
                  >
                    <div>
                      <p className="font-semibold text-slate-900">
                        {item.name}
                      </p>
                      <p className="text-sm text-slate-600">
                        Type: {item.type} | Submitted: {item.submitted}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <button className="px-4 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition">
                        Approve
                      </button>
                      <button className="px-4 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition">
                        Reject
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-slate-600">No pending approvals</p>
            )}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Recent Activity */}
            <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 p-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Recent Activity
              </h2>
              <div className="space-y-3">
                {recentActivity.map((activity) => (
                  <div
                    key={activity.id}
                    className="p-4 border border-slate-200 rounded-lg flex gap-3 hover:bg-slate-50 transition"
                  >
                    <div className="text-2xl">
                      {getActivityIcon(activity.type)}
                    </div>
                    <div className="flex-1">
                      <p className="text-slate-900">{activity.message}</p>
                      <p className="text-xs text-slate-500 mt-1">
                        {activity.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Management Links */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 h-fit">
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                Management
              </h2>
              <div className="space-y-3">
                <Link
                  to="/admin/institutions"
                  className="block p-3 bg-blue-50 text-blue-700 rounded-lg font-medium hover:bg-blue-100 transition"
                >
                  Manage Institutions
                </Link>
                <Link
                  to="/admin/companies"
                  className="block p-3 bg-orange-50 text-orange-700 rounded-lg font-medium hover:bg-orange-100 transition"
                >
                  Manage Companies
                </Link>
                <Link
                  to="/admin/users"
                  className="block p-3 bg-green-50 text-green-700 rounded-lg font-medium hover:bg-green-100 transition"
                >
                  View Users
                </Link>
                <Link
                  to="/admin/reports"
                  className="block p-3 bg-purple-50 text-purple-700 rounded-lg font-medium hover:bg-purple-100 transition"
                >
                  System Reports
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
