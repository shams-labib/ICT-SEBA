import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Quote, Star } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  const reviews = [
    {
      name: "Martha Maldonado",
      role: "Executive Chairman @ Google",
      image: "https://i.pravatar.cc/150?u=martha",
      text: "After the launch, vulputate at sapien sit amet, auctor iaculis lorem. In vel hend rerit nisi. Vestibulum eget risus velit.",
    },
    {
      name: "Michael D. Lovelady",
      role: "CEO @ Google",
      image: "https://i.pravatar.cc/150?u=michael",
      text: "Histudy education, vulputate at sapien sit amet, auctor iaculis lorem. In vel hend rerit nisi. Vestibulum eget.",
    },
    {
      name: "Valerie J. Creasman",
      role: "Executive Designer @ Google",
      image: "https://i.pravatar.cc/150?u=valerie",
      text: "Our educational, vulputate at sapien sit amet, auctor iaculis lorem. In vel hend rerit nisi. Vestibulum eget.",
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <span className="text-purple-600 font-medium text-sm">
            সবার জন্য শিক্ষা
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-2">
            আমাদের ছাত্র এবং ক্লায়েন্ট ফিডব্যাক
          </h2>
        </div>

        {/* Slider Section */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 h-full flex flex-col relative transition-transform duration-300 hover:-translate-y-2">
                {/* Header Info */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="avatar">
                      <div className="w-14 h-14 rounded-full ring ring-offset-2 ring-gray-100">
                        <img src={review.image} alt={review.name} />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-lg">
                        {review.name}
                      </h4>
                      <p className="text-xs text-gray-500">{review.role}</p>
                    </div>
                  </div>
                  <Quote
                    className="text-emerald-100 w-10 h-10"
                    strokeWidth={3}
                  />
                </div>

                {/* Feedback Text */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                  {review.text}
                </p>

                {/* Rating Stars */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-orange-400 text-orange-400"
                    />
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
