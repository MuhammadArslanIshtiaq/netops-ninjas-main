import React from "react";
import BrandCard from "../cards/BrandCard";
import Container from "../utils/Container";

const brandList = [
  { logoUrl: "/assets/images/b-logo-0.png" },
  { logoUrl: "/assets/images/b-logo-1.png" },
  { logoUrl: "/assets/images/b-logo-2.png" },
  { logoUrl: "/assets/images/b-logo-3.png" },
  { logoUrl: "/assets/images/b-logo-4.png" },
];

const OurClientsSection = () => {
  return (
    <section className="bg-section text-white pb-12 sm:pb-20">
      <Container>
        <div className="text-center mx-auto max-w-2xl mb-12">
          <h5 className="inline-block text-lg font-extrabold uppercase text-gradient mb-2">
            our Clients
          </h5>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold leading-tight sm:leading-tight xl:leading-tight">
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
    </section>
  );
};

export default OurClientsSection;
