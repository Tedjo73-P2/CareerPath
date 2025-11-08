import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Plus, Edit2, Trash2, Users, DollarSign } from "lucide-react";

export default function ManageCourses() {
  const [courses, setCourses] = useState([
    {
      id: 1,
      name: "Computer Science",
      code: "CS101",
      faculty: "Engineering & Technology",
      credits: 120,
      capacity: 80,
      applications: 125,
      description: "Comprehensive study of computer science fundamentals",
    },
    {
      id: 2,
      name: "Software Engineering",
      code: "CS201",
      faculty: "Engineering & Technology",
      credits: 120,
      capacity: 60,
      applications: 98,
      description: "Modern software development practices and methodologies",
    },
    {
      id: 3,
      name: "Data Science",
      code: "CS301",
      faculty: "Engineering & Technology",
      credits: 120,
      capacity: 50,
      applications: 76,
      description: "Big data analytics and machine learning applications",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newCourse, setNewCourse] = useState({
    name: "",
    code: "",
    faculty: "",
    credits: 120,
    capacity: 50,
  });

  const handleAddCourse = (e) => {
    e.preventDefault();
    if (newCourse.name && newCourse.code) {
      setCourses([...courses, { ...newCourse, id: Date.now(), applications: 0 }]);
      setNewCourse({ name: "", code: "", faculty: "", credits: 120, capacity: 50 });
      setShowModal(false);
    }
  };

  const deleteCourse = (id) => {
    setCourses(courses.filter(c => c.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />

      <div className="flex-1 section-padding">
        <div className="container-custom">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold text-slate-900 mb-2">Manage Courses</h1>
              <p className="text-lg text-slate-600">Create and manage your academic programs</p>
            </div>
            <button
              onClick={() => setShowModal(true)}
              className="btn-primary inline-flex items-center gap-2 bg-gradient-to-r from-primary to-cyan-500"
            >
              <Plus className="w-5 h-5" />
              Add Course
            </button>
          </div>

          {/* Courses Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {courses.map((course) => (
              <div key={course.id} className="bg-white rounded-xl border border-slate-200 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{course.name}</h3>
                    <p className="text-slate-600 text-sm">{course.code}</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition">
                      <Edit2 className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => deleteCourse(course.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <p className="text-slate-600 text-sm mb-4">{course.description}</p>

                <div className="space-y-3 mb-4 pb-4 border-b border-slate-200">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">Faculty: {course.faculty}</span>
                    <span className="font-semibold text-slate-900">{course.credits} Credits</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-slate-600" />
                    <span className="text-sm text-slate-600">
                      {course.applications}/{course.capacity} capacity ({Math.round((course.applications / course.capacity) * 100)}%)
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-primary to-cyan-500 h-2 rounded-full"
                      style={{ width: `${(course.applications / course.capacity) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <Link
                  to={`/institution/course/${course.id}`}
                  className="text-primary font-semibold hover:underline text-sm"
                >
                  View Applications →
                </Link>
              </div>
            ))}
          </div>

          {/* Add Course Modal */}
          {showModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-xl p-8 max-w-md w-full mx-4">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Add New Course</h2>
                <form onSubmit={handleAddCourse} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-900 mb-2">Course Name</label>
                    <input
                      type="text"
                      value={newCourse.name}
                      onChange={(e) => setNewCourse({...newCourse, name: e.target.value})}
                      placeholder="e.g., Computer Science"
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-900 mb-2">Course Code</label>
                    <input
                      type="text"
                      value={newCourse.code}
                      onChange={(e) => setNewCourse({...newCourse, code: e.target.value})}
                      placeholder="e.g., CS101"
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-900 mb-2">Faculty</label>
                    <input
                      type="text"
                      value={newCourse.faculty}
                      onChange={(e) => setNewCourse({...newCourse, faculty: e.target.value})}
                      placeholder="e.g., Engineering & Technology"
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-900 mb-2">Credits</label>
                      <input
                        type="number"
                        value={newCourse.credits}
                        onChange={(e) => setNewCourse({...newCourse, credits: parseInt(e.target.value)})}
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-900 mb-2">Capacity</label>
                      <input
                        type="number"
                        value={newCourse.capacity}
                        onChange={(e) => setNewCourse({...newCourse, capacity: parseInt(e.target.value)})}
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>
                  <div className="flex gap-3 pt-4">
                    <button
                      type="button"
                      onClick={() => setShowModal(false)}
                      className="flex-1 px-4 py-2 border border-slate-300 rounded-lg font-medium text-slate-700 hover:bg-slate-50 transition"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 px-4 py-2 bg-primary text-white rounded-lg font-medium hover:opacity-90 transition"
                    >
                      Add Course
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
