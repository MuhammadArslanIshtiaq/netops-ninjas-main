import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CtaSection from "../../components/sections/CtaSection";
import Container from "../../components/utils/Container";
import { ArrowFullTwoIcon, UploadIcon } from "../../components/utils/Icons";
import ServiceDetailCard from "../../components/cards/ServiceDetailCard";
import TestimonialSection from "../../components/sections/TestimonialSection";

const serviceList = [
  {
    iconUrl: "/assets/icons/icon-cisco.png",
    iconUrl2: "/assets/icons/icon-cisco-active.png",
    title: "Cisco",
    description: `Unlock seamless connectivity and network performance with our Cisco solutions – experience the power of cutting-edge technology.`,
    link: "/networking/cisco",
  },
  {
    iconUrl: "/assets/icons/icon-aruba.png",
    iconUrl2: "/assets/icons/icon-aruba-active.png",
    title: "Aruba",
    description: `Experience secure and reliable wireless networking with Aruba – revolutionize your connectivity.`,
    link: "/networking/aruba",
  },
  {
    iconUrl: "/assets/icons/icon-extreme.png",
    iconUrl2: "/assets/icons/icon-extreme-active.png",
    title: "Extreme",
    description: `Maximize your network efficiency with Extreme – elevate your digital infrastructure to new heights.`,
    link: "/networking/extreme",
  },
  {
    iconUrl: "/assets/icons/icon-juniper.png",
    iconUrl2: "/assets/icons/icon-juniper-active.png",
    title: "Juniper",
    description: `Discover the power of Juniper's network solutions – achieve unparalleled performance and reliability.`,
    link: "/networking/juniper",
  },
];

const NetworkingPage = () => {
  return (
    <>
      <Head>
        <title>Networking - Netops Ninjas</title>
      </Head>
      <main className="bg-section">
        <section className="relative bg-section text-white py-12 sm:py-20">
          <Container>
            <div className="mx-auto max-w-6xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="mb-24 lg:mb-0 text-center lg:text-left">
                  <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold leading-tight sm:leading-tight xl:leading-tight mb-6">
                    Unleash the Power of Networking for <br />
                    Your Business with our advanced solutions
                  </h2>
                  <p className="mb-16 lg:max-w-xl text-[1.375rem] text-gray-200">
                    Connect with us today to elevate your network infrastructure 
                    and unlock seamless communication, reliability, and scalability 
                    for your business
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
                      src="/assets/images/feature-img-networking.png"
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
                Lorem Ipsum Dolor Sit Amet Consisc
              </h2>
              <p className="mt-6 text-[1.375rem] text-gray-400">
                Lorem ipsum dolor sit amet consectetur. Justo in rho orci velit
                placerat enim. Convallis vitae enim vitae mauris cursus vitae
                urna amet.
              </p>
            </div>
            <div className="py-12 sm:py-20">
              <div className="xl:max-w-5xl mx-auto">
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {serviceList.map((item, index) => (
                    <li key={`contact-${index}`}>
                      <ServiceDetailCard items={item} />
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
