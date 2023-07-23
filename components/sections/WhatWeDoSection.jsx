import Image from "next/image";
import React from "react";
import Container from "../utils/Container";
import ServiceCard from "../cards/ServiceCard";

const servicesList = [
  {
    iconUrl: "/assets/icons/as-06.svg",
    title: "Networking",
    description: `Enhance your connectivity and efficiency with our reliable networking solutions`,
    link: "/networking",
  },
  {
    iconUrl: "/assets/icons/az-06.png",
    title: "Infrastructure",
    description: `Optimise your operations with robust infrastructure tailored to your business needs`,
    link: "/infrastructure",
  },
  {
    iconUrl: "/assets/icons/n2-01.png",
    title: "Clouds",
    description: `Harness the power of cloud solutions for seamless scalability and flexibility`,
    link: "/clouds",
  },
  {
    iconUrl: "/assets/icons/n3-01.png",
    title: "Firewalls",
    description: `Protect your digital assets with state-of-the-art firewalls—safeguard your business today`,
    link: "/firewalls",
  },
  {
    iconUrl: "/assets/icons/rt-06.png",
    title: "UI/UX Services",
    description: `Elevate user experiences with intuitive UI/UX designs—make a lasting impression`,
    link: "/ui-ux",
  },

  {
    iconUrl: "/assets/icons/xc-06.png",
    title: "Digital Marketing Services",
    description: `Drive growth and reach your target audience with our comprehensive digital marketing services`,
    link: "/digital-marketing",
  },

  {
    iconUrl: "/assets/icons/n5-01.png",
    title: "Quality Assurance",
    description: `Ensure superior quality and reliability with our rigorous quality assurance measures`,
    link: "/quality-assurance",
  },
];

const WhatWeDoSection = () => {
  return (
    <section className="pt-16 z-10 text-white relative bg-cover bg-center bg-[url('/assets/images/bg-servics.png')]">
      <span className="z-10 absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary via-primary to-[#53143B] opacity-80" />
      <span className="absolute z-10 w-96  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-blue-overlay" />

      <div className="relative z-10">
        <Container>
          <div className="mb-12 max-w-4xl mx-auto text-center pt-2">
            <div className="relative h-16 w-12 mx-auto mb-2">
              <Image fill src="/assets/images/arrow.png" alt="..." />
            </div>
            <h5 className="inline-block text-lg font-extrabold uppercase text-gradient mb-3">
              What we do
            </h5>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-tight sm:leading-tight xl:leading-tight">
              In Digital Era, IT Services are redefining Business Success & Growth: Its Your Turn to Experience it!
            </h2>
            <p className="mt-6 max-w-xl mx-auto text-[1.375rem] text-gray-200">
              Check out what we are offering, result-oriented, proven, timely with guaranteed business growth 
            </p>
          </div>

          <div className="pt-2 pb-12 sm:pb-24">
            <div className="xl:max-w-5xl mx-auto">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {servicesList.map((item, index) => (
                  <li key={`service-${index}`}>
                    <ServiceCard items={item} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
