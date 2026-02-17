import React from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Settings,
  LogOut,
  Camera,
  Calendar,
  BookOpen,
  Award,
  Clock,
} from "lucide-react";

const UserProfile = () => {
  // ডামি ইউজার ডেটা
  const user = {
    name: "মেহেদী হাসান",
    email: "mehedi@example.com",
    phone: "+880 1700-000000",
    location: "ঢাকা, বাংলাদেশ",
    joined: "জানুয়ারি ২০২৪",
    bio: "HSC পরীক্ষার্থী | আইসিটি এবং প্রোগ্রামিং নিয়ে শিখতে ভালোবাসি।",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mehedi",
    stats: [
      {
        label: "কোর্স সম্পন্ন",
        value: "১২",
        icon: <BookOpen size={20} className="text-blue-500" />,
      },
      {
        label: "পয়েন্টস",
        value: "৪৫০",
        icon: <Award size={20} className="text-yellow-500" />,
      },
      {
        label: "স্টাডি টাইম",
        value: "৮০ ঘণ্টা",
        icon: <Clock size={20} className="text-purple-500" />,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Profile Header Card */}
        <div className="card bg-white shadow-xl overflow-hidden border border-slate-100">
          <div className="h-32 bg-gradient-to-r from-blue-600 to-purple-500"></div>
          <div className="px-6 pb-6">
            <div className="relative flex flex-col sm:flex-row items-center sm:items-end -mt-16 gap-4">
              <div className="relative group">
                <div className="avatar ring ring-white ring-offset-base-100 ring-offset-2 rounded-full overflow-hidden w-32 h-32 bg-white">
                  <img src={user.avatar} alt="Profile" />
                </div>
                <button className="absolute bottom-2 right-2 p-2 bg-white rounded-full shadow-lg hover:bg-slate-50 transition-colors border border-slate-200">
                  <Camera size={16} className="text-slate-600" />
                </button>
              </div>

              <div className="flex-1 text-center sm:text-left mb-2">
                <h1 className="text-2xl font-bold text-slate-800">
                  {user.name}
                </h1>
                <p className="text-slate-500 text-sm flex items-center justify-center sm:justify-start gap-1">
                  <MapPin size={14} /> {user.location}
                </p>
              </div>

              <div className="flex gap-2">
                <button className="btn btn-primary btn-sm normal-case gap-2">
                  <Settings size={16} /> সেটিংস
                </button>
                <button className="btn btn-ghost btn-sm text-error border-error/20 hover:bg-error/10 gap-2">
                  <LogOut size={16} /> লগআউট
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Side: Stats & Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Stats Card */}
            <div className="card bg-white p-6 shadow-md border border-slate-100">
              <h2 className="font-bold text-slate-800 mb-4">
                অ্যাক্টিভিটি স্ট্যাটাস
              </h2>
              <div className="space-y-4">
                {user.stats.map((stat, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-3 rounded-xl bg-slate-50 border border-slate-100"
                  >
                    <div className="p-2 bg-white rounded-lg shadow-sm">
                      {stat.icon}
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">{stat.label}</p>
                      <p className="font-bold text-slate-800">{stat.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Basic Info */}
            <div className="card bg-white p-6 shadow-md border border-slate-100">
              <h2 className="font-bold text-slate-800 mb-4">যোগাযোগ</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <Mail size={16} className="text-slate-400" />
                  <span>{user.email}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <Phone size={16} className="text-slate-400" />
                  <span>{user.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <Calendar size={16} className="text-slate-400" />
                  <span>জয়েন করেছেন: {user.joined}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Bio & Active Courses */}
          <div className="lg:col-span-2 space-y-6">
            {/* Bio Card */}
            <div className="card bg-white p-6 shadow-md border border-slate-100">
              <h2 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                <User size={18} className="text-blue-500" /> বায়ো
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                {user.bio}
              </p>
            </div>

            {/* Ongoing Course (Example) */}
            <div className="card bg-white p-6 shadow-md border border-slate-100">
              <h2 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                <BookOpen size={18} className="text-purple-500" /> বর্তমান কোর্স
              </h2>
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 flex flex-col md:flex-row items-center gap-4">
                <div className="w-24 h-16 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 font-bold">
                  HSC ICT
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h4 className="font-bold text-slate-800 text-sm md:text-base">
                    অধ্যায় ৩: সংখ্যা পদ্ধতি ও ডিজিটাল ডিভাইস
                  </h4>
                  <div className="flex items-center justify-center md:justify-start gap-2 mt-1">
                    <progress
                      className="progress progress-primary w-full max-w-[150px]"
                      value="65"
                      max="100"
                    ></progress>
                    <span className="text-xs font-semibold text-slate-500">
                      ৬৫%
                    </span>
                  </div>
                </div>
                <button className="btn btn-primary btn-sm">চালিয়ে যান</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
