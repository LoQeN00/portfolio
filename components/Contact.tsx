import React from 'react';

type Props = {};

const Contact = (props: Props) => {
  return (
    <div className="my-16  p-4 flex justify-around items-center space-x-4 md:flex-row flex-col space-y-5 md:space-y-0">
      <h2 className="text-md lg:text-3xl md:text-2xl text-white font-bold">
        Do you want to hire me? Hit me on LinkedIn
      </h2>
      <a
        href="https://www.linkedin.com/in/mateusz-koz%C5%82owski-22b392226/"
        target="_blank"
        rel="noreferrer"
        className="px-5 py-3 rounded-3xl bg-gradient-to-r bg-sky-400 text-white lg:text-2xl md:text-xl text-md inline-block"
      >
        My LinkedIn
      </a>
    </div>
  );
};

export default Contact;
