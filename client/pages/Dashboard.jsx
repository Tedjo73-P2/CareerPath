import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  LayoutDashboard,
  FileText,
  Briefcase,
  Users,
  Settings,
  LogOut,
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />

      <div className="flex-1 section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {[
              { icon: <LayoutDashboard />, label: "Dashboard", count: "Overview" },
              { icon: <FileText />, label: "Applications", count: "Manage" },
              { icon: <Briefcase />, label: "Opportunities", count: "Browse" },
              { icon: <Users />, label: "Network", count: "Connect" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-white rounded-xl border border-slate-200 card-hover"
              >
                <div className="text-primary mb-3">{item.icon}</div>
                <h3 className="font-bold text-slate-900">{item.label}</h3>
                <p className="text-sm text-slate-600">{item.count}</p>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              Welcome to Your Dashboard
            </h2>
            <p className="text-slate-600 mb-6">
              This is a placeholder dashboard. Additional features will be implemented as per your requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/"
                className="btn-primary bg-gradient-to-r from-primary to-cyan-500 text-white"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
