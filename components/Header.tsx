import React from 'react';

type Props = {};

export const Header = (props: Props) => {
  return (
    <div className="text-center my-20 space-y-12">
      <p className="bg-[#99a0af] text-transparent text-xl md:text-2xl bg-clip-text font-extrabold tracking-wide">
        HI, MY NAME IS
      </p>
      <h1 className="bg-gradient-to-r from-sky-400 to-cyan-300 text-transparent text-3xl md:text-6xl bg-clip-text font-extrabold tracking-wide">
        Mateusz Kozłowski
      </h1>
      <h2 className="bg-gradient-to-r from-sky-400 to-cyan-300 text-transparent text-3xl md:text-6xl bg-clip-text font-extrabold tracking-wide">
        full-stack developer wannabe
      </h2>
      <div className="space-y-2 p-4">
        <p className="text-white text-md md:text-xl">I like to build modern web applications using react.</p>
        <p className="text-white text-md  md:text-xl">I&apos;m also very passionate about graphql.</p>
        <p className="text-white text-md  md:text-xl">
          Currently, I&apos;m looking for a job as a junior frontend developer.
        </p>
      </div>
      <button className="px-5 py-3 rounded-3xl bg-gradient-to-r from-sky-400 to-cyan-300 text-white">
        Do You Want to Hire Me ?
      </button>
    </div>
  );
};
