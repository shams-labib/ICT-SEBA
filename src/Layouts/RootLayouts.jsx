import React, { useContext } from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer/Footer";
import { AuthContext } from "../Firebase/Authentication/AuthContext";
import LoadingSpinner from "../Components/LoadingSpinner/LoadingSpinner";

const RootLayouts = () => {
  const { loading } = useContext(AuthContext);
  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <Navbar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default RootLayouts;
