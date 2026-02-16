import React from "react";
import Hero from "../Hero/Hero";
import CourseGrid from "../Card/Card";
import AboutSection from "../AboutSection/AboutSection";
import ServicesSection from "../ServicesSection/ServicesSection";
import CourseContent from "../CourseContent/CourseContent";
import ICTCourseLayout from "../ICTCourseLayout/ICTCourseLayout";
import Testimonials from "../FullLandingPage/FullLandingPage";
import Newsletter from "../NewsLetter/NewsLatter";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <CourseGrid></CourseGrid>
      <AboutSection></AboutSection>
      <ServicesSection />
      <CourseContent />
      <ICTCourseLayout />
      <Testimonials />
    </div>
  );
};

export default Home;
