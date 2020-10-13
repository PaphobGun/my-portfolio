import React from 'react';

import StarsBackground from 'src/components/Landing/StarsBackground';

const Landing = () => {
  return (
    <div id="home" className="relative">
      <StarsBackground />
      <div className="font-sans container px-8 md:px-12 lg:px-56 text-white transform -translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2">
        <div className="font-mono text-pink-500 mb-6">Hi, my name is</div>
        <div className="font-bold text-gray-400 text-4xl md:text-4xl lg:text-6xl">
          Paphob Aneakpoonsinsuk.
        </div>
        <div className="font-bold text-gray-500 text-4xl md:text-4xl lg:text-6xl">
          Software Developer
        </div>
        <div className="mt-4 lg:w-1/2 text-gray-600">
          I'm a software developer based in Bangkok, specializing in building
          websites, applications, and everything in between.
        </div>
        <a
          href="mailto:paphob.a@gmail.com"
          className="inline-block focus:outline-none font-mono mt-8 bg-transparent py-4 px-6 border-2 rounded border-pink-500  text-pink-500 hover:opacity-50"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default Landing;
