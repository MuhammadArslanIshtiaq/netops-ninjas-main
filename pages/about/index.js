import Head from "next/head";
import React from "react";
import Container from "../../components/utils/Container";
import CtaSection from "../../components/sections/CtaSection";

const supportLinks = [
  {
    number: "400+",
    title: "Plus Clients Served",
  },
  {
    number: "600%",
    title: "ROI Generated",
  },
  {
    number: "20K",
    title: "Problems Troubleshoot",
  },
];

const About = () => {
  return (
    <>
      <Head>
        <title>About - Netops Ninjas</title>
      </Head>
      <main className="bg-section">

        <section className="bg-section text-white pt-12 sm:pt-20">
          <Container>
            <div className="my-20 max-w-4xl mx-auto text-center pt-20">
              <h5 className="inline-block text-lg font-extrabold uppercase text-gradient mb-3">
                About us
              </h5>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-tight sm:leading-tight xl:leading-tight">
                We are a 360 Degree IT Solution Company, making Technology your Business Assets
              </h2>
              <p className="mt-6 max-w-xl mx-auto text-[1.375rem] text-gray-200">
                We offer comprehensive IT solutions that cover all aspects of your business, transforming technology into valuable assets for your business success. Experience the power of our 360-degree IT approach and unlock the full potential of your business.
              </p>
            </div>
          </Container>
        </section>

        <section
          className="bg-about z-10 xl:mx-auto max-w-7xl px-12 py-24 lg:px-24 mx-10 rounded-[20px]"
          aria-labelledby="contact-heading"
        >
          <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-20 ">
            {supportLinks.map((link) => (
              <div
                key={link.title}
                className="flex flex-col rounded-2xl about-block shadow-xl"
              >
                <div className="relative flex-1 px-6 pt-16 pb-8 md:px-8 text-center text-white">
                  <h3 className="text-6xl font-bold">{link.number}</h3>
                  <h3 className="text-lg font-medium mt-4">{link.title}</h3>
                  <p className="text-sm font-light mt-4">{link.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-section text-white pt-12 sm:pt-20">
          <Container>
            <div className="my-20 max-w-4xl mx-auto text-center pt-2">
                <h5 className="text-lg font-extrabold uppercase text-gradient mb-3">
                    Vision Statement
                </h5>
                <p className="mt-6 text-[1.375rem] text-gray-200">
                    To be the leading provider of comprehensive IT solutions, transforming businesses through innovative technologies, exceptional services, and strategic partnerships.
                </p>
            </div>

            <div className="my-20 max-w-4xl mx-auto text-center pt-2">
                <h5 className="text-lg font-extrabold uppercase text-gradient mb-3">
                    Mission Statement
                </h5>
                <p className="mt-6 text-[1.375rem] text-gray-200">
                    Our mission is to empower organizations with 360-degree IT solutions, leveraging cutting-edge technologies, expert guidance, and unparalleled customer support. We strive to enhance operational efficiency, drive digital transformation, and enable businesses to thrive in the ever-evolving digital landscape.
                </p>
            </div>

            <div className="my-20 max-w-4xl mx-auto text-center pt-2">
                <h5 className="text-lg font-extrabold uppercase text-gradient mb-3">
                    Comprehensive Expertise
                </h5>
                <h2 className="text-3xl font-bold leading-tight">
                    Unlock your true business&apos;s potential with our 360-degree IT Solutions - Partner with us today!
                </h2>
                <p className="mt-6 text-[1.375rem] text-gray-200">
                    From IT infrastructure to cybersecurity, digital marketing to cloud solutions, our expertise covers every aspect of your technology needs. With a customer-centric approach and a team of experienced professionals, we deliver tailored solutions to help businesses thrive in the digital era.
                </p>
            </div>
          </Container>
        </section>

        <CtaSection />
      </main>
    </>
  );
};

export default About;
