import React from "react";
import { ArrowRight, Monitor, GraduationCap, CheckCircle2 } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="relative bg-white py-24 px-4 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 -z-10" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Left Content Side */}
        <div className="flex-1 text-left">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-600 text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            আইসিটি সেবা সম্পর্কে
          </div>

          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-[1.2]">
            আপনার ডিজিটাল যাত্রা সফল করতে <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              আমরা আছি আপনার পাশে
            </span>
          </h2>

          <p className="text-slate-600 text-lg leading-relaxed mb-8 max-w-2xl">
            ICTSeba একটি পূর্ণাঙ্গ আইটি সলিউশন এবং ট্রেনিং প্ল্যাটফর্ম। আমরা
            একদিকে আধুনিক ব্যবসা ও ব্যক্তিগত প্রয়োজনে সফটওয়্যার সার্ভিস প্রদান
            করি, অন্যদিকে দক্ষ জনশক্তি গড়তে আন্তর্জাতিক মানের আইটি কোর্স
            পরিচালনা করি।
          </p>

          {/* Feature Mini-Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            <div className="flex items-start gap-3 p-4 rounded-xl border border-slate-100 bg-slate-50/50">
              <div className="p-2 bg-blue-600 rounded-lg text-white">
                <Monitor size={20} />
              </div>
              <div>
                <h4 className="font-bold text-slate-800">সফটওয়্যার সার্ভিস</h4>
                <p className="text-sm text-slate-500">আধুনিক বিজনেস সলিউশন</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl border border-slate-100 bg-slate-50/50">
              <div className="p-2 bg-purple-600 rounded-lg text-white">
                <GraduationCap size={20} />
              </div>
              <div>
                <h4 className="font-bold text-slate-800">আইটি ট্রেনিং</h4>
                <p className="text-sm text-slate-500">
                  প্রফেশনাল স্কিল ডেভেলপমেন্ট
                </p>
              </div>
            </div>
          </div>

          <button className="group flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-slate-200">
            আরও জানুন
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>

        {/* Right Image Side */}
        <div className="flex-1 relative">
          <div className="relative z-10 w-full max-w-lg mx-auto">
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transition-transform hover:scale-[1.02] duration-500">
              <img
                src="https://i.ibb.co.com/VpNYmtKp/about-06.webp"
                alt="ICT Seba Illustration"
                className="w-full h-auto object-contain bg-gradient-to-br from-blue-50 to-purple-50 p-8"
              />
            </div>

            {/* Floating Experience Card */}
            <div className="absolute -bottom-6 -left-6 md:-left-12 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce-slow">
              <div className="h-12 w-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                <CheckCircle2 size={28} />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900 leading-none">
                  ১০০%
                </p>
                <p className="text-sm text-slate-500 font-medium">
                  সন্তুষ্ট গ্রাহক
                </p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-100 rounded-full -z-10 opacity-60 blur-xl"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
