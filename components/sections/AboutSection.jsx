import Image from "next/image";
import Link from "next/link";
import React from "react";
import Container from "../utils/Container";
import { ArrowFullIcon } from "../utils/Icons";

const AboutSection = () => {
  return (
    <section className="bg-section text-white pt-12 sm:pt-20">
      <Container>
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="mb-24 lg:mb-0 text-center lg:text-left">
              <h5 className="inline-block text-lg font-extrabold uppercase text-gradient mb-4">
                About netops ninjas
              </h5>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold leading-tight sm:leading-tight xl:leading-tight mb-12">
                We Make IT Solutions Businesses Strength
              </h2>
              <p className="mb-16 lg:max-w-xl text-[1.375rem] text-gray-200">
                Over the years, we are assisting businesses to strengthen their IT structures, becoming more organised,
                solution-oriented and digitally more visible. Netops Ninjas is fortunate to have most experienced team,
                multi-cultural and promoting a true workforce diversity.
              </p>
              <Link
                href="#"
                className="bg-g-primary text-white text-lg font-bold rounded-xl py-5 px-10 hover:opacity-90 transition-all duration-300"
              >
                Learn more
              </Link>
            </div>
            <div className="order-first lg:order-last">
              <div className="min-h-[25rem] sm:min-h-[37.5rem] lg:min-h-[43.75rem] h-full relative">
                <span className="absolute w-72 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-blue-overlay" />
                <span className="absolute w-72 bottom-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-pink-overlay" />
                <Image
                  className="object-contain z-10"
                  fill
                  src="/assets/images/about_us-02.png"
                  alt="..."
                />
                <span className="hidden lg:block absolute -bottom-16 left-[30%] -translate-x-1/2">
                  <ArrowFullIcon />
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
