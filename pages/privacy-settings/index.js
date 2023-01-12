import Head from "next/head";
import React from "react";
import Link from "next/link";
import Container from "../../components/utils/Container";

const PrivacySettings = () => {
  return (
    <>
      <Head>
        <title>Privacy Settings - Netops Ninjas</title>
      </Head>

      <div className="grid grid-cols-7">
        <aside className="self-start mx-auto sticky top-[10rem] col-span-2 hidden md:block">
          <Link href="/privacy-settings" aria-label="Privacy Setting Page">
            <h5 className="text-xl text-blue-dark mb-3 border-l-4 border-current pl-2">
              Privacy Settings
            </h5>
          </Link>
          <ul className="list-disc text-white list-inside pl-2">
            <li className="pb-5">
              <a href="#Righttobeforgetten">Right To Be Forgetten</a>
            </li>
            <li className="pb-5">
              <a href="#dataaccessrequest">Data Access Request</a>
            </li>
            <li className="pb-5">
              <a href="#datarectification">Data Rectification</a>
            </li>
            <li className="pb-5">
              <a href="#cookieinformation">Cookie Information</a>
            </li>
          </ul>
          <Link href="/terms" aria-label="Terms & Conditions Page">
            <h5 className="text-xl text-blue-dark mb-5">Terms & Conditions</h5>
          </Link>
          <Link href="/privacy-policy" aria-label="Privacy Policy Page">
            {" "}
            <h5 className="text-xl text-blue-dark mb-5">Privacy Policy</h5>
          </Link>

          <Link href="/gpdr-compliance" aria-label="GDPR Compliance Page">
            <h5 className="text-xl text-blue-dark ">GDPR Compliance</h5>
          </Link>
        </aside>

        <main className="col-span-7 md:col-span-5 bg-primary text-white">
          <Container>
            <div className="my-36 max-w-4xl">
              <div>
                <h1 className="inline-block text-[32px] font-extrabold text-blue-dark mb-3">
                  Privacy Settings
                </h1>
                <p className="text-[18px] font-light mb-5">
                  Lorem ipsum dolor sit amet consectetur. Justo in rho orci
                  velit placerat enim.
                </p>
              </div>
              {/* SECTION Right To Be Forgetten */}
              <div
                className="mt-6 mb-16 md:mb-32 anchor"
                id="Righttobeforgetten"
              >
                <h3 className="text-[24px] py-5 font-semibold">
                  Right To Be Forgetten
                </h3>
                <form noValidate>
                  <ul className="grid grid-cols-1 gap-8 py-5">
                    <li className="w-[90%] md:w-[60%]">
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
                    <li className="w-[90%] md:w-[60%]">
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
              {/* SECTION Data Access Request */}
              <div
                className="mt-6 mb-16 md:mb-32 anchor"
                id="dataaccessrequest"
              >
                <h3 className="text-[24px] pb-5 font-semibold">
                  Data Access Request
                </h3>
                <form noValidate>
                  <ul className="grid grid-cols-1 gap-8 py-5">
                    <li className="w-[90%] md:w-[60%]">
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
                    <li className="w-[90%] md:w-[60%]">
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
              {/* SECTION Data Rectification */}
              <div
                className="mt-6 mb-16 md:mb-32 anchor"
                id="datarectification"
              >
                <h3 className="text-[24px] pb-5 font-semibold">
                  Data Rectification
                </h3>
                <form noValidate>
                  <ul className="grid grid-cols-1 gap-8 py-5">
                    <li className="w-[90%] md:w-[60%]">
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
                    <li className="w-[90%] md:w-[60%]">
                      <div>
                        <label
                          className="capitalize block text-lg font-semibold mb-2"
                          htmlFor="Description"
                        >
                          Enter Your Info As It Currently In Our System
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
                    <li className="w-[90%] md:w-[60%]">
                      <div>
                        <label
                          className="capitalize block text-lg font-semibold mb-2"
                          htmlFor="Description"
                        >
                          Enter Your Info As It Currently In Our System
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
                    <li className="w-[90%] md:w-[60%]">
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
              {/* SECTION Cookie Information */}
              <div
                className="mt-6 mb-16 md:mb-32 anchor"
                id="cookieinformation"
              >
                <h3 className="text-[24px] pb-5 font-semibold">
                  Cookie Information
                </h3>

                <div className="w-[99%] xl:w-[60%]">
                  <div className="mt-8 flex flex-col">
                    <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                      <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                          <table className="min-w-full divide-y divide-gray-400">
                            <thead className="bg-table">
                              <tr className="divide-x divide-gray-400 text-center">
                                <th
                                  scope="col"
                                  className="py-3.5 pl-4 pr-4 text-sm font-semibold text-blue-light sm:pl-6"
                                >
                                  Name
                                </th>
                                <th
                                  scope="col"
                                  className="px-8 py-3.5 text-sm font-semibold text-blue-light"
                                >
                                  Description
                                </th>
                                <th
                                  scope="col"
                                  className="px-4 py-3.5 text-sm font-semibold text-blue-light"
                                >
                                  Enable
                                </th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-400  bg-table text-center text-white">
                              <tr className="divide-x divide-gray-400">
                                <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium sm:pl-6">
                                  Cookie
                                </td>
                                <td className="whitespace-nowrap p-4 text-sm">
                                  Lorem ipsum dolor sit amet Consisvutor...
                                </td>
                                <td className="whitespace-nowrap p-4 text-sm">
                                  <input
                                    type="checkbox"
                                    className="rounded-[3px] border-l-pink-500 border-t-pink-500 border-r-secondary border-b-secondary checkboxwa "
                                  />
                                </td>
                              </tr>
                              <tr className="divide-x divide-gray-400">
                                <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium sm:pl-6">
                                  Facebook
                                  <br />
                                  Pixel
                                </td>
                                <td className="whitespace-nowrap p-4 text-sm">
                                  Lorem ipsum dolor sit amet Consisvutor...
                                </td>
                                <td className="whitespace-nowrap p-4 text-sm">
                                  <input
                                    type="checkbox"
                                    className="rounded-[3px] border-l-pink-500 border-t-pink-500 border-r-secondary border-b-secondary checkboxwa"
                                  />
                                </td>
                              </tr>
                              <tr className="divide-x divide-gray-400">
                                <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium sm:pl-6">
                                  Google
                                  <br />
                                  Analytics
                                </td>
                                <td className="whitespace-nowrap p-4 text-sm">
                                  Lorem ipsum dolor sit amet Consisvutor...
                                </td>
                                <td className="whitespace-nowrap p-4 text-sm">
                                  <input
                                    type="checkbox"
                                    className="rounded-[3px] border-l-pink-500 border-t-pink-500 border-r-secondary border-b-secondary checkboxwa"
                                  />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </main>
      </div>
    </>
  );
};

export default PrivacySettings;
