import React from 'react';
import Image from 'next/image';
import { ToolsListQuery } from '../generated/graphql';
import Tool from './Tool';

type Props = {
  tools: ToolsListQuery['tools'];
};

export const AboutMe = ({ tools }: Props) => {
  return (
    <section className="flex-col lg:flex-row flex justify-center items-center lg:justify-between my-20 space-y-5 lg:space-x-5 p-8">
      <div className="lg:w-[800px] md:block hidden w-[550px] rounded-xl overflow-hidden">
        <Image
          src="https://media.graphassets.com/1z5LhwN3SpGK3TX3eGag"
          layout="responsive"
          width={4}
          height={3}
          objectFit="cover"
          alt="me"
        />
      </div>
      <div className="w-full">
        <article className="space-y-5 p-4">
          <p className="text-3xl font-bold text-white">
            I&apos;m <span className="text-sky-400">Mateusz Kozłowski</span>
          </p>
          <p className="text-xl text-white">
            I&apos;ve been coding for 2 years. I&apos;m self taught developer who loves to build full-stack applications
            and learning about new technologies.
          </p>
          <p className="text-xl text-white">
            When I&apos; not coding, I like to go to the gym, play games, read books and hang out with my friends.
          </p>
          <p className="text-xl text-white">My favorite tools to work with:</p>
          <ul className="grid grid-cols-2">
            {tools.map((item) => (
              <Tool key={item.id} tool={item} />
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
