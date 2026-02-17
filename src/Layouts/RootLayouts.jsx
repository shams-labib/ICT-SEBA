import React, { useContext, useState, useEffect } from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer/Footer";
import { AuthContext } from "../Firebase/Authentication/AuthContext";
import LoadingSpinner from "../Components/LoadingSpinner/LoadingSpinner";

const RootLayouts = () => {
  const { loading } = useContext(AuthContext);
  // অতিরিক্ত কন্ট্রোল করার জন্য নতুন একটি স্টেট
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // যদি Firebase loading শেষ হয়
    if (!loading) {
      // আমরা ১.৫ সেকেন্ড (১৫০০ms) ওয়েট করব তারপর লোডার সরাব
      const timer = setTimeout(() => {
        setShowLoader(false);
      }, 1500); // আপনি চাইলে সময় বাড়িয়ে ২ সেকেন্ড (২০০০) করতে পারেন

      return () => clearTimeout(timer);
    } else {
      // যদি Firebase আবার loading শুরু করে (যেমন লগআউট করার সময়)
      setShowLoader(true);
    }
  }, [loading]);

  // এখন loading এর বদলে showLoader ব্যবহার করব
  if (showLoader) {
    return <LoadingSpinner />;
  }

  return (
    <div className="animate-in fade-in duration-700">
      <Navbar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default RootLayouts;
