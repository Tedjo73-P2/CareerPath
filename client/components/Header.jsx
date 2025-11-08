import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="container-custom flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 font-bold text-2xl">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-cyan-500 rounded-lg"></div>
          <span className="text-slate-900">CareerPath</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#features"
            className="text-slate-600 hover:text-primary transition"
          >
            Features
          </a>
          <a
            href="#about"
            className="text-slate-600 hover:text-primary transition"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-slate-600 hover:text-primary transition"
          >
            Contact
          </a>
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/login"
            className="text-slate-600 hover:text-primary transition font-medium"
          >
            Sign In
          </Link>
          <Link
            to="/register"
            className="btn-primary bg-gradient-to-r from-primary to-cyan-500 text-white"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-slate-900" />
          ) : (
            <Menu className="w-6 h-6 text-slate-900" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="container-custom py-4 space-y-4">
            <a
              href="#features"
              className="block text-slate-600 hover:text-primary transition"
            >
              Features
            </a>
            <a
              href="#about"
              className="block text-slate-600 hover:text-primary transition"
            >
              About
            </a>
            <a
              href="#contact"
              className="block text-slate-600 hover:text-primary transition"
            >
              Contact
            </a>
            <div className="pt-4 space-y-2 border-t border-slate-200">
              <Link
                to="/login"
                className="block text-center py-2 text-slate-600 hover:text-primary transition"
              >
                Sign In
              </Link>
              <Link
                to="/register"
                className="btn-primary block text-center bg-gradient-to-r from-primary to-cyan-500 text-white"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
