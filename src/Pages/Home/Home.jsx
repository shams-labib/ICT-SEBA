import React from "react";
import Hero from "../Hero/Hero";
import CourseGrid from "../Card/Card";
import AboutSection from "../AboutSection/AboutSection";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <CourseGrid></CourseGrid>
      <AboutSection></AboutSection>
    </div>
  );
};

export default Home;
