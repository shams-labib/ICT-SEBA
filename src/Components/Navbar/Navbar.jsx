import { Menu, X } from "lucide-react";
import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navLinks = (
    <>
      <a className="hover:text-blue-400" href="#">
        Home
      </a>
      <a className="hover:text-blue-400" href="#">
        About
      </a>
      <a className="hover:text-blue-400" href="#">
        Services
      </a>
      <a className="hover:text-blue-400" href="#">
        Dashboard
      </a>
    </>
  );
  return (
    <div className="bg-black text-white px-6 py-4">
      <nav className="flex justify-between items-center">
        <h1>Logo</h1>
        {/* Desktop View */}
        <div className="hidden md:flex gap-6 ">{navLinks}</div>
        {/* Mobile View */}
        <div className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </div>
      </nav>
      {open && (
        <div className="flex flex-col mt-4 md:hidden gap-4">{navLinks}</div>
      )}
    </div>
  );
};

export default Navbar;
