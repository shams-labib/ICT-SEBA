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
    let mm = gsap.matchMedia();

    const ctx = gsap.context(() => {
      // হেডার সব ডিভাইসেই উপর থেকে আসবে
      gsap.from(".header-anim", {
        y: -30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      // ডেক্সটপ এনিমেশন (১০০০ পিক্সেলের উপরে)
      mm.add("(min-width: 1024px)", () => {
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
      });

      // মোবাইল ও ট্যাবলেট এনিমেশন (১০২৪ পিক্সেলের নিচে)
      mm.add("(max-width: 1023px)", () => {
        gsap.from([posterRef.current, ".content-anim"], {
          y: 50, // সাইড থেকে না এসে নিচ থেকে আসবে
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: posterRef.current,
            start: "top 85%",
          },
        });
      });

      // ফিচার আইকন সব ডিভাইসে স্কেল হবে
      gsap.from(".feature-item", {
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".feature-grid",
          start: "top 95%",
        },
      });
    }, containerRef);

    return () => {
      ctx.revert();
      mm.revert();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-white py-8 md:py-12 px-4 font-sans overflow-x-hidden"
    >
      {/* Top Heading Section */}
      <div className="text-center mb-8 md:mb-10 header-anim">
        <h1 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 px-2">
          <span className="text-blue-600">প্রাথমিক থেকে প্রফেশনাল:</span>
          <span className="text-slate-800"> সম্পূর্ণ কোর্স গাইড</span>
        </h1>
        <button className="bg-gradient-to-r from-blue-600 to-purple-500 text-white px-5 py-2 rounded-lg flex items-center mx-auto hover:shadow-lg transition active:scale-95 text-sm md:text-base">
          সকল কোর্সসমূহ <ChevronRight size={18} className="ml-2" />
        </button>
      </div>

      {/* Main Course Container */}
      {/* মোবাইলে gap কমিয়ে ৪ করা হয়েছে এবং প্যাডিং অ্যাডজাস্ট করা হয়েছে */}
      <div className="max-w-6xl mx-auto bg-[#F5EEFF] rounded-[24px] md:rounded-[40px] p-4 md:p-12 flex flex-col lg:flex-row gap-6 lg:gap-10 items-center">
        {/* Left Side: Dark Blue Poster Card */}
        {/* মোবাইলে min-h কমানো হয়েছে */}
        <div
          ref={posterRef}
          className="w-full lg:w-1/2 bg-[#00084D] rounded-2xl md:rounded-3xl overflow-hidden text-white p-5 md:p-8 flex flex-col shadow-2xl"
        >
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-yellow-400 font-bold text-lg md:text-xl">
                এইচএসসি আইসিটি
              </h3>
              <h2 className="text-xl md:text-3xl font-black mb-2 md:mb-4">
                সম্পূর্ণ কোর্স
              </h2>
            </div>
            <div className="bg-[#FFEB3B] text-black px-2 py-1 rounded text-[10px] font-bold shrink-0">
              ICTSEBA
            </div>
          </div>

          {/* মোবাইলে ইমেজ সেকশন ছোট করার জন্য gap-4 করা হয়েছে */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mb-4 md:mb-6">
            <div className="flex-1">
              <p className="text-xs md:text-sm font-semibold mb-2">
                কোর্সের সুবিধাসমূহঃ
              </p>
              <ul className="text-[10px] md:text-[11px] space-y-1 md:space-y-1.5 opacity-90">
                <li>• ঘরে বসে বা ক্লাসে পড়াশোনা</li>
                <li>• পূর্ণ সিলেবাস কভার</li>
                <li>• লাইভ ও রেকর্ডেড ভিডিও</li>
                <li>• কুইজ ও প্র্যাকটিস</li>
                <li>• ব্যক্তিগত doubt clearing</li>
                <li>• সার্টিফিকেট প্রদান</li>
              </ul>
              <button className="mt-4 md:mt-6 bg-[#FFEB3B] text-black font-bold px-5 py-1.5 rounded-md text-xs md:text-sm hover:bg-yellow-500 transition active:scale-95">
                এনরোল করুন
              </button>
            </div>

            {/* Collage Section: মোবাইলে হাইট ফিক্সড করে দেওয়া হয়েছে যাতে লম্বা না হয় */}
            <div className="flex-1 grid grid-cols-2 gap-2 h-32 sm:h-auto">
              <div className="col-span-1 rounded-lg overflow-hidden border-2 border-yellow-400/30">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=200"
                  alt="online class"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="col-span-1 flex flex-col gap-2">
                <div className="rounded-lg overflow-hidden h-full border-2 border-yellow-400/30">
                  <img
                    src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=200"
                    alt="writing"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden h-full border-2 border-yellow-400/30">
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
          <div className="mt-auto bg-white rounded-full py-1.5 px-4 flex flex-row justify-between items-center text-[#00084D] gap-1">
            <div className="flex items-center gap-1 text-[9px] md:text-[10px] font-bold">
              <Phone size={10} fill="currentColor" /> +880 1756-636690
            </div>
            <div className="flex items-center gap-1 text-[9px] md:text-[10px] font-bold">
              <Globe size={10} /> ictseba.com
            </div>
          </div>
        </div>

        {/* Right Side: Text & Features */}
        <div className="w-full lg:w-1/2 space-y-4 md:space-y-6">
          <div className="content-anim inline-block">
            <span className="bg-[#E8D8FF] text-[#A855F7] px-3 py-1 rounded-full text-[10px] md:text-xs font-bold">
              হ্যালো এইচএসসি শিক্ষার্থীবণ!
            </span>
          </div>

          <h2 className="content-anim text-2xl md:text-4xl font-bold text-slate-800 leading-tight">
            এইচএসসি আইসিটি সম্পূর্ণ কোর্স
          </h2>

          <p className="content-anim text-slate-600 text-xs md:text-sm leading-relaxed">
            ঘরে বসে বা ক্লাসে এসে সহজে HSC ICT-এর পূর্ণ সিলেবাস শিখুন। লাইভ ও
            রেকর্ডেড লেকচার এবং সার্টিফিকেটসহ পুরো কোর্সটি আপনার প্রস্তুতিতে
            সহায়তা করবে।
          </p>

          {/* মোবাইলে ২ কলাম রাখা হয়েছে এবং প্যাডিং কমানো হয়েছে */}
          <div className="feature-grid grid grid-cols-2 lg:grid-cols-2 gap-3 md:gap-4 pt-2 md:pt-4">
            <div className="feature-item flex flex-col sm:flex-row items-center sm:items-center gap-2 bg-white p-2 md:p-3 rounded-xl shadow-sm border border-slate-50 text-center sm:text-left">
              <div className="bg-yellow-400 p-1.5 rounded-full text-white shrink-0">
                <Award size={16} />
              </div>
              <span className="text-[10px] md:text-sm font-medium text-slate-700">
                সার্টিফিকেট
              </span>
            </div>
            <div className="feature-item flex flex-col sm:flex-row items-center sm:items-center gap-2 bg-white p-2 md:p-3 rounded-xl shadow-sm border border-slate-50 text-center sm:text-left">
              <div className="bg-blue-500 p-1.5 rounded-full text-white shrink-0">
                <Users size={16} />
              </div>
              <span className="text-[10px] md:text-sm font-medium text-slate-700">
                প্রেজেন্টেশন
              </span>
            </div>
            <div className="feature-item flex flex-col sm:flex-row items-center sm:items-center gap-2 bg-white p-2 md:p-3 rounded-xl shadow-sm border border-slate-50 text-center sm:text-left col-span-2 sm:col-span-1">
              <div className="bg-purple-500 p-1.5 rounded-full text-white shrink-0">
                <FileCheck size={16} />
              </div>
              <span className="text-[10px] md:text-sm font-medium text-slate-700">
                দক্ষতা যাচাই
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ICTCourseLayout;
