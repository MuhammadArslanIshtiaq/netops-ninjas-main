import Head from "next/head";
import React from "react";
import Link from "next/link";
import Container from "../../components/utils/Container";

const About = () => {
  return (
    <>
      <Head>
        <title>Terms - Netops Ninjas</title>
      </Head>

      <div className="grid grid-cols-7">
        <aside className="self-start mx-auto sticky top-[10rem] col-span-2 hidden md:block">
          <Link href="/privacy-settings" aria-label="Privacy Setting Page">
            <h5 className="text-xl text-blue-dark mb-5">Privacy Settings</h5>
          </Link>
          <Link href="/terms" aria-label="Terms & Conditions Page">
            <h5 className="text-xl text-blue-dark mb-3 border-l-4 border-current pl-2">
              Terms & Conditions
            </h5>
          </Link>
          <ul className="list-disc text-white list-inside pl-2">
            <li className="pb-5">
              <a href="#overview">Overview</a>
            </li>
            <li className="pb-5">
              <a href="#Interpretations">Interpretations</a>
            </li>
            <li>
              <a href="#contactduration">Contact Duration</a>
            </li>
          </ul>
          <Link href="/privacy-policy" aria-label="Privacy Policy Page">
            {" "}
            <h5 className="text-xl text-blue-dark my-5">Privacy Policy</h5>
          </Link>
          <Link href="/gpdr-compliance" aria-label="GDPR Compliance Page">
            <h5 className="text-xl text-blue-dark">GDPR Compliance</h5>
          </Link>
        </aside>

        <main className="col-span-7 md:col-span-5 bg-primary text-white">
          <Container>
            <div className="my-36 max-w-4xl">
              <div>
                <h1 className="inline-block text-[32px] font-extrabold text-blue-dark mb-3">
                  Terms & Conditions
                </h1>
                <p className="text-[18px] font-light mb-5">
                  Lorem ipsum dolor sit amet consectetur. Justo in rho orci
                  velit placerat enim.
                </p>
              </div>
              <div className="mt-6 mb-16 md:mb-32 anchor" id="overview">
                <h3 className="text-[24px] pb-5">Overview</h3>
                <p className="text-[18px] font-light pb-5">
                  Lorem ipsum dolor sit amet consectetur. Justo in rho orci
                  velit placerat enim.Lorem ipsum dolor sit amet consectetur.
                  Justo in rho orci velit placerat enim.Lorem ipsum dolor sit
                  amet consectetur. Justo in rho orci velit placerat enim.Lorem
                  ipsum dolor sit amet consectetur. Justo in rho orci velit
                  placerat enim. Lorem ipsum dolor sit amet consectetur. Justo
                  in rho orci velit placerat enim.Lorem ipsum dolor sit amet
                  consectetur. Justo in rho orci velit placerat enim.Lorem ipsum
                  dolor sit amet consectetur. Justo in rho orci velit placerat
                  enim.Lorem ipsum dolor sit amet consectetur. Justo in rho orci
                  velit placerat enim.
                </p>
                <p className="text-[18px] font-light">
                  Lorem ipsum dolor sit amet consectetur. Justo in rho orci
                  velit placerat enim.Lorem ipsum dolor sit amet consectetur.
                  Justo in rho orci velit placerat enim.Lorem ipsum dolor sit
                  amet consectetur. Justo in rho orci velit placerat enim.Lorem
                  ipsum dolor sit amet consectetur. Justo in rho orci velit
                  placerat enim. Lorem ipsum dolor sit amet consectetur. Justo
                  in rho orci velit placerat enim.Lorem ipsum dolor sit amet
                  consectetur. Justo in rho orci velit placerat enim.Lorem ipsum
                  dolor sit amet consectetur. Justo in rho orci velit placerat
                  enim.Lorem ipsum dolor sit amet consectetur. Justo in rho orci
                  velit placerat enim.
                </p>
              </div>
              <div className="mt-6 mb-16 md:mb-32 anchor" id="Interpretations">
                <h3 className="text-[24px] pb-5">Interpretations</h3>
                <p className="text-[18px] font-light pb-5">
                  Lorem ipsum dolor sit amet consectetur. Justo in rho orci
                  velit placerat enim.Lorem ipsum dolor sit amet consectetur.
                  Justo in rho orci velit placerat enim.Lorem ipsum dolor sit
                  amet consectetur. Justo in rho orci velit placerat enim.Lorem
                  ipsum dolor sit amet consectetur. Justo in rho orci velit
                  placerat enim. Lorem ipsum dolor sit amet consectetur. Justo
                  in rho orci velit placerat enim.Lorem ipsum dolor sit amet
                  consectetur. Justo in rho orci velit placerat enim.Lorem ipsum
                  dolor sit amet consectetur. Justo in rho orci velit placerat
                  enim.Lorem ipsum dolor sit amet consectetur. Justo in rho orci
                  velit placerat enim.
                </p>
                <p className="text-[18px] font-light">
                  Lorem ipsum dolor sit amet consectetur. Justo in rho orci
                  velit placerat enim.Lorem ipsum dolor sit amet consectetur.
                  Justo in rho orci velit placerat enim.Lorem ipsum dolor sit
                  amet consectetur. Justo in rho orci velit placerat enim.Lorem
                  ipsum dolor sit amet consectetur. Justo in rho orci velit
                  placerat enim. Lorem ipsum dolor sit amet consectetur. Justo
                  in rho orci velit placerat enim.Lorem ipsum dolor sit amet
                  consectetur. Justo in rho orci velit placerat enim.Lorem ipsum
                  dolor sit amet consectetur. Justo in rho orci velit placerat
                  enim.Lorem ipsum dolor sit amet consectetur. Justo in rho orci
                  velit placerat enim.
                </p>
              </div>
              <div className="mt-6 mb-16 md:mb-32 anchor" id="contactduration">
                <h3 className="text-[24px] pb-5">Contact Duration</h3>
                <p className="text-[18px] font-light pb-5">
                  Lorem ipsum dolor sit amet consectetur. Justo in rho orci
                  velit placerat enim.Lorem ipsum dolor sit amet consectetur.
                  Justo in rho orci velit placerat enim.Lorem ipsum dolor sit
                  amet consectetur. Justo in rho orci velit placerat enim.Lorem
                  ipsum dolor sit amet consectetur. Justo in rho orci velit
                  placerat enim. Lorem ipsum dolor sit amet consectetur. Justo
                  in rho orci velit placerat enim.Lorem ipsum dolor sit amet
                  consectetur. Justo in rho orci velit placerat enim.Lorem ipsum
                  dolor sit amet consectetur. Justo in rho orci velit placerat
                  enim.Lorem ipsum dolor sit amet consectetur. Justo in rho orci
                  velit placerat enim.
                </p>
                <p className="text-[18px] font-light">
                  Lorem ipsum dolor sit amet consectetur. Justo in rho orci
                  velit placerat enim.Lorem ipsum dolor sit amet consectetur.
                  Justo in rho orci velit placerat enim.Lorem ipsum dolor sit
                  amet consectetur. Justo in rho orci velit placerat enim.Lorem
                  ipsum dolor sit amet consectetur. Justo in rho orci velit
                  placerat enim. Lorem ipsum dolor sit amet consectetur. Justo
                  in rho orci velit placerat enim.Lorem ipsum dolor sit amet
                  consectetur. Justo in rho orci velit placerat enim.Lorem ipsum
                  dolor sit amet consectetur. Justo in rho orci velit placerat
                  enim.Lorem ipsum dolor sit amet consectetur. Justo in rho orci
                  velit placerat enim.
                </p>
              </div>
            </div>
          </Container>
        </main>
      </div>
    </>
  );
};

export default About;
