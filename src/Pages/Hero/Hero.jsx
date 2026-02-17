import { ArrowRight, Sparkles, X } from "lucide-react";
import React, { useState, useLayoutEffect, useRef, useContext } from "react";
import gsap from "gsap"; // Make sure to install gsap: npm install gsap
import { AuthContext } from "../../Firebase/Authentication/AuthContext";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const heroRef = useRef(null); // Reference for the container

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  // GSAP Animation Logic
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Target all direct children of the text container
      gsap.from(".animate-fade-up", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.2,
      });
    }, heroRef);

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden bg-slate-50"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-6 relative z-10 mt-10 md:mt-0">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="animate-fade-up flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-blue-100 shadow-sm">
            <Sparkles size={16} />
            <span>সবার জন্য শিক্ষা</span>
          </div>

          {/* Main Title */}
          <h1 className="animate-fade-up text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.2] mb-6">
            🚀 আপনার ডিজিটাল যাত্রা শুরু হোক{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500 ">
              আইসিটিসেবার
            </span>{" "}
            সাথে
          </h1>

          {/* Description */}
          <p className="animate-fade-up text-lg md:text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl">
            ডোমেইন, হোস্টিং, সফটওয়্যার, সার্ভিস এবং অনলাইন/অফলাইন কোর্স – সব
            একসাথে <span className="font-bold text-slate-800">ICTSeba</span> তে।
            আমরা দিচ্ছি আধুনিক প্রযুক্তির সঠিক দিকনির্দেশনা।
          </p>

          {/* Call to Action Buttons */}
          <div className="animate-fade-up flex flex-col sm:flex-row gap-4 items-center">
            <button
              onClick={toggleModal}
              className="group flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-blue-200 active:scale-95"
            >
              আরও জানুন
              <ArrowRight
                size={22}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>

            <button className="px-8 py-4 rounded-xl font-bold text-lg text-slate-700 hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-slate-100">
              আমাদের কোর্সসমূহ
            </button>
          </div>

          {/* Stats Section */}
          <div className="animate-fade-up mt-16 flex flex-wrap justify-center gap-8 opacity-60">
            <div className="text-center">
              <p className="text-2xl font-bold text-slate-800">১০,০০০+</p>
              <p className="text-sm">ছাত্র-ছাত্রী</p>
            </div>
            <div className="w-px h-10 bg-slate-300 hidden sm:block"></div>
            <div className="text-center">
              <p className="text-2xl font-bold text-slate-800">৫০+</p>
              <p className="text-sm">এক্সপার্ট মেন্টর</p>
            </div>
            <div className="w-px h-10 bg-slate-300 hidden sm:block"></div>
            <div className="text-center">
              <p className="text-2xl font-bold text-slate-800">২৪/৭</p>
              <p className="text-sm">সাপোর্ট</p>
            </div>
          </div>
        </div>
      </div>

      {/* --- MODAL SECTION --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300"
            onClick={toggleModal}
          ></div>

          <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-2xl max-w-sm w-full text-center transform transition-all animate-in zoom-in-95 duration-300">
            <button
              onClick={toggleModal}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X size={24} />
            </button>

            <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Sparkles className="text-blue-600" size={40} />
            </div>

            <h3 className="text-2xl font-black text-slate-800 mb-2">
              Website Updated
            </h3>
            <p className="text-slate-500 font-medium text-lg">Coming Soon...</p>

            <button
              onClick={toggleModal}
              className="mt-8 w-full py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
