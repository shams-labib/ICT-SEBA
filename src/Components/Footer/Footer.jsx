import React from "react";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* TOP SECTION: Newsletter & About */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8">
            বিশেষ অফার ও কোর্স আপডেট পেতে চান?
          </h2>

          <div className="relative max-w-xl mx-auto">
            <div className="flex items-center p-1 rounded-full border border-gray-200 shadow-sm focus-within:ring-2 focus-within:ring-indigo-100 transition-all">
              <input
                type="email"
                placeholder="Enter Your E-Mail"
                className="w-full pl-6 pr-2 py-3 bg-transparent outline-none text-gray-600 text-sm"
              />
              <button className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-500 hover:opacity-90 text-white px-6 py-2.5 rounded-full transition-all text-sm font-medium">
                <span>Subscribe</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* MIDDLE SECTION: Description */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 border-t border-gray-100 pt-12">
          <div className="max-w-md">
            <p className="text-gray-500 text-sm leading-relaxed">
              ICTSeba একটি পূর্ণাঙ্গ আইটি সলিউশন এবং ট্রেনিং প্ল্যাটফর্ম। আমরা
              একদিকে ব্যবসা ও ব্যক্তিগত প্রয়োজনে সফটওয়্যার ও সার্ভিস দিয়ে
              থাকি, অন্যদিকে শিক্ষার্থীদের জন্য আইটি কোর্স প্রদান করি।
            </p>
          </div>
          <div className="md:text-right">
            <h3 className="text-slate-800 font-bold text-lg">নিউজলেটার</h3>
          </div>
        </div>

        {/* BOTTOM SECTION: Copyright & Payments */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-600 text-sm font-medium">
            © ২০২৫ আইসিটি সেবা। সর্বস্বত্ব সংরক্ষিত। ডেভেলপ করেছেন ictseba.com.
          </p>

          {/* Payment Partners Placeholder */}
          <div className="flex flex-wrap justify-center gap-4 grayscale opacity-80 hover:grayscale-0 transition-all duration-300">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
              alt="Visa"
              className="h-4"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
              alt="Mastercard"
              className="h-6"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
              alt="PayPal"
              className="h-5"
            />
            {/* Add more payment icons here to match image_9833cd.png */}
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              bkash | Rocket | Nagad
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
