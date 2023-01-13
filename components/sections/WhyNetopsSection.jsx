import React from "react";
import AboutCard from "../cards/AboutCard";
import BrandCard from "../cards/BrandCard";
import Container from "../utils/Container";

const netopCards = [
  {
    iconUrl: "/assets/icons/card.png",
    title: "Digital Workplace",
    description:
      "Lorem ipsum dolor sit amet consect Tellus nibh ut tincidunt feugiat quam nullam qulla.",
  },
  {
    iconUrl: "/assets/icons/pie-chart.png",
    title: "Intelligent Network Infrastructure",
    description:
      "Lorem ipsum dolor sit amet consect Tellus nibh ut tincidunt feugiat quam nullam qulla.",
  },
  {
    iconUrl: "/assets/icons/security.png",
    title: "Security",
    description:
      "Lorem ipsum dolor sit amet consect Tellus nibh ut tincidunt feugiat quam nullam qulla.",
  },
];

const brandList = [
  { logoUrl: "/assets/images/b-logo-0.png" },
  { logoUrl: "/assets/images/b-logo-1.png" },
  { logoUrl: "/assets/images/b-logo-2.png" },
  { logoUrl: "/assets/images/b-logo-3.png" },
  { logoUrl: "/assets/images/b-logo-4.png" },
];

const WhyNetopsSection = () => {
  return (
    <>
      <section className="bg-section text-white pb-24 sm:pb-20">
        <div className="bg-cover bg-[url('/assets/images/bg-blue.png')]">
          <Container>
            <div className="text-center mx-auto max-w-2xl mb-12">
              <h5 className="inline-block text-lg font-extrabold uppercase text-gradient mb-2">
                Why netops ninjas
              </h5>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold leading-tight sm:leading-tight xl:leading-tight mb-24">
                Lorem ipsum dolor sit amet consictuor itsu.
              </h2>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-16 gap-y-24 md:gap-y-2 lg:gap-16 pb-20 xl:px-32">
              {netopCards.map((item, index) => (
                <li key={`netop-card-${index}`}>
                  <AboutCard items={item} />
                </li>
              ))}
            </ul>
          </Container>
          <Container>
            <div className="text-center mx-auto max-w-2xl mb-12">
              <h5 className="inline-block text-lg font-extrabold uppercase text-gradient mb-2">
                our Clients
              </h5>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-tight sm:leading-tight xl:leading-tight">
                Brands we Serve
              </h2>
            </div>
            {/* == */}
            <div>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                  {brandList.map((item, index) => (
                    <div
                      key={`brand-${index}`}
                      className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1"
                    >
                      <BrandCard items={item} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
};

export default WhyNetopsSection;
