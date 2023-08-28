import React from "react";
import ContactCard from "../cards/ContactCard";
import Container from "../utils/Container";

// icons
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/20/solid";

const contactList = [
  {
    icon: PhoneIcon,
    title: "Call Us",
    description: `07427259087`,
    link: "#",
  },
  {
    icon: EnvelopeIcon,
    title: "Email Us",
    description:`Info@netopsninjas.com`,
    link: "#",
  },
];

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
          {/* == */}
          <div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {contactList.map((item, index) => (
                <li key={`contact-${index}`}>
                  <ContactCard items={item} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactThroughSection;
