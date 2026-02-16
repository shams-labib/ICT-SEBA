import { ArrowRight } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <div className="bg-gray-100 h-[90vh] w-full">
      <div className="flex flex-col items-center justify-center">
        <p className="">সবার জন্য শিক্ষা</p>
        <h1>🚀 আপনার ডিজিটাল যাত্রা শুরু হোক আইসিটিসেবার সাথে</h1>
        <p>
          ডোমেইন, হোস্টিং, সফটওয়্যার, সার্ভিস এবং অনলাইন/অফলাইন কোর্স – সব
          একসাথে ICTSeba তে।
        </p>
        <button className="flex items-center gap-1">
          আরও জানুন{" "}
          <span>
            <ArrowRight size={28} />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
