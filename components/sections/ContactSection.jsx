import React from "react";
import Container from "../utils/Container";

const ContactSection = () => {
  return (
    <section className="py-12 sm:py-20">
      <Container>
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 xl:gap-16">
          <li>
            <div>
              <h2 className="text-secondary capitalize text-3xl sm:text-4xl lg:text-[2.5rem] font-semibold leading-tight sm:leading-tight xl:leading-tight mb-4">
                Contact Us
              </h2>
              <p className="mb-16 lg:max-w-xl text-[1.375rem] text-gray-300">
                Lorem ipsum dolor sit amet consectetur. Justo in rho orci velit
                placerat enim.
              </p>
              <form noValidate>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <li>
                    <div>
                      <label
                        className="capitalize block text-lg font-semibold mb-2"
                        htmlFor="FirstName"
                      >
                        First Name
                      </label>
                      <input
                        className="w-full p-5 rounded-lg bg-info border border-gray-500 focus:border-l-pink-500 focus:border-t-pink-500 focus:border-r-secondary focus:border-b-secondary  focus-visible:outline-0 placeholder:text-gray-300"
                        type="text"
                        id="FirstName"
                        name="FirstName"
                        placeholder="John"
                        required
                      />
                    </div>
                  </li>
                  <li>
                    <div>
                      <label
                        className="capitalize block text-lg font-semibold mb-2"
                        htmlFor="LastName"
                      >
                        Last Name
                      </label>
                      <input
                        className="w-full p-5 rounded-lg bg-info border border-gray-500 focus:border-l-pink-500 focus:border-t-pink-500 focus:border-r-secondary focus:border-b-secondary  focus-visible:outline-0 placeholder:text-gray-300"
                        type="text"
                        id="LastName"
                        name="LastName"
                        placeholder="Doe"
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
                        className="w-full p-5 rounded-lg bg-info border border-gray-500 focus:border-l-pink-500 focus:border-t-pink-500 focus:border-r-secondary focus:border-b-secondary  focus-visible:outline-0 placeholder:text-gray-300"
                        type="email"
                        id="Email"
                        name="Email"
                        placeholder="Johndoe@mail.com"
                        required
                      />
                    </div>
                  </li>
                  <li className="sm:col-span-2">
                    <div>
                      <label
                        className="capitalize block text-lg font-semibold mb-2"
                        htmlFor="FirstName"
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
                            <option>CA</option>
                            <option>EU</option>
                          </select>
                        </div>
                        <input
                          type="text"
                          name="phone-number"
                          id="phone-number"
                          className="block w-full rounded-lg py-5 pl-20 bg-info border border-gray-500 focus:border-l-pink-500 focus:border-t-pink-500 focus:border-r-secondary focus:border-b-secondary  focus-visible:outline-0 placeholder:text-gray-300"
                          placeholder="+92 (000) 000 0000"
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
                        className="resize-none w-full p-5 rounded-lg bg-info border border-gray-500 focus:border-l-pink-500 focus:border-t-pink-500 focus:border-r-secondary focus:border-b-secondary  focus-visible:outline-0 placeholder:text-gray-300"
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
                        className="w-full p-5 rounded-lg bg-info border border-gray-500 focus:border-l-pink-500 focus:border-t-pink-500 focus:border-r-secondary focus:border-b-secondary  focus-visible:outline-0 placeholder:text-gray-300"
                      >
                        <option selected disabled value="-">
                          Please Select
                        </option>
                        <option value="Canada">Canada</option>
                        <option value="Mexico">Mexico</option>
                      </select>
                    </div>
                  </li>
                  <li className="sm:col-span-2">
                    <button
                      type="submit"
                      className="w-full bg-g-primary text-white text-lg font-semibold rounded-lg py-5 px-10 hover:opacity-90 transition-all duration-300"
                    >
                      Submit
                    </button>
                  </li>
                </ul>
              </form>
            </div>
          </li>
          <li className="order-first lg:order-last">
            <div className="min-h-[21.875rem] sm:min-h-[28.125rem] h-full w-full relative flex items-end">
              <span className="absolute h-full w-[95%] -top-3 right-0 rounded-xl border-2 border-l-pink-500 border-t-pink-500 border-r-secondary border-b-secondary" />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.0699490209454!2d110.44260851459829!3d-7.782408494391458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5a0dfa5c6ec9%3A0xf7d67edcf72b50e7!2sKolam%20Renang%20Griya%20Permata%20Hijau!5e0!3m2!1sen!2s!4v1672486107746!5m2!1sen!2s"
                className="block h-[97%] w-[95%] rounded-xl relative z-10"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </li>
        </ul>
      </Container>
    </section>
  );
};

export default ContactSection;
