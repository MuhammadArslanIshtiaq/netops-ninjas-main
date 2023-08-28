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
    iconUrl: "/assets/icons/icon-fortinet.png",
    iconUrl2: "/assets/icons/icon-fortinet-active.png",
    title: "Fortinet",
    description: `Secure your digital infrastructure with Fortinet – protect your network from evolving threats with advanced security solutions`,
    link: "/firewalls/fortinet",
  },
  {
    iconUrl: "/assets/icons/icon-cisco-asa.png",
    iconUrl2: "/assets/icons/icon-cisco-asa-active.png",
    title: "Cisco ASA",
    description: `Lorem ipsum dolor sit amet consiscutor moriko namas mukino.`,
    link: "/firewalls/cisco-asa",
  },
  {
    iconUrl: "/assets/icons/icon-checkpoint.png",
    iconUrl2: "/assets/icons/icon-checkpoint-active.png",
    title: "Checkpoint",
    description: `Stay one step ahead of cyber threats with Checkpoint – safeguard your network with industry-leading security`,
    link: "/firewalls/checkpoint",
  },
  {
    iconUrl: "/assets/icons/icon-paloalto.png",
    iconUrl2: "/assets/icons/icon-paloalto-active.png",
    title: "Palo Alto",
    description: `Defend your digital assets with Palo Alto Networks – empower your business with next-generation firewall protection.`,
    link: "/firewalls/palo-alto",
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
                    Protect What Matters: Fortify <br />
                    Your Network with our Advanced Firewall Solutions
                  </h2>
                  <p className="mb-16 lg:max-w-xl text-[1.375rem] text-gray-200">
                    Secure your digital assets with our top-tier 
                    Firewall solutions – safeguard your business 
                    from evolving cyber threats.
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
                Fortify Your Digital Fortress: Advanced Firewall Solutions for Uncompromising Security
              </h2>
              <p className="mt-6 text-[1.375rem] text-gray-400">
                Protect your business from cyber threats with our state-of-the-art firewall solutions. 
                Safeguard your network, secure your data, and defend against evolving vulnerabilities
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
