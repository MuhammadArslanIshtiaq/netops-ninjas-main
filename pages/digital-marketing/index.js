import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CtaSection from "../../components/sections/CtaSection";
import Container from "../../components/utils/Container";
import { ArrowFullTwoIcon, UploadIcon } from "../../components/utils/Icons";
import ServiceCardSimple from "../../components/cards/ServiceCardSimple";
import TestimonialSection from "../../components/sections/TestimonialSection";

const serviceList = [
  {
    title: "Social Media Marketing",
    description: `Harness the power of social media – reach, engage, and build meaningful connections with your target audience.`,
  },
  {
    title: "Email Marketing",
    description: `Boost your online visibility and drive targeted traffic with effective search engine marketing strategies.`,
  },
  {
    title: "Organic Marketing",
    description: `Cultivate sustainable growth with organic marketing – build brand loyalty and establish a strong online presence.`,
  },
];

const NetworkingPage = () => {
  return (
    <>
      <Head>
        <title>Digital Marketing - Netops Ninjas</title>
      </Head>
      <main className="bg-section">
        <section className="relative bg-section text-white py-12 sm:py-20">
          <Container>
            <div className="mx-auto max-w-6xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="mb-24 lg:mb-0 text-center lg:text-left">
                  <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold leading-tight sm:leading-tight xl:leading-tight mb-6">
                    Ignite Your Online Success: Amplify <br />
                    Your Reach with our Powerful Digital Marketing Strategies
                  </h2>
                  <p className="mb-16 lg:max-w-xl text-[1.375rem] text-gray-200">
                    Supercharge your business growth with our comprehensive 
                    Digital marketing services – leverage our expertise to 
                    drive leads, conversions, and brand visibility.
                  </p>
                  <Link
                    href="/contact"
                    className="bg-g-primary text-white text-lg font-semibold rounded-xl py-5 px-10 hover:opacity-90 transition-all duration-300"
                  >
                    Learn more
                  </Link>
                </div>

                <div className="order-first lg:order-last sm:py-16 lg:py-0 mx-auto">
                  <div className="min-h-[25rem] sm:min-h-[37.5rem] lg:min-h-[43.75rem] h-full relative pt-24">
                    <Image
                      src="/assets/images/feature-img-digital-marketing.png"
                      width={785}
                      height={785}
                      alt="..."
                    />
                    <span className="hidden lg:block absolute -bottom-72 left-[25%] -translate-x-1/2">
                      <ArrowFullTwoIcon />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
        <section className="bg-gradient-to-br from-[#f7066a1a] via-[#875fad1a] to-[#05c7fc1a] text-white py-20 sm:pb-20 lg:mt-56">
          <Container>
            <div className="mb-12 max-w-4xl mx-auto text-center pt-2">
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold leading-tight sm:leading-tight xl:leading-tight">
                Accelerate Your Online Success: Unlocking Your Business's Full Potential with Powerful Digital Marketing
              </h2>
              <p className="mt-6 text-[1.375rem] text-gray-400">
                From strategic campaigns to data-driven insights, our digital marketing services 
                propel your business forward. Expand your reach, engage your audience, and drive tangible results.
              </p>
            </div>
            <div className="py-12 sm:py-20">
              <div className="xl:max-w-5xl mx-auto">
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {serviceList.map((item, index) => (
                    <li key={`contact-${index}`}>
                      <ServiceCardSimple items={item} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </section>
        <TestimonialSection />
        <CtaSection />
      </main>
    </>
  );
};

export default NetworkingPage;
