import React from 'react';
import Image from 'next/image';
import { ToolsListQuery } from '../generated/graphql';
import Tool from './Tool';

type Props = {
  tools: ToolsListQuery['tools'];
};

export const AboutMe = ({ tools }: Props) => {
  return (
    <section className="flex-col lg:flex-row flex justify-center items-center lg:justify-between my-2 md:my-10 space-y-8 lg:space-x-5 p-8">
      <div className="lg:w-[800px] w-[500px] md:block hidden rounded-xl overflow-hidden order-1 my-8 lg:my-0 ml-8">
        <Image
          src="/profilowe.jpg"
          layout="responsive"
          width={4}
          height={4}
          objectFit="cover"
          alt="me"
          objectPosition="top"
        />
      </div>
      <div className="w-full">
        <article className="space-y-5 p-4">
          <p className="md:text-3xl text-2xl font-bold text-white">
            I&apos;m <span className="text-sky-400">Mateusz Kozłowski</span>
          </p>
          <p className="text-md md:text-xl text-white">
            I&apos;ve been coding for 2 years. I&apos;m self taught developer who loves to build full-stack applications
            and learning about new technologies.
          </p>
          <p className=" text-md md:text-xl text-white">
            When I&apos;m not coding, I like to go to the gym, play games, read books and hang out with my friends.
          </p>
          <p className=" text-md md:text-xl text-white">My favorite tools to work with:</p>
          <ul className="grid grid-cols-2 gap-2">
            {tools.map((item) => (
              <Tool key={item.id} tool={item.name!} />
            ))}
          </ul>
          <a
            href="https://github.com/LoQeN00"
            target="_blank"
            className="border-2 border-sky-400 text-sky-400 bg-transparent px-4 py-2 rounded-3xl text-lg font-bold inline-block"
            rel="noreferrer"
          >
            My github
          </a>
        </article>
      </div>
    </section>
  );
};
