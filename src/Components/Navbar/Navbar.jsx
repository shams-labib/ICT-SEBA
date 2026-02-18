import React, { useContext, useState } from "react";
import logo from "../../assets/ictseba-logo.png";
import {
  ShoppingCart,
  User,
  Menu,
  X,
  Mail,
  Phone,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import { Link } from "react-router";
import { AuthContext } from "../../Firebase/Authentication/AuthContext";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, loading } = useContext(AuthContext);

  const navLinks = [
    { name: "হোম", href: "/" },
    { name: "আমাদের সম্পর্কে", href: "#" },
    { name: "সার্ভিসসমূহ", href: "#" },
    { name: "কোর্সসমূহ", href: "#" },
    { name: "যোগাযোগ", href: "#" },
  ];

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="bg-white shadow-md sticky top-0 z-50">
      {/* --- Main Navbar Desktop/Tablet --- */}
      <div className="flex justify-between items-center px-4 md:px-8 py-3 max-w-7xl mx-auto">
        {/* Left: Logo + Category */}
        <div className="flex items-center gap-4">
          <Link to="/">
            <img className="w-24 md:w-32" src={logo} alt="ICTSEBA Logo" />
          </Link>

          {/* Category Dropdown (Desktop Only) */}
          <div className="dropdown hidden lg:block">
            <div
              tabIndex={0}
              role="button"
              className="btn bg-gray-100 border-gray-200 rounded-full px-4"
            >
              ক্যাটাগরি
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>একাডেমিক কোর্স</a>
              </li>
              <li>
                <a>নিজেস্ব কোর্স</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Center: Nav Links (Desktop) */}
        <div className="hidden lg:flex gap-8 font-medium text-gray-700">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-blue-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2 md:gap-4">
          <button className="relative p-2 hover:bg-gray-100 rounded-full">
            <ShoppingCart size={24} />
            <span className="badge badge-sm badge-primary absolute top-0 right-0">
              0
            </span>
          </button>

          {/* Auth Button Logic */}
          {user ? (
            <Link
              to={"/profile"}
              className="btn btn-ghost btn-circle md:btn-ghost md:w-auto md:px-4 flex items-center gap-2"
            >
              <span className="text-blue-600">
                <User size={22} />
              </span>
              {/* শুধুমাত্র ডেস্কটপে লেখা দেখাবে */}
              <span className="hidden md:inline">প্রোফাইল</span>
            </Link>
          ) : (
            <Link
              to={"/login"}
              className="btn bg-gradient-to-r from-blue-600 to-purple-500 text-white border-none min-h-0 h-10 w-10 md:w-auto p-0 md:px-6 rounded-full flex items-center justify-center gap-2"
            >
              <User size={20} />
              {/* শুধুমাত্র ডেস্কটপে লেখা দেখাবে */}
              <span className="hidden md:inline">লগইন</span>
            </Link>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden text-gray-700 p-1 hover:bg-gray-100 rounded-lg"
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* --- Mobile Responsive Drawer Overla --- */}
      <div
        className={`fixed inset-0 z-[60] transition-visibility ${isOpen ? "visible" : "invisible"}`}
      >
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setIsOpen(false)}
        />

        <div
          className={`absolute left-0 top-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out p-6 flex flex-col ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          {/* Drawer Content Same as before */}
          <div className="flex justify-between items-start mb-6">
            <img className="w-28" src={logo} alt="Logo" />
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-gray-100 rounded-full border"
            >
              <X size={20} />
            </button>
          </div>

          <p className="text-gray-500 text-sm mb-6">
            ICT-SEBA-তে আপনাকে স্বাগতম! আপনার দক্ষতার বিকাশ করুন আমাদের সাথে।
          </p>

          <div className="space-y-3 mb-8 border-b pb-6">
            <div className="flex items-center gap-3 text-gray-600 text-sm">
              <Mail size={16} className="text-blue-500" />
              <span>info@ictseba.com</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600 text-sm">
              <Phone size={16} className="text-blue-500" />
              <span>+880123456789</span>
            </div>
          </div>

          <nav className="flex flex-col space-y-4 mb-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-bold text-gray-800 border-b border-gray-50 pb-2 hover:text-blue-600"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <button className="btn btn-primary bg-blue-600 border-none rounded-full w-full mb-8 normal-case text-lg">
            এখনই এনরোল করো
          </button>

          <div className="mt-auto">
            <span className="text-xs font-bold text-gray-400 tracking-widest uppercase block mb-4">
              Find With Us
            </span>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border flex items-center justify-center text-gray-500 hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
