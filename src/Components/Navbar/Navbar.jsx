import React from "react";
import logo from "../../assets/ictseba-logo.png";
import {
  BookOpenCheck,
  ShoppingCart,
  User,
  Menu,
  X,
  Mail,
  Phone,
  Facebook,
  Twitter,
  Linkedin,
  LayoutGrid,
  ChevronDown,
} from "lucide-react";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <a
          href="#"
          className="hover:text-blue-600 border-b border-gray-50 lg:border-none py-3 lg:py-0"
        >
          হোম
        </a>
      </li>
      <li>
        <a
          href="#"
          className="hover:text-blue-600 border-b border-gray-50 lg:border-none py-3 lg:py-0"
        >
          আমাদের সম্পর্কে
        </a>
      </li>
      <li>
        <a
          href="#"
          className="hover:text-blue-600 border-b border-gray-50 lg:border-none py-3 lg:py-0"
        >
          সার্ভিসসমূহ
        </a>
      </li>
      <li>
        <a
          href="#"
          className="hover:text-blue-600 border-b border-gray-50 lg:border-none py-3 lg:py-0"
        >
          কোর্সসমূহ
        </a>
      </li>
      <li>
        <a
          href="#"
          className="hover:text-blue-600 border-b border-gray-50 lg:border-none py-3 lg:py-0"
        >
          যোগাযোগ
        </a>
      </li>
    </>
  );

  return (
    <div className="drawer">
      <input id="nav-drawer" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content flex flex-col">
        {/* Main Navbar Holder */}
        <header className="sticky top-0 z-50 w-full bg-white shadow-md border-b">
          {/* Constrained Container: Large device এ মাঝখানে থাকবে */}
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              {/* Left Side: Logo & Category */}
              <div className="flex items-center gap-4 lg:gap-8">
                {/* Mobile Hamburger - Only visible on small screens */}
                <label
                  htmlFor="nav-drawer"
                  className="lg:hidden btn btn-ghost btn-circle"
                >
                  <Menu size={24} />
                </label>

                <a href="/" className="shrink-0">
                  <img
                    className="h-10 md:h-12 w-auto"
                    src={logo}
                    alt="ICT Seba"
                  />
                </a>

                {/* Category Button - Desktop Only */}
                <div className="hidden lg:block">
                  <div className="dropdown dropdown-hover">
                    <label
                      tabIndex={0}
                      className="btn bg-gray-100 hover:bg-gray-200 border-none rounded-full px-5 flex items-center gap-2 normal-case font-semibold text-gray-700"
                    >
                      <LayoutGrid size={18} />
                      Category
                      <ChevronDown size={14} className="opacity-50" />
                    </label>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu p-2 shadow-xl bg-base-100 rounded-box w-52 mt-2 border border-gray-50"
                    >
                      <li>
                        <a>একাডেমিক কোর্স</a>
                      </li>
                      <li>
                        <a>নিজস্ব কোর্স</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Center: Desktop Nav Links */}
              <div className="hidden lg:flex items-center">
                <ul className="flex items-center gap-6 xl:gap-10 font-bold text-[#1D2939]">
                  {navLinks}
                </ul>
              </div>

              {/* Right Side: Icons & Profile */}
              <div className="flex items-center gap-2 sm:gap-4">
                {/* Cart */}
                <button className="btn btn-ghost btn-circle relative">
                  <ShoppingCart size={24} />
                  <span className="badge badge-sm bg-blue-600 border-none text-white absolute top-1 right-1">
                    0
                  </span>
                </button>

                {/* Profile Link (Desktop) */}
                <div className="hidden md:flex items-center gap-1 font-semibold text-gray-700 cursor-pointer hover:text-blue-600 px-2 transition-colors">
                  <User size={20} />
                  <span>প্রোফাইল</span>
                </div>

                {/* Gradient Profile Button */}
                <button className="btn rounded-full border-none bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 shadow-md hover:opacity-90 transition-all">
                  প্রোফাইল
                </button>
              </div>
            </div>
          </div>
        </header>
      </div>

      {/* Drawer Sidebar for Mobile */}
      <div className="drawer-side z-[9999]">
        <label htmlFor="nav-drawer" className="drawer-overlay"></label>

        <div className="p-6 w-80 min-h-full bg-white flex flex-col">
          {/* Close & Logo */}
          <div className="flex items-center justify-between mb-8">
            <img className="h-10" src={logo} alt="Logo" />
            <label
              htmlFor="nav-drawer"
              className="btn btn-sm btn-ghost btn-circle text-gray-500"
            >
              <X size={24} />
            </label>
          </div>

          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            Histudy is a education website template. You can customize all.
          </p>

          {/* Contact */}
          <div className="space-y-3 mb-8">
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <Mail size={16} className="text-blue-500" />
              <span>example@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <Phone size={16} className="text-blue-500" />
              <span>+1-202-555-0174</span>
            </div>
          </div>

          <div className="divider"></div>

          {/* Mobile Links */}
          <ul className="menu p-0 font-bold text-gray-800 text-md">
            {navLinks}
          </ul>

          {/* Sidebar Gradient Button */}
          <div className="mt-8">
            <button className="w-full py-3 rounded-full border-2 border-blue-500 text-blue-600 font-bold hover:bg-blue-600 hover:text-white transition-all">
              এখনই এনরোল করো
            </button>
          </div>

          {/* Socials */}
          <div className="mt-auto pt-10">
            <p className="text-[10px] tracking-widest text-gray-400 uppercase font-bold mb-4">
              Find With Us
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-2 bg-gray-100 rounded-lg text-gray-500 hover:bg-blue-600 hover:text-white transition-all"
                >
                  <Icon size={20} />
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
