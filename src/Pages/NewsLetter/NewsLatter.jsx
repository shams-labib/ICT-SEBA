import React from "react";
import { ArrowRight } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* Bengali Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-10">
          বিশেষ অফার ও কোর্স আপডেট পেতে চান?
        </h2>

        {/* Subscription Form Container */}
        <div className="relative max-w-2xl mx-auto">
          <div className="flex items-center p-1.5 rounded-full border border-gray-100 shadow-xl shadow-gray-100/50 bg-white">
            <input
              type="email"
              placeholder="Enter Your E-Mail"
              className="w-full pl-6 pr-4 py-3 bg-transparent outline-none text-gray-600 placeholder:text-gray-400 text-sm md:text-base"
            />

            <button className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-500 hover:from-indigo-700 hover:to-purple-600 text-white font-medium px-6 py-3 rounded-full transition-all duration-300 shadow-lg active:scale-95 whitespace-nowrap">
              <span>Subscribe</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Bottom Decorative Line */}
        <div className="mt-24 border-t border-gray-100 w-full max-w-5xl mx-auto"></div>
      </div>
    </section>
  );
};

export default Newsletter;
