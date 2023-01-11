import React from "react";
import Container from "../utils/Container";
import TestimonialCard from "../cards/TestimonialCard";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

const testimonialList = [
  {
    name: "Judith Black",
    role: "CEO, Workcation",
    stars: 5,
    review: `Is be upon sang fond must shew. Really boy law county she unable her 
    sister. Feet you off its like like six. Among sex are leave law built now.`,
  },
  {
    name: "Judith Black",
    role: "CEO, Workcation",
    stars: 3,
    review: `Is be upon sang fond must shew. Really boy law county she unable her 
    sister. Feet you off its like like six. Among sex are leave law built now.`,
  },
  {
    name: "Judith Black",
    role: "CEO, Workcation",
    stars: 2,
    review: `Is be upon sang fond must shew. Really boy law county she unable her 
    sister. Feet you off its like like six. Among sex are leave law built now.`,
  },
];

const TestimonialSection = () => {
  return (
    <section className="bg-primary text-white pt-24 pb-12 sm:pb-20">
      <Container>
        <div className="relative">
          <span className="hidden xl:block absolute top-3/4 -translate-y-1/2 left-0 h-96 w-96">
            <Image fill src="/assets/images/bg-t-left.png" alt="..." />
          </span>

          <span className="hidden xl:block absolute top-3/4 -translate-y-1/2 right-0 h-96 w-96">
            <Image fill src="/assets/images/bg-t-right.png" alt="..." />
          </span>

          <div className="mx-auto max-w-3xl">
            <div className="text-center mb-12">
              <h5 className="inline-block text-lg font-extrabold uppercase text-gradient mb-2">
                Testimonials
              </h5>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold leading-tight sm:leading-tight xl:leading-tight">
                Check what our clients are saying
              </h2>
            </div>
            {/* === */}
            <Swiper
              className="testimonial-swiper"
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: true,
              }}
              modules={[Autoplay]}
            >
              {testimonialList.map((item, index) => (
                <SwiperSlide key={`testimonial-card-${index}`}>
                  <TestimonialCard items={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TestimonialSection;
