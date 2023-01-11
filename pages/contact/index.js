import Head from "next/head";
import React from "react";
import ContactSection from "../../components/sections/ContactSection";
import ContactThroughSection from "../../components/sections/ContactThroughSection";

const ContactUs = () => {
  return (
    <>
      <Head>
        <title>Contact US - Netops Ninjas</title>
      </Head>
      <main className="bg-primary text-white pt-20">
        <ContactSection />
        <ContactThroughSection />
      </main>
    </>
  );
};

export default ContactUs;
