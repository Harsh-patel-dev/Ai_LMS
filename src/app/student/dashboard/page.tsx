'use client';

import { BookOpen, BarChart3, Settings, LogOut, Menu, X } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function StudentDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const courses = [
    {
      id: 1,
      title: 'Web Development Masterclass',
      instructor: 'John Doe',
      progress: 65,
      image: '🌐',
    },
    {
      id: 2,
      title: 'Machine Learning Basics',
      instructor: 'Jane Smith',
      progress: 40,
      image: '🤖',
    },
    {
      id: 3,
      title: 'Data Science Pro',
      instructor: 'Mike Johnson',
      progress: 85,
      image: '📊',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navbar */}
      <nav className="bg-slate-800/50 border-b border-slate-700 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold gradient-text">🚀 AI LMS</div>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden text-white"
          >
            {sidebarOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar */}
        <div
          className={`${
            sidebarOpen ? 'w-64' : 'w-0'
          } bg-slate-800/30 border-r border-slate-700 p-6 transition-all duration-300 overflow-hidden lg:w-64`}
        >
          <div className="space-y-6">
            <div>
              <h3 className="text-slate-400 text-xs font-semibold uppercase mb-3">Menu</h3>
              <nav className="space-y-2">
                <Link
                  href="#"
                  className="flex items-center gap-3 px-4 py-2 rounded-lg bg-orange-500/20 text-orange-500 font-semibold"
                >
                  <BookOpen className="w-5 h-5" />
                  Courses
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 px-4 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700/30 transition"
                >
                  <BarChart3 className="w-5 h-5" />
                  Progress
                </Link>
              </nav>
            </div>

            <div>
              <h3 className="text-slate-400 text-xs font-semibold uppercase mb-3">Settings</h3>
              <nav className="space-y-2">
                <Link
                  href="#"
                  className="flex items-center gap-3 px-4 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700/30 transition"
                >
                  <Settings className="w-5 h-5" />
                  Settings
                </Link>
                <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-red-400 hover:text-red-300 hover:bg-red-500/10 transition">
                  <LogOut className="w-5 h-5" />
                  Logout
                </button>
              </nav>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="max-w-6xl">
            {/* Header */}
            <div className="mb-12">
              <h1 className="text-4xl font-bold text-white mb-2">Welcome back, Student! 👋</h1>
              <p className="text-slate-400">Continue your learning journey with AI guidance</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
              {[
                { label: 'Enrolled', value: '12', icon: '📚' },
                { label: 'Completed', value: '3', icon: '✅' },
                { label: 'Hours Learned', value: '45', icon: '⏱️' },
                { label: 'XP Points', value: '2,450', icon: '⭐' },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="p-6 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-orange-500/50 transition"
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Your Courses */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Your Courses</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {courses.map((course) => (
                  <div
                    key={course.id}
                    className="rounded-lg bg-slate-800/50 border border-slate-700 overflow-hidden hover:border-orange-500/50 transition group cursor-pointer"
                  >
                    <div className="aspect-video bg-slate-700/50 flex items-center justify-center text-6xl group-hover:bg-slate-700 transition">
                      {course.image}
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-white mb-1">{course.title}</h3>
                      <p className="text-sm text-slate-400 mb-4">{course.instructor}</p>
                      
                      {/* Progress Bar */}
                      <div className="mb-3">
                        <div className="flex justify-between text-xs text-slate-400 mb-1">
                          <span>Progress</span>
                          <span>{course.progress}%</span>
                        </div>
                        <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-orange-500 to-orange-400"
                            style={{ width: `${course.progress}%` }}
                          />
                        </div>
                      </div>

                      <button className="w-full py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-sm font-semibold transition">
                        Continue Learning
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
