import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Mail, Lock, User, AlertCircle, CheckCircle } from "lucide-react";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [userType, setUserType] = useState("student");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (step === 1) {
      setStep(2);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setIsLoading(true);
    try {
      // Placeholder for Firebase auth
      console.log("Register attempt:", { ...formData, userType });
      // Redirect to dashboard
      setTimeout(() => {
        navigate("/dashboard");
      }, 500);
    } catch (err) {
      setError("Registration failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />

      <div className="flex-1 section-padding">
        <div className="container-custom max-w-md mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
            <h1 className="text-3xl font-bold mb-2 text-slate-900">Join Us</h1>
            <p className="text-slate-600 mb-8">
              {step === 1
                ? "Choose your role to get started"
                : "Create your account"}
            </p>

            {/* Progress Indicator */}
            <div className="mb-8 flex gap-2">
              {[1, 2].map((s) => (
                <div
                  key={s}
                  className={`h-2 flex-1 rounded-full transition ${
                    s <= step ? "bg-primary" : "bg-slate-200"
                  }`}
                ></div>
              ))}
            </div>

            {error && (
              <div className="mb-6 flex gap-3 p-4 bg-red-50 rounded-lg border border-red-200">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                <p className="text-red-800">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {step === 1 ? (
                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-4">
                    I am a...
                  </label>
                  <div className="space-y-3">
                    {[
                      {
                        value: "student",
                        label: "Student",
                        description:
                          "Looking for education and career opportunities",
                      },
                      {
                        value: "institution",
                        label: "Institution",
                        description:
                          "Educational institution managing programs",
                      },
                      {
                        value: "company",
                        label: "Company",
                        description: "Employer looking for talented graduates",
                      },
                    ].map((type) => (
                      <button
                        key={type.value}
                        type="button"
                        onClick={() => setUserType(type.value)}
                        className={`w-full p-4 rounded-lg border-2 text-left transition ${
                          userType === type.value
                            ? "border-primary bg-blue-50"
                            : "border-slate-200 hover:border-slate-300"
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className={`w-5 h-5 rounded-full border-2 mt-1 flex items-center justify-center ${
                              userType === type.value
                                ? "border-primary bg-primary"
                                : "border-slate-300"
                            }`}
                          >
                            {userType === type.value && (
                              <CheckCircle className="w-4 h-4 text-white" />
                            )}
                          </div>
                          <div>
                            <p className="font-semibold text-slate-900">
                              {type.label}
                            </p>
                            <p className="text-sm text-slate-600">
                              {type.description}
                            </p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <>
                  <div>
                    <label className="block text-sm font-medium text-slate-900 mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-900 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-900 mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                      <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="••••••••"
                        className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-900 mb-2">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                      <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="••••••••"
                        className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        required
                      />
                    </div>
                  </div>

                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4" required />
                    <span className="text-sm text-slate-600">
                      I agree to the{" "}
                      <a href="#" className="text-primary hover:underline">
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a href="#" className="text-primary hover:underline">
                        Privacy Policy
                      </a>
                    </span>
                  </label>
                </>
              )}

              <div className="flex gap-3 pt-4">
                {step === 2 && (
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex-1 py-2 px-4 border border-slate-300 rounded-lg font-semibold text-slate-700 hover:bg-slate-50 transition"
                  >
                    Back
                  </button>
                )}
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`${step === 2 ? "flex-1" : "w-full"} py-2 bg-gradient-to-r from-primary to-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg transition disabled:opacity-50`}
                >
                  {isLoading
                    ? "Creating account..."
                    : step === 1
                      ? "Continue"
                      : "Create Account"}
                </button>
              </div>
            </form>

            <p className="text-center text-slate-600 mt-6">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-primary font-semibold hover:underline"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
