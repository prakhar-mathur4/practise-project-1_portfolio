import React from "react";

function HeroSection() {
  return (
    <div className="flex item-center justify-center flex-col py-20">
      <div className="text-center">
        {/* This is my Name Heading */}

        <h1 className="text-2xl md:text-4xl mb-1 md:mb-3 text-indigo-600 dark:text-indigo-400 font-semibold">
          Hi This is Prakhar Mathur
        </h1>

        {/* This is my brief introduction */}

        <p className="text-md md:text-xl pt-5 p-20 pb-5 text-center text-gray-600 dark:text-gray-300">
          I'm a Site Reliability Engineer (SRE) deeply committed to optimizing
          system reliability and performance. I've actively contributed to
          critical SRE functions, proficient in monitoring, alerting,
          automation, and Infrastructure as Code (IaC). My skills include quick
          issue resolution, automation for faster incident response, and
          maintaining Databases using Postgres. I've played a key role in
          incident management, and data governance, fostering collaboration
          between development and operations teams to ensure system reliability.
          I stay updated with industry trends and seek new challenges.
        </p>

        {/* This is a button to my resumr */}

        <a
          href=""
          className="inline-block px-8 py-3 hover:bg-indigo-800 bg-indigo-600 text-white border-transparent text-base md:text-md font-medium rounded-md"
        >
          Resume
        </a>
      </div>
    </div>
  );
}

export default HeroSection;
