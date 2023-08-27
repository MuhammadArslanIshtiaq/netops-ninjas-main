import Link from "next/link";
import React from "react";
import Container from "../utils/Container";

const CtaSection = () => {
  return (
    <section className="bg-section text-white pb-12 lg:py-20 ">
      <Container>
        <div className="max-w-6xl mx-auto">
          <div className="bg-g-primary rounded-xl">
            <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-24 lg:px-16">
              <div>
                <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-gray-900  mb-8">
                  Want to Talk with{" "}
                  <span className="text-line red">our Spokesperson?</span>
                </h2>
                <p className="text-md md:text-2xl font-semibold text-gray-900">
                  Get connected with us and let us explain to you how our services can be your digital strengths
                </p>
              </div>
              <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                <div className="inline-flex rounded-md shadow">
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-black px-12 py-4 text-lg font-bold text-white hover:bg-gray-900"
                  >
                    Get started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CtaSection;
