import React from "react";
import AboutCard from "../cards/AboutCard";
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

const WhyNetopsSection = () => {
  return (
    <section className="bg-primary text-white pb-12 sm:pb-20">
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
          <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-16 gap-y-24 md:gap-y-2 lg:gap-16">
            {netopCards.map((item, index) => (
              <li key={`netop-card-${index}`}>
                <AboutCard items={item} />
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </section>
  );
};

export default WhyNetopsSection;
