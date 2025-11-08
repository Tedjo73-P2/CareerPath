import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ArrowRight, Users, Briefcase, GraduationCap, Zap, Shield, TrendingUp } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="flex-1 section-padding bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-20 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow animation-delay-2000"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Your Path to Success Starts Here
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Discover top institutions, pursue your dreams, and land your perfect job. A comprehensive platform connecting students, educators, and employers across Lesotho.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/register"
                className="btn-primary inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-cyan-500 hover:shadow-lg transition-all"
              >
                Get Started <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/login"
                className="btn-secondary text-white border-white hover:bg-white/10"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">
              Everything You Need
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A unified platform designed for students, institutions, and employers to work together seamlessly.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <GraduationCap className="w-8 h-8" />,
                title: "For Students",
                description: "Explore institutions, apply for courses, view admissions results, and discover career opportunities.",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "For Institutions",
                description: "Manage programs, review applications, publish admissions, and connect with talented students.",
              },
              {
                icon: <Briefcase className="w-8 h-8" />,
                title: "For Companies",
                description: "Post jobs, discover qualified graduates, and build your dream team with top talent.",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="p-8 rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white card-hover"
              >
                <div className="text-primary mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="section-padding bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold mb-6 text-slate-900">
                Seamless Integration
              </h2>
              <ul className="space-y-4">
                {[
                  { icon: <Shield className="w-6 h-6" />, text: "Secure authentication with email verification" },
                  { icon: <TrendingUp className="w-6 h-6" />, text: "Smart matching between students and opportunities" },
                  { icon: <Zap className="w-6 h-6" />, text: "Real-time notifications and updates" },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="text-primary mt-1">{item.icon}</div>
                    <span className="text-lg text-slate-700">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-cyan-500/20 flex items-center justify-center">
                <GraduationCap className="w-32 h-32 text-primary/50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary/10 to-cyan-500/10 border-t border-slate-200">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6 text-slate-900">
            Ready to Transform Your Future?
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Join thousands of students, institutions, and employers already using our platform.
          </p>
          <Link
            to="/register"
            className="btn-primary inline-flex items-center gap-2 bg-gradient-to-r from-primary to-cyan-500 hover:shadow-lg transition-all"
          >
            Create Account <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
