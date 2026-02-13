import { useState } from "react";
import { Menu, X } from "lucide-react"; // optional (icon). না চাইলে emoji use করতে পারো

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = (
    <>
      <a href="#" className="hover:text-blue-400">
        Home
      </a>
      <a href="#" className="hover:text-blue-400">
        About
      </a>
      <a href="#" className="hover:text-blue-400">
        Section
      </a>
      <a href="#" className="hover:text-blue-400">
        Contact
      </a>
    </>
  );

  return (
    <nav className="bg-black text-white px-6 py-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Logo</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">{navLinks}</div>

        {/* Mobile Button */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="flex flex-col gap-4 mt-4 md:hidden">{navLinks}</div>
      )}
    </nav>
  );
};

export default Navbar;
