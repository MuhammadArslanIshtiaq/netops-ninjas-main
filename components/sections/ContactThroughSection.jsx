import React from "react";
import Container from "../utils/Container";

const ContactThroughSection = () => {
  return (
    <section className="bg-section text-white py-12 sm:py-20">
      <Container>
        <div className="mx-auto lg:max-w-6xl">
          <div className="text-center mb-12 md:mb-20">
            <h5 className="inline-block text-lg font-extrabold uppercase text-gradient mb-2">
              CONTACT US THROUGH
            </h5>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold leading-tight sm:leading-tight xl:leading-tight">
              You Can Also Contact Us Through Given Options
            </h2>
          </div>
          {/* Here, the map over the contactList and the rendering of ContactCard components has been removed */}
        </div>
      </Container>
    </section>
  );
};

export default ContactThroughSection;

