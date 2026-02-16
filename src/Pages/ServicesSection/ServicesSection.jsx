import React from "react";
import {
  Globe,
  Monitor,
  Layout,
  GraduationCap,
  ArrowUpRight,
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "ডোমেইন ও হোস্টিং সার্ভিস",
      description:
        "আপনার ব্যবসা বা প্রজেক্টের জন্য নির্ভরযোগ্য ও সাশ্রয়ী ডোমেইন এবং হোস্টিং সলিউশন।",
      icon: <Globe className="w-8 h-8 text-orange-500" />,
      bgColor: "bg-[#FFFDE7]", // Light yellow
      iconBg: "bg-orange-100",
    },
    {
      title: "কাস্টম সফটওয়্যার ডেভেলপমেন্ট",
      description:
        "ব্যবসার চাহিদা অনুযায়ী আধুনিক ও ইউজার-ফ্রেন্ডলি কাস্টম সফটওয়্যার তৈরি।",
      icon: <Monitor className="w-8 h-8 text-purple-500" />,
      bgColor: "bg-[#F3E5F5]", // Light purple
      iconBg: "bg-purple-100",
    },
    {
      title: "ওয়েবসাইট ও ডিজিটাল সলিউশন",
      description:
        "কর্পোরেট, ই-কমার্স বা পার্সোনাল ওয়েবসাইট এবং অন্যান্য ডিজিটাল সলিউশন ডেভেলপমেন্ট।",
      icon: <Layout className="w-8 h-8 text-pink-500" />,
      bgColor: "bg-[#FFEBEE]", // Light pink
      iconBg: "bg-pink-100",
    },
    {
      title: "অনলাইন ও অফলাইন আইটি কোর্স",
      description:
        "শিক্ষার্থীদের জন্য বেসিক থেকে অ্যাডভান্সড লেভেলের কোর্স, অনলাইন ও অফলাইন উভয় মাধ্যমে।",
      icon: <GraduationCap className="w-8 h-8 text-blue-500" />,
      bgColor: "bg-[#E3F2FD]", // Light blue
      iconBg: "bg-blue-100",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="bg-blue-100 text-blue-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 inline-block">
            সবার জন্য শিক্ষা
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 flex items-center justify-center gap-3">
            <span className="text-yellow-400">✨</span> আমরা কী করি?
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${service.bgColor} p-8 rounded-2xl flex flex-col h-full transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl`}
            >
              {/* Icon Container */}
              <div
                className={`${service.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm`}
              >
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-slate-800 mb-4 leading-snug">
                {service.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">
                {service.description}
              </p>

              {/* Action Link */}
              <a
                href="#"
                className="inline-flex items-center gap-2 font-bold text-slate-800 hover:text-blue-600 transition-colors group"
              >
                যোগাযোগ
                <ArrowUpRight
                  size={18}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
