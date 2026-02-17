import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const LoadingSpinner = () => {
  const containerRef = useRef(null);
  const ringRef = useRef(null);
  const textRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // ১. রিং রোটেশন (স্মুথ ইন-আউট ইফেক্ট)
      gsap.to(ringRef.current, {
        rotation: 360,
        duration: 2,
        repeat: -1,
        ease: "none",
      });

      // ২. টেক্সট পালস এবং কালার শিফট
      gsap.fromTo(
        textRef.current,
        { scale: 0.95, opacity: 0.8 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        },
      );

      // ৩. ব্যাকগ্রাউন্ড গ্লো অ্যানিমেশন (সফট লুকের জন্য)
      gsap.to(".bg-glow-light", {
        scale: 1.2,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white overflow-hidden"
    >
      {/* Background Animated Glows (হোয়াইট থিমের জন্য খুব হালকা রাখা হয়েছে) */}
      <div className="bg-glow-light absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-50/50 blur-[120px] rounded-full"></div>
      <div className="bg-glow-light absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-purple-50/50 blur-[100px] rounded-full"></div>

      <div className="relative flex items-center justify-center">
        {/* Outer Tech Ring (Gradient with Shadow) */}
        <div
          ref={ringRef}
          className="w-44 h-44 rounded-full border-[3px] border-transparent border-t-blue-500 border-r-purple-500 shadow-[0_10px_40px_rgba(59,130,246,0.1)]"
        ></div>

        {/* Inner Static Ring (Subtle Border) */}
        <div className="absolute w-36 h-36 rounded-full border border-slate-100 shadow-inner"></div>

        {/* Center Content */}
        <div ref={textRef} className="absolute flex flex-col items-center">
          <div className="text-3xl font-black text-slate-800 tracking-tighter">
            ICT<span className="text-blue-600">SEBA</span>
          </div>
          {/* নিচের ডেকোরেটিভ লাইন */}
          <div className="h-[3px] w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-1"></div>
        </div>
      </div>

      {/* Loading Progress Bar Container */}
      <div className="mt-16 text-center">
        <div className="w-48 h-1.5 bg-slate-100 rounded-full overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600 w-1/2 rounded-full animate-loading-bar"></div>
        </div>
        <p className="mt-4 text-slate-400 text-xs font-bold tracking-[0.3em] uppercase">
          Loading
        </p>
      </div>

      <style jsx>{`
        @keyframes loading-bar {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(250%);
          }
        }
        .animate-loading-bar {
          animation: loading-bar 1.5s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default LoadingSpinner;
