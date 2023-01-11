import React from "react";
import Container from "../utils/Container";

const StatsBanner = () => {
  return (
    <div className="py-8 relative z-10">
      <span className="bg-cover bg-center bg-[url('/assets/images/bg-stats.png')] opacity-80 absolute top-0 left-0 h-full w-full" />
      <Container>
        <ul className="relative z-10 text-white grid grid-cols-1 sm:grid-cols-3 gap-6">
          <li>
            <div className="flex flex-col xl:flex-row justify-center text-center xl:text-start items-center gap-3">
              <span className="text-5xl font-bold tracking-tight uppercase">
                98%
              </span>
              <span>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati.
              </span>
            </div>
          </li>
          <li>
            <div className="flex flex-col xl:flex-row justify-center text-center xl:text-start items-center gap-3">
              <span className="text-5xl font-bold tracking-tight uppercase">
                2.7X
              </span>
              <span>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati.
              </span>
            </div>
          </li>
          <li>
            <div className="flex flex-col xl:flex-row justify-center text-center xl:text-start items-center gap-3">
              <span className="text-5xl font-bold tracking-tight uppercase">
                30k
              </span>
              <span>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati.
              </span>
            </div>
          </li>
        </ul>
      </Container>
    </div>
  );
};

export default StatsBanner;
