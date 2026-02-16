import React, { useLayoutEffect, useRef } from "react";
import {
  ChevronRight,
  Award,
  Users,
  FileCheck,
  Phone,
  Globe,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ICTCourseLayout = () => {
  const containerRef = useRef(null);
  const posterRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // হেডার অ্যানিমেশন
      gsap.from(".header-anim", {
        y: -30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      // বাম পাশের নীল পোস্টার কার্ড
      gsap.from(posterRef.current, {
        x: -100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: posterRef.current,
          start: "top 80%",
        },
      });

      // ডান পাশের টেক্সট এবং ব্যাজ
      gsap.from(".content-anim", {
        x: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: posterRef.current,
          start: "top 75%",
        },
      });

      // নিচের আইকন গ্রিড ফিচারসমূহ
      gsap.from(".feature-item", {
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".feature-grid",
          start: "top 90%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-white py-12 px-4 font-sans overflow-hidden"
    >
      {/* Top Heading Section */}
      <div className="text-center mb-10 header-anim">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          <span className="text-blue-600">প্রাথমিক থেকে প্রফেশনাল:</span>
          <span className="text-slate-800"> সম্পূর্ণ কোর্স গাইড</span>
        </h1>
        <button className="bg-gradient-to-r from-blue-600 to-purple-500 text-white px-6 py-2 rounded-lg flex items-center mx-auto hover:shadow-lg transition active:scale-95">
          সকল কোর্সসমূহ <ChevronRight size={18} className="ml-2" />
        </button>
      </div>

      {/* Main Course Container */}
      <div className="max-w-6xl mx-auto bg-[#F5EEFF] rounded-[40px] p-6 md:p-12 flex flex-col lg:flex-row gap-10 items-center">
        {/* Left Side: Dark Blue Poster Card */}
        <div
          ref={posterRef}
          className="w-full lg:w-1/2 bg-[#00084D] rounded-3xl overflow-hidden text-white p-6 md:p-8 flex flex-col shadow-2xl"
        >
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-yellow-400 font-bold text-xl">
                এইচএসসি আইসিটি
              </h3>
              <h2 className="text-3xl font-black mb-4">সম্পূর্ণ কোর্স</h2>
            </div>
            <div className="bg-[#FFEB3B] text-black px-2 py-1 rounded text-[10px] font-bold">
              ICTSEBA
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 mb-6">
            <div className="flex-1">
              <p className="text-sm font-semibold mb-3">কোর্সের সুবিধাসমূহঃ</p>
              <ul className="text-[11px] space-y-1.5 opacity-90">
                <li>• ঘরে বসে বা ক্লাসে পড়াশোনা</li>
                <li>• পূর্ণ সিলেবাস কভার</li>
                <li>• লাইভ ও রেকর্ডেড ভিডিও</li>
                <li>• কুইজ ও প্র্যাকটিস</li>
                <li>• ব্যক্তিগত doubt clearing</li>
                <li>• সার্টিফিকেট প্রদান</li>
              </ul>
              <button className="mt-6 bg-[#FFEB3B] text-black font-bold px-6 py-1.5 rounded-md text-sm hover:bg-yellow-500 transition active:scale-95">
                এনরোল করুন
              </button>
            </div>

            {/* Collage Section */}
            <div className="flex-1 grid grid-cols-2 gap-2">
              <div className="col-span-1 rounded-lg overflow-hidden border-2 border-yellow-400/30 transition-transform hover:scale-105 duration-300">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=200"
                  alt="online class"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="col-span-1 flex flex-col gap-2">
                <div className="rounded-lg overflow-hidden h-20 border-2 border-yellow-400/30 transition-transform hover:scale-105 duration-300">
                  <img
                    src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=200"
                    alt="writing"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden h-20 border-2 border-yellow-400/30 transition-transform hover:scale-105 duration-300">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=200"
                    alt="group study"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Footer of the Blue Card */}
          <div className="mt-auto bg-white rounded-full py-1 px-4 flex justify-between items-center text-[#00084D]">
            <div className="flex items-center gap-1 text-[10px] font-bold">
              <Phone size={10} fill="currentColor" /> +880 1756-636690
            </div>
            <div className="flex items-center gap-1 text-[10px] font-bold">
              <Globe size={10} /> www.ictseba.com
            </div>
          </div>
        </div>

        {/* Right Side: Text & Features */}
        <div className="w-full lg:w-1/2 space-y-6">
          <div className="content-anim inline-block">
            <span className="bg-[#E8D8FF] text-[#A855F7] px-4 py-1.5 rounded-full text-xs font-bold">
              হ্যালো এইচএসসি শিক্ষার্থীবণ!
            </span>
          </div>

          <h2 className="content-anim text-3xl md:text-4xl font-bold text-slate-800">
            এইচএসসি আইসিটি সম্পূর্ণ কোর্স
          </h2>

          <p className="content-anim text-slate-600 text-sm leading-relaxed">
            ঘরে বসে বা ক্লাসে এসে সহজে HSC ICT-এর পূর্ণ সিলেবাস শিখুন। লাইভ ও
            রেকর্ডেড লেকচার, প্র্যাকটিস, কুইজ এবং সার্টিফিকেটসহ পুরো কোর্সটি
            আপনার প্রস্তুতিতে সহায়তা করবে।
          </p>

          <div className="feature-grid grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-4 pt-4">
            <div className="feature-item flex items-center gap-3">
              <div className="bg-yellow-400 p-2 rounded-full text-white">
                <Award size={20} />
              </div>
              <span className="text-sm font-medium text-slate-700">
                কোর্স শেষে সার্টিফিকেট
              </span>
            </div>
            <div className="feature-item flex items-center gap-3">
              <div className="bg-blue-500 p-2 rounded-full text-white">
                <Users size={20} />
              </div>
              <span className="text-sm font-medium text-slate-700">
                প্রেজেন্টেশন করার সুযোগ
              </span>
            </div>
            <div className="feature-item flex items-center gap-3">
              <div className="bg-purple-500 p-2 rounded-full text-white">
                <FileCheck size={20} />
              </div>
              <span className="text-sm font-medium text-slate-700">
                দক্ষতা যাচাই এর সুযোগ
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ICTCourseLayout;
