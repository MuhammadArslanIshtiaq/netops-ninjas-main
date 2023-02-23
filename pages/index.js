import Head from "next/head";
import AboutSection from "../components/sections/AboutSection";
import CtaSection from "../components/sections/CtaSection";
import HeroSection from "../components/sections/HeroSection";
import OurClientsSection from "../components/sections/OurClientsSection";
import TestimonialSection from "../components/sections/TestimonialSection";
import WhatWeDoSection from "../components/sections/WhatWeDoSection";
import WhyNetopsSection from "../components/sections/WhyNetopsSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Netops Ninjas</title>
      </Head>
      <main>
       <HeroSection />
        <WhatWeDoSection />
        <AboutSection />
        <WhyNetopsSection />
        <OurClientsSection />
        <TestimonialSection />
        <CtaSection />
      </main>
    </>
  );
}
