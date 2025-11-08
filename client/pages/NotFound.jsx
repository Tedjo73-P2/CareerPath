import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />

      <div className="flex-1 section-padding flex items-center justify-center">
        <div className="text-center">
          <AlertTriangle className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
          <h1 className="text-6xl font-bold text-slate-900 mb-2">404</h1>
          <p className="text-2xl text-slate-700 mb-4">Page Not Found</p>
          <p className="text-slate-600 mb-8 max-w-md">
            Sorry, the page you're looking for doesn't exist. Check the URL and
            try again, or return to the home page.
          </p>
          <Link
            to="/"
            className="btn-primary inline-block bg-gradient-to-r from-primary to-cyan-500 text-white"
          >
            Return to Home
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
