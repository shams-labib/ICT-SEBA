import React from "react";
import { PlayCircle, Lock, ChevronRight, ArrowRight } from "lucide-react";

const CourseContent = () => {
  const modules = [
    {
      id: 1,
      title: "Module 1: Introduction to ICT",
      lessons: [
        "Lesson 1: Information & Communication Technology এর ধারণা",
        "Lesson 2: ICT এর ব্যবহার ও গুরুত্ব",
        "Lesson 3: ICT এর সম্ভাবনা ও চ্যালেঞ্জ",
      ],
      isOpen: true,
    },
    {
      id: 2,
      title: "Module 2: Computer Fundamentals",
      lessons: [],
      isOpen: false,
    },
    {
      id: 3,
      title: "Module 3: Number System & Logic",
      lessons: [],
      isOpen: false,
    },
    {
      id: 4,
      title: "Module 4: Programming Basics",
      lessons: [],
      isOpen: false,
    },
    {
      id: 5,
      title: "Module 5: Database Management",
      lessons: [],
      isOpen: false,
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Area */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-4">
              এইচএসসি কোর্স কনটেন্ট
            </h2>
            <div className="flex flex-wrap gap-4 text-sm text-slate-500 font-medium">
              <span>📚 31 Lessons</span>
              <span>•</span>
              <span>📂 8 Topics</span>
              <span>•</span>
              <span>👥 1 Enrolled</span>
              <span>•</span>
              <span>⏱️ 90h total length</span>
            </div>
          </div>
          <button className="flex items-center gap-2 text-slate-800 font-bold hover:text-blue-600 transition-colors">
            সকল মডিউল দেখুন <ChevronRight size={20} />
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left Side: Video Preview Card */}
          <div className="w-full lg:w-5/12">
            <div className="bg-white p-4 rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100 sticky top-10">
              <div className="relative aspect-video rounded-2xl overflow-hidden group cursor-pointer">
                <img
                  src="https://i.ibb.co.com/X9P1fXc/image.png"
                  alt="Course Thumbnail"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                    <PlayCircle
                      size={40}
                      className="text-blue-600 fill-blue-50"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-500 text-white rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-blue-200 transition-all flex items-center justify-center gap-2">
                  Purchase Now <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Right Side: Accordion Content */}
          <div className="w-full lg:w-7/12 space-y-4">
            {modules.map((module) => (
              <div
                key={module.id}
                className="collapse collapse-plus bg-white border border-slate-100 rounded-xl shadow-sm overflow-hidden"
              >
                {/* বদল এখানে: type="radio" এর পরিবর্তে type="checkbox" করা হয়েছে। 
                   এতে করে একই আইটেম ক্লিক করে খোলা এবং বন্ধ (toggle) করা যাবে।
                */}
                <input type="checkbox" defaultChecked={module.isOpen} />

                <div className="collapse-title text-lg font-bold text-slate-700 py-5">
                  {module.title}
                </div>

                <div className="collapse-content px-0">
                  <div className="border-t border-slate-50 pt-2">
                    {module.lessons.length > 0 ? (
                      module.lessons.map((lesson, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between px-6 py-4 hover:bg-slate-50 transition-colors cursor-pointer group"
                        >
                          <div className="flex items-center gap-3">
                            <PlayCircle
                              size={18}
                              className="text-slate-400 group-hover:text-blue-500"
                            />
                            <span className="text-slate-600 text-sm md:text-base">
                              {lesson}
                            </span>
                          </div>
                          <Lock size={16} className="text-slate-300" />
                        </div>
                      ))
                    ) : (
                      <p className="px-6 py-4 text-slate-400 text-sm italic text-center">
                        Coming soon...
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseContent;
