import React, { useState, useLayoutEffect, useRef } from "react";
import {
  Star,
  BookOpen,
  Users,
  ShoppingCart,
  ArrowRight,
  X,
  Sparkles,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import gsap from "gsap"; // Ensure gsap is installed

const CourseCard = ({ course }) => {
  return (
    <div className="card w-full bg-white shadow-sm border border-gray-100 transition-all hover:shadow-md mb-10 h-full">
      <figure className="relative h-48 overflow-hidden p-3 pb-0">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover rounded-md"
        />
        {course.discount && (
          <div className="absolute top-6 right-6 badge badge-secondary py-4 px-2 font-bold bg-violet-600 border-none shadow-lg z-10">
            -{course.discount}%<br />
            Off
          </div>
        )}
      </figure>

      <div className="card-body p-5">
        <div className="flex items-center gap-1 text-orange-300 mb-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={14} fill="none" stroke="currentColor" />
          ))}
          <span className="text-gray-400 text-xs ml-1">
            ({course.reviews} Reviews)
          </span>
        </div>

        <h2 className="text-lg font-bold text-gray-800 leading-tight mb-3 h-14 line-clamp-2">
          {course.title}
        </h2>

        <div className="flex gap-4 text-gray-400 text-xs mb-4">
          <div className="flex items-center gap-1">
            <BookOpen size={14} />
            <span>{course.lessons} Lessons</span>
          </div>
          <div className="flex items-center gap-1">
            <Users size={14} />
            <span>{course.students} Student</span>
          </div>
        </div>

        <p className="text-gray-500 text-sm mb-4 line-clamp-2 leading-relaxed">
          {course.description}
        </p>

        <div className="flex items-center gap-2 mb-4">
          <div className="avatar">
            <div className="w-8 h-8 rounded-full">
              <img src="https://via.placeholder.com/40" alt="avatar" />
            </div>
          </div>
          <p className="text-xs text-gray-500">
            By{" "}
            <span className="text-gray-800 font-medium">
              {course.instructor}
            </span>{" "}
            In{" "}
            <span className="text-gray-800 font-medium">{course.category}</span>
          </p>
        </div>

        <div className="divider my-0 opacity-50"></div>

        <div className="card-actions justify-between items-center mt-3">
          <div className="flex flex-col">
            <span className="text-gray-400 line-through text-sm">
              {course.oldPrice}৳
            </span>
            <span className="text-xl font-bold text-gray-800">
              {course.price}৳
            </span>
          </div>
          <button className="btn btn-ghost btn-sm text-gray-700 flex gap-2 normal-case font-semibold">
            <ShoppingCart size={18} />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

const CourseSlider = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef(null); // Ref for GSAP

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  // GSAP Fade Up Animation
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".animate-item", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%", // Starts when top of section hits 80% of viewport
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const courses = [
    {
      id: 1,
      title: "এইচএসসি আইসিটি সম্পূর্ণ কোর্স - অনলাইন ব্যাচ",
      image: "https://i.ibb.co.com/X9P1fXc/image.png",
      reviews: 0,
      lessons: 31,
      students: 1,
      description: "ঘরে বসেই সহজে শিখুন HSC ICT এর পূর্ণ সিলেবাস...",
      instructor: "ictseba",
      category: "একাডেমিক কোর্স",
      oldPrice: "1,500.00",
      price: "1,199.00",
      discount: 20,
    },
    {
      id: 2,
      title: "এইচএসসি আইসিটি সম্পূর্ণ কোর্স - অফলাইন ব্যাচ",
      image: "https://i.ibb.co.com/X9P1fXc/image.png",
      reviews: 0,
      lessons: 31,
      students: 0,
      description: "সরাসরি ক্লাসে অংশগ্রহণ করে হাতে কলমে শিখুন HSC ICT...",
      instructor: "ictseba",
      category: "একাডেমিক কোর্স",
      oldPrice: "2,500.00",
      price: "2,199.00",
      discount: 12,
    },
    {
      id: 3,
      title: "Advanced graphic Design with Freelancing",
      image: "https://i.ibb.co.com/X9P1fXc/image.png",
      reviews: 0,
      lessons: 7,
      students: 0,
      description: "এই কোর্সে গ্রাফিক ডিজাইনের বেসিক বিষয়গুলো...",
      instructor: "ictseba",
      category: "ক্যারিয়ার ডেভেলপমেন্ট",
      oldPrice: "2,500.00",
      price: "2,000.00",
      discount: 20,
    },
    {
      id: 4,
      title: "Web Development with MERN Stack",
      image: "https://i.ibb.co.com/X9P1fXc/image.png",
      reviews: 12,
      lessons: 45,
      students: 15,
      description: "শিখুন ফুল স্ট্যাক ওয়েব ডেভেলপমেন্ট একদম জিরো থেকে।",
      instructor: "ictseba",
      category: "ক্যারিয়ার ডেভেলপমেন্ট",
      oldPrice: "5,000.00",
      price: "3,500.00",
      discount: 30,
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="bg-[#FCF8F9] py-16 px-4 min-h-screen font-sans relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="animate-item inline-block bg-purple-100 text-purple-500 text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
            একাডেমিক কোর্সসমূহ
          </span>
          <h1 className="animate-item text-4xl font-bold text-gray-800 mt-4">
            চলমান কোর্সসমূহ
          </h1>
        </div>

        <div className="animate-item">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true, dynamicBullets: true }}
            navigation={false}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 30 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper !pb-12"
          >
            {courses.map((course) => (
              <SwiperSlide key={course.id}>
                <CourseCard course={course} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex justify-center mt-6">
          <button
            onClick={toggleModal}
            className="animate-item btn btn-wide bg-gradient-to-r from-blue-600 to-purple-500 text-white border-none rounded-md hover:opacity-90 transition-opacity active:scale-95"
          >
            আরও দেখুন <ArrowRight size={18} className="ml-2" />
          </button>
        </div>
      </div>

      {/* MODAL COMPONENT */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={toggleModal}
          ></div>
          <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-2xl max-w-sm w-full text-center animate-in zoom-in-95 duration-300">
            <button
              onClick={toggleModal}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
            >
              <X size={24} />
            </button>
            <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Sparkles className="text-blue-600" size={40} />
            </div>
            <h3 className="text-2xl font-black text-slate-800 mb-2">
              Website Updated
            </h3>
            <p className="text-slate-500 font-medium text-lg">Coming Soon...</p>
            <button
              onClick={toggleModal}
              className="mt-8 w-full py-3 bg-slate-900 text-white rounded-xl font-bold"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseSlider;
