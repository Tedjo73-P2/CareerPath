import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Search, MapPin, DollarSign, Briefcase, ChevronRight } from "lucide-react";

export default function StudentJobs() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const jobs = [
    {
      id: 1,
      title: "Junior Developer",
      company: "Tech Solutions Ltd",
      salary: "M20,000 - M25,000",
      location: "Maseru",
      category: "IT",
      description: "We're looking for a junior developer to join our growing team.",
      requirements: { minGPA: 3.5, experience: 0 },
      featured: true,
    },
    {
      id: 2,
      title: "Data Analyst",
      company: "DataWorks Analytics",
      salary: "M22,000 - M28,000",
      location: "Maseru",
      category: "IT",
      description: "Analyze and visualize data to drive business decisions.",
      requirements: { minGPA: 3.4, experience: 1 },
      featured: true,
    },
    {
      id: 3,
      title: "Business Analyst",
      company: "Corporate Solutions",
      salary: "M18,000 - M23,000",
      location: "Maseru",
      category: "Business",
      description: "Join our team to analyze business requirements and solutions.",
      requirements: { minGPA: 3.2, experience: 0 },
      featured: true,
    },
    {
      id: 4,
      title: "Marketing Officer",
      company: "Creative Minds Agency",
      salary: "M15,000 - M20,000",
      location: "Maseru",
      category: "Marketing",
      description: "Create and execute marketing strategies for diverse clients.",
      requirements: { minGPA: 3.0, experience: 1 },
      featured: false,
    },
    {
      id: 5,
      title: "HR Specialist",
      company: "Lesotho Holdings",
      salary: "M16,000 - M21,000",
      location: "Leribe",
      category: "HR",
      description: "Support human resources operations and employee development.",
      requirements: { minGPA: 3.0, experience: 0 },
      featured: false,
    },
  ];

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || job.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ["all", "IT", "Business", "Marketing", "HR", "Education"];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />

      <div className="flex-1 section-padding">
        <div className="container-custom">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-2">Job Opportunities</h1>
            <p className="text-lg text-slate-600">Find your next career opportunity with leading companies</p>
          </div>

          {/* Search and Filter */}
          <div className="mb-8 space-y-4">
            <div className="relative">
              <Search className="absolute left-4 top-3 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search jobs or companies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-lg font-medium transition ${
                    selectedCategory === cat
                      ? "bg-primary text-white"
                      : "bg-white border border-slate-200 text-slate-700 hover:border-primary"
                  }`}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Featured Jobs */}
          {selectedCategory === "all" && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Featured Positions</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {jobs.filter(j => j.featured).map((job) => (
                  <Link
                    key={job.id}
                    to={`/student/job/${job.id}`}
                    className="bg-gradient-to-br from-primary/5 to-cyan-500/5 rounded-xl border border-primary/20 p-6 hover:shadow-lg transition card-hover"
                  >
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-slate-900 mb-1">{job.title}</h3>
                      <p className="text-slate-600">{job.company}</p>
                    </div>
                    <p className="text-slate-600 text-sm mb-4">{job.description}</p>
                    <div className="space-y-2 text-sm text-slate-600 mb-4">
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4" />
                        {job.salary}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </div>
                    </div>
                    <div className="flex items-center text-primary font-semibold">
                      View Details <ChevronRight className="w-4 h-4 ml-2" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* All Jobs */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Available Positions</h2>
            {filteredJobs.length > 0 ? (
              <div className="space-y-4">
                {filteredJobs.map((job) => (
                  <Link
                    key={job.id}
                    to={`/student/job/${job.id}`}
                    className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition card-hover"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-1">{job.title}</h3>
                        <p className="text-slate-600">{job.company}</p>
                      </div>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                        {job.category}
                      </span>
                    </div>
                    <p className="text-slate-600 text-sm mb-4">{job.description}</p>
                    <div className="grid md:grid-cols-3 gap-4 mb-4 pb-4 border-b border-slate-200">
                      <div className="flex items-center gap-2 text-slate-600">
                        <DollarSign className="w-4 h-4" />
                        {job.salary}
                      </div>
                      <div className="flex items-center gap-2 text-slate-600">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-2 text-slate-600">
                        <Briefcase className="w-4 h-4" />
                        Min GPA: {job.requirements.minGPA}
                      </div>
                    </div>
                    <button className="px-4 py-2 bg-primary text-white rounded-lg font-medium hover:opacity-90 transition">
                      Apply Now
                    </button>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-slate-600 text-lg">No jobs found matching your criteria</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
