import React from 'react';
import { TechnologiesListQuery } from '../generated/graphql';
import Image from 'next/image';

type Props = {
  technologies: TechnologiesListQuery['technologies'];
};

export const Technologies = ({ technologies }: Props) => {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center md:justify-evenly md:items-center w-full my-10 space-y-8 md:space-x-8 md:space-y-0 p-4">
      {technologies.map((item) => (
        <div key={item.id} className="w-[220px] md:w-[250px]">
          <Image src={item.image.url} layout="responsive" width={4} height={3} objectFit="contain" alt="technologia" />
        </div>
      ))}
    </section>
  );
};
