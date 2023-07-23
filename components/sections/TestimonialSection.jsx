import React from "react";
import Container from "../utils/Container";
import TestimonialCard from "../cards/TestimonialCard";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

const testimonialList = [
  {
    name: "John Kaberna",
    role: "CEO, Avallation,LLC",
    stars: 5,
    review: `We have complete peace of mind knowing that our business is protected by their top-notch security solutions and firewalls. 
    Their team understands the importance of safeguarding our sensitive data, and their robust measures have kept us safe from cyber threats. 
    Highly recommended!`,
  },
  {
    name: "Mohammed Rehman",
    role: "General Manager UK, AiFi",
    stars: 5,
    review: `Their IT support team has been a lifesaver for our business. They are prompt, knowledgeable, and always go above and beyond 
    to resolve our technical issues. Highly recommend their exceptional IT solutions!`,
  },
  {
    name: "Chris Phillips",
    role: "Manager, TEC Solutions",
    stars: 5,
    review: `Working with their digital marketing team has been a game-changer for our business. They crafted a compelling online strategy that significantly boosted 
    our brand visibility and drove valuable leads. We couldn't be happier with the results!`,
  },
];

const TestimonialSection = () => {
  return (
    <section className="bg-section text-white sm:pt-24 py-12 sm:pb-20">
      <div className="relative">
        <span className="hidden xl:block absolute top-3/4 -translate-y-1/2 left-0 h-96 w-96">
          <img src="/assets/images/bg-t-left1.png" width="100%" alt="..." />
        </span>

        <span className="hidden xl:block absolute top-3/4 -translate-y-1/2 right-0 h-96 w-96">
          <img src="/assets/images/bg-t-right1.png" width="100%" alt="..." />
        </span>

        <Container>
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
        </Container>
      </div>
    </section>
  );
};

export default TestimonialSection;
