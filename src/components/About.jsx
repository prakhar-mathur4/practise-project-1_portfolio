import React from "react";
import SectionTittle from "./SectionTittle";

function About() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-12">
      <div className="w-full md:w-6/12">
        <SectionTittle>About</SectionTittle>
        <p className="text-md text-gray-600 dark:text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          veniam dolor consectetur pariatur explicabo, iure nulla. Dolor
          debitis, natus cum ad, fugiat excepturi minima culpa atque modi
          accusantium vel voluptatem?
          <a
            href="mailto:webcifar.com"
            className="block mt-3 text-md md:text-lg text-gray-700 dark:text-gray-300 underline decoration-1 hover:text-indigo-500 dark:hover:text-indigo-500"
          >
            mathurprakhar1@gmail.com
          </a>
        </p>
      </div>
      <img
        src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
        alt="Prakhar"
        className="w-full md:w-6/12 rounded-lg object-cover"
      />
    </div>
  );
}

export default About;
