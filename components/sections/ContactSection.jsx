import React from "react";
import Container from "../utils/Container";

const ContactSection = () => {
  return (
    <section className="py-12 sm:py-20">
      <Container>
        <div>
          <h2 className="text-secondary capitalize text-3xl sm:text-4xl lg:text-[2.5rem] font-semibold leading-tight sm:leading-tight xl:leading-tight mb-4">
            Want to Talk with our Spokesperson?
          </h2>
          <p className="mb-16 lg:max-w-xl text-[1.375rem] text-gray-300">
            Get connected with us and let us explain you how our services can be your digital strengths 
          </p>
          <form noValidate>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <li className="sm:col-span-2">
                <div>
                  <label
                    className="capitalize block text-lg font-semibold mb-2"
                    htmlFor="Name"
                  >
                    Name
                  </label>
                  <input
                    className="w-1/2 p-3 rounded-lg bg-info border border-gray-500 focus:border-l-pink-500 focus:border-t-pink-500 focus:border-r-secondary focus:border-b-secondary  focus-visible:outline-0 placeholder:text-gray-300"
                    type="text"
                    id="Name"
                    name="Name"
                    placeholder=""
                    required
                  />
                </div>
              </li>
              <li className="sm:col-span-2">
                <div>
                  <label
                    className="capitalize block text-lg font-semibold mb-2"
                    htmlFor="Email"
                  >
                    Email
                  </label>
                  <input
                    className="w-1/2 p-3 rounded-lg bg-info border border-gray-500 focus:border-l-pink-500 focus:border-t-pink-500 focus:border-r-secondary focus:border-b-secondary  focus-visible:outline-0 placeholder:text-gray-300"
                    type="email"
                    id="Email"
                    name="Email"
                    placeholder=""
                    required
                  />
                </div>
              </li>
              <li className="sm:col-span-2">
                <div>
                  <label
                    className="capitalize block text-lg font-semibold mb-2"
                    htmlFor="Phone"
                  >
                    Phone Number
                  </label>
                  <div className="relative mt-1 rounded-lg">
                    <div className="absolute inset-y-0 left-0 flex items-center">
                      <label htmlFor="country" className="sr-only">
                        Country
                      </label>
                      <select
                        id="country"
                        name="country"
                        autoComplete="country"
                        className="h-full rounded-l-lg bg-info border-0 border-r border-gray-500 py-0 pl-3 pr-7 sm:text-sm"
                      >
                        <option>US</option>
                        <option>UK</option>
                        <option>CA</option>
                        <option>EU</option>
                      </select>
                    </div>
                    <input
                      type="text"
                      name="phone-number"
                      id="phone-number"
                      className="block w-1/2 rounded-lg p-3 pl-20 bg-info border border-gray-500 focus:border-l-pink-500 focus:border-t-pink-500 focus:border-r-secondary focus:border-b-secondary  focus-visible:outline-0 placeholder:text-gray-300"
                      placeholder=""
                    />
                  </div>
                </div>
              </li>
              <li className="sm:col-span-2">
                <div>
                  <label
                    className="capitalize block text-lg font-semibold mb-2"
                    htmlFor="Description"
                  >
                    Description
                  </label>
                  <textarea
                    rows={4}
                    className="resize-none w-1/2 p-3 rounded-lg bg-info border border-gray-500 focus:border-l-pink-500 focus:border-t-pink-500 focus:border-r-secondary focus:border-b-secondary  focus-visible:outline-0 placeholder:text-gray-300"
                    type="text"
                    id="Description"
                    name="Description"
                  />
                </div>
              </li>
              <li className="sm:col-span-2">
                <div>
                  <label
                    className="capitalize block text-lg font-semibold mb-2"
                    htmlFor="service"
                  >
                    Service
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-1/2 p-3 rounded-lg bg-info border border-gray-500 focus:border-l-pink-500 focus:border-t-pink-500 focus:border-r-secondary focus:border-b-secondary  focus-visible:outline-0 placeholder:text-gray-300"
                  >
                    <option selected disabled value="-">
                      Please Select
                    </option>
                    <option value="Networking">Networking</option>
                    <option value="Infrastructure">Infrastructure</option>
                    <option value="Cloud">Cloud</option>
                    <option value="Firewall">Firewall</option>
                    <option value="Quality Assurance">Quality Assurance</option>
                    <option value="UI/UX">UI/UX</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                  </select>
                </div>
              </li>
              <li className="sm:col-span-2">
                <button
                  type="submit"
                  className="w-1/2 bg-g-primary text-white text-lg font-semibold rounded-lg p-3 px-10 hover:opacity-90 transition-all duration-300"
                >
                  Submit
                </button>
              </li>
            </ul>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;


