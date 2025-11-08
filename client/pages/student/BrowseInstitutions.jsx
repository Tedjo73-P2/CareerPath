import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Search, MapPin, Users, Award, ChevronRight } from "lucide-react";

export default function BrowseInstitutions() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");

  const institutions = [
    {
      id: 1,
      name: "National University of Lesotho",
      location: "Roma, Lesotho",
      type: "university",
      students: 8500,
      courses: 45,
      rating: 4.8,
      featured: true,
      description: "Leading university offering diverse programs in technology, business, and sciences.",
      logo: "🎓",
    },
    {
      id: 2,
      name: "Lesotho College of Education",
      location: "Maseru, Lesotho",
      type: "college",
      students: 2300,
      courses: 18,
      rating: 4.5,
      featured: true,
      description: "Premier institution for teacher education and professional development.",
      logo: "📚",
    },
    {
      id: 3,
      name: "Limkokwing University of Creative Technology",
      location: "Maseru, Lesotho",
      type: "university",
      students: 3200,
      courses: 32,
      rating: 4.6,
      featured: true,
      description: "Specialized in creative and technological education programs.",
      logo: "🎨",
    },
    {
      id: 4,
      name: "Lesotho Institute of Business Administration",
      location: "Maseru, Lesotho",
      type: "college",
      students: 1500,
      courses: 12,
      rating: 4.3,
      featured: false,
      description: "Business and management education for corporate professionals.",
      logo: "💼",
    },
    {
      id: 5,
      name: "Lerotholi Polytechnic",
      location: "Leribe, Lesotho",
      type: "college",
      students: 1800,
      courses: 15,
      rating: 4.2,
      featured: false,
      description: "Technical and vocational training in engineering and trades.",
      logo: "⚙️",
    },
  ];

  const filteredInstitutions = institutions.filter((inst) => {
    const matchesSearch = inst.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === "all" || inst.type === selectedType;
    return matchesSearch && matchesType;
  });

  const featuredInsts = institutions.filter((i) => i.featured);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />

      <div className="flex-1 section-padding">
        <div className="container-custom">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-2">Discover Institutions</h1>
            <p className="text-lg text-slate-600">Find the perfect university or college for your future</p>
          </div>

          {/* Search and Filter */}
          <div className="mb-8 space-y-4">
            <div className="relative">
              <Search className="absolute left-4 top-3 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search institutions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {[
                { value: "all", label: "All Types" },
                { value: "university", label: "Universities" },
                { value: "college", label: "Colleges" },
              ].map((filter) => (
                <button
                  key={filter.value}
                  onClick={() => setSelectedType(filter.value)}
                  className={`px-4 py-2 rounded-lg font-medium transition ${
                    selectedType === filter.value
                      ? "bg-primary text-white"
                      : "bg-white border border-slate-200 text-slate-700 hover:border-primary"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {/* Featured Institutions */}
          {selectedType === "all" && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Featured Institutions</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {featuredInsts.map((inst) => (
                  <Link
                    key={inst.id}
                    to={`/student/institution/${inst.id}`}
                    className="bg-gradient-to-br from-primary/5 to-cyan-500/5 rounded-xl border border-primary/20 p-6 hover:shadow-lg transition card-hover"
                  >
                    <div className="text-5xl mb-4">{inst.logo}</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{inst.name}</h3>
                    <p className="text-slate-600 text-sm mb-4">{inst.description}</p>
                    <div className="flex gap-4 text-sm text-slate-600 mb-4">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {inst.students} students
                      </div>
                      <div className="flex items-center gap-1">
                        <Award className="w-4 h-4" />
                        {inst.rating} ⭐
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

          {/* All Institutions */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              {selectedType === "all" ? "All Institutions" : `${selectedType.charAt(0).toUpperCase() + selectedType.slice(1)}s`}
            </h2>
            {filteredInstitutions.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-6">
                {filteredInstitutions.map((inst) => (
                  <Link
                    key={inst.id}
                    to={`/student/institution/${inst.id}`}
                    className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition card-hover"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl">{inst.logo}</div>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                        {inst.type.charAt(0).toUpperCase() + inst.type.slice(1)}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{inst.name}</h3>
                    <p className="text-slate-600 text-sm mb-4">{inst.description}</p>
                    <div className="flex items-center gap-1 text-slate-600 text-sm mb-4">
                      <MapPin className="w-4 h-4" />
                      {inst.location}
                    </div>
                    <div className="flex gap-6 text-sm text-slate-600 mb-4 pb-4 border-b border-slate-200">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {inst.students} students
                      </div>
                      <div className="flex items-center gap-1">
                        <Award className="w-4 h-4" />
                        {inst.courses} courses
                      </div>
                      <div className="flex items-center gap-1">
                        ⭐ {inst.rating}
                      </div>
                    </div>
                    <div className="flex items-center text-primary font-semibold text-sm">
                      View Courses <ChevronRight className="w-4 h-4 ml-2" />
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-slate-600 text-lg">No institutions found matching your criteria</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
