import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-white mb-4">CareerPath</h3>
            <p className="text-sm text-slate-400">
              Connecting students, institutions, and employers across Lesotho.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">For Students</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-primary transition">
                  Browse Institutions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Apply for Courses
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Find Jobs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">For Institutions</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-primary transition">
                  Manage Programs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  View Applications
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Settings
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-primary transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
          <p>
            &copy; {currentYear} CareerPath. All rights reserved. | Built with
            passion for African education and employment.
          </p>
        </div>
      </div>
    </footer>
  );
}
