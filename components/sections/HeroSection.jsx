import Image from "next/image";
import Link from "next/link";
import React from "react";
import Container from "../utils/Container";

const HeroSection = () => {
  return (
    <section className="relative pt-20">
      <span className="z-10 absolute top-0 left-0 w-full h-full opacity-90">
        <Image
          className="object-cover"
          fill
          src="/assets/images/bg-hero.png"
          alt="..."
        />
      </span>
      <span className="absolute top-0 left-0 w-full h-full">
        <video
          className="object-cover block h-full w-full"
          src="/assets/videos/bg-hero-small.mp4"
          autoPlay
          loop
          muted
        />
      </span>
      <div className="relative z-10 py-14 sm:py-32 md:py-44 lg:py-52 text-white">
        <Container>
          <div className="text-center mx-auto max-w-2xl">
            <h1 className="text-2xl sm:text-5xl lg:text-6xl font-suiGeneris font-normal mb-10">
              We do the IT: you grow your{" "}
              <span className="text-line">Business</span>
            </h1>
            <p className="text-lg md:text-2xl font-DMSans font-normal max-w-xl mx-auto mb-12">
              Lorem ipsum dolor sit amet consectetur. Tempus vestibulum interdum
              scelerisque dui in est orci lectus nisl bibendum.
            </p>
            <Link
              href="#"
              className="bg-g-primary text-white text-lg font-semibold rounded-xl py-5 px-10 hover:opacity-90 transition-all duration-300"
            >
              Learn more
            </Link>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default HeroSection;
