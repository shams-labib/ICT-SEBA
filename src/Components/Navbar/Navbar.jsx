import React from "react";
import logo from "../../assets/ictseba-logo.png";
import { ShoppingCart, User } from "lucide-react";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center gap-7">
          <div>
            <img className="w-28 h-15" src={logo} alt="logo nai" />
          </div>
          <div>
            <h1 className="btn">Category</h1>
          </div>
        </div>
        {/* Services Section */}
        <div>
          <ul className="flex gap-5">
            <li>
              <a href="#">হোম</a>
            </li>
            <li>
              <a href="#">আমাদের সম্পর্কে</a>
            </li>
            <li>
              <a href="#">সার্ভিসসমূহ</a>
            </li>
            <li>
              <a href="#">কোর্সসমূহ</a>
            </li>
            <li>
              <a href="#">যোগাযোগ</a>
            </li>
          </ul>
        </div>
        {/* Profile section */}
        <div className="flex gap-5">
          <span>
            <ShoppingCart />
          </span>
          <div>
            <p className="flex items-center">
              <span>
                <User />
              </span>
              প্রোফাইল
            </p>
          </div>
          <button className="btn">প্রোফাইল</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
