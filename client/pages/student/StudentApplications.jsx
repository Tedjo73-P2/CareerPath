import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Calendar, CheckCircle, XCircle, Clock, Plus, Trash2 } from "lucide-react";

export default function StudentApplications() {
  const [applications, setApplications] = useState([
    {
      id: 1,
      institution: "National University of Lesotho",
      course: "Computer Science",
      faculty: "Engineering & Technology",
      appliedDate: "2024-01-15",
      decidedDate: "2024-02-20",
      status: "accepted",
      requirements: { minGPA: 3.5, courses: ["Math", "Physics"] },
    },
    {
      id: 2,
      institution: "Lesotho College of Education",
      course: "Education & Technology",
      faculty: "Education",
      appliedDate: "2024-02-01",
      decidedDate: null,
      status: "pending",
      requirements: { minGPA: 3.0, courses: ["Education", "Technology"] },
    },
    {
      id: 3,
      institution: "Limkokwing University",
      course: "Digital Design",
      faculty: "Creative Technology",
      appliedDate: "2024-01-20",
      decidedDate: "2024-02-15",
      status: "rejected",
      requirements: { minGPA: 3.2, courses: ["Design", "Technology"] },
    },
  ]);

  const getStatusIcon = (status) => {
    switch(status) {
      case "accepted": return <CheckCircle className="w-6 h-6 text-green-600" />;
      case "rejected": return <XCircle className="w-6 h-6 text-red-600" />;
      case "pending": return <Clock className="w-6 h-6 text-yellow-600" />;
      default: return null;
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case "accepted": return "bg-green-50 border-green-200 text-green-700";
      case "rejected": return "bg-red-50 border-red-200 text-red-700";
      case "pending": return "bg-yellow-50 border-yellow-200 text-yellow-700";
      default: return "bg-slate-50 border-slate-200 text-slate-700";
    }
  };

  const deleteApplication = (id) => {
    setApplications(applications.filter(app => app.id !== id));
  };

  const stats = {
    total: applications.length,
    pending: applications.filter(a => a.status === "pending").length,
    accepted: applications.filter(a => a.status === "accepted").length,
    rejected: applications.filter(a => a.status === "rejected").length,
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />

      <div className="flex-1 section-padding">
        <div className="container-custom">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold text-slate-900 mb-2">Your Applications</h1>
              <p className="text-lg text-slate-600">Track and manage all your course applications</p>
            </div>
            <Link
              to="/student/institutions"
              className="btn-primary inline-flex items-center gap-2 bg-gradient-to-r from-primary to-cyan-500"
            >
              <Plus className="w-5 h-5" />
              New Application
            </Link>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            {[
              { label: "Total", value: stats.total, color: "blue" },
              { label: "Pending", value: stats.pending, color: "yellow" },
              { label: "Accepted", value: stats.accepted, color: "green" },
              { label: "Rejected", value: stats.rejected, color: "red" },
            ].map((stat, idx) => (
              <div key={idx} className={`rounded-xl p-4 bg-${stat.color}-50 border border-${stat.color}-200`}>
                <p className={`text-sm font-medium text-${stat.color}-700`}>{stat.label}</p>
                <p className={`text-3xl font-bold text-${stat.color}-900 mt-2`}>{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Applications List */}
          <div className="space-y-4">
            {applications.length > 0 ? (
              applications.map((app) => (
                <div key={app.id} className={`rounded-xl border p-6 bg-white ${getStatusColor(app.status)}`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-4">
                      <div>{getStatusIcon(app.status)}</div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">{app.institution}</h3>
                        <p className="text-slate-600">{app.course}</p>
                        <p className="text-sm text-slate-500">{app.faculty}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="px-4 py-2 rounded-full font-semibold text-sm capitalize">
                        {app.status}
                      </span>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 mb-4 pb-4 border-b border-current border-opacity-20">
                    <div>
                      <p className="text-xs font-medium opacity-75">Applied Date</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(app.appliedDate).toLocaleDateString()}
                      </div>
                    </div>
                    {app.decidedDate && (
                      <div>
                        <p className="text-xs font-medium opacity-75">Decision Date</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(app.decidedDate).toLocaleDateString()}
                        </div>
                      </div>
                    )}
                    <div>
                      <p className="text-xs font-medium opacity-75">Min. GPA Required</p>
                      <p className="mt-1 font-semibold">{app.requirements.minGPA}</p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Link
                      to={`/student/application/${app.id}`}
                      className="px-4 py-2 bg-primary text-white rounded-lg font-medium hover:opacity-90 transition"
                    >
                      View Details
                    </Link>
                    {app.status === "pending" && (
                      <button
                        onClick={() => deleteApplication(app.id)}
                        className="px-4 py-2 bg-red-100 text-red-700 rounded-lg font-medium hover:bg-red-200 transition flex items-center gap-2"
                      >
                        <Trash2 className="w-4 h-4" />
                        Withdraw
                      </button>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className="bg-white rounded-xl border border-slate-200 p-12 text-center">
                <p className="text-slate-600 text-lg mb-4">You haven't submitted any applications yet</p>
                <Link
                  to="/student/institutions"
                  className="btn-primary inline-block bg-gradient-to-r from-primary to-cyan-500"
                >
                  Browse Institutions
                </Link>
              </div>
            )}
          </div>

          {/* Application Tips */}
          <div className="mt-12 bg-blue-50 rounded-xl border border-blue-200 p-8">
            <h3 className="text-xl font-bold text-blue-900 mb-4">💡 Application Tips</h3>
            <ul className="space-y-2 text-blue-800">
              <li>• Ensure your GPA meets the institution's minimum requirement</li>
              <li>• Check the required documents and deadline dates</li>
              <li>• You can apply to a maximum of 2 courses per institution</li>
              <li>• If admitted to multiple institutions, you can choose your preferred one</li>
              <li>• Keep track of application status through your dashboard</li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
