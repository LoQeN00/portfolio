import React from 'react';
import { InferGetStaticPropsType } from 'next';

import { Header } from '../components/Header';
import { Technologies } from '../components/Technologies';

import { TechnologiesListDocument, TechnologiesListQuery } from '../generated/graphql';
import { client } from '../graphql/apolloClient';

type Props = {};

const HomePage = ({ technologies }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="min-h-screen flex flex-col relative max-w-7xl mx-auto">
      <Header />
      <Technologies technologies={technologies} />
    </div>
  );
};

export const getStaticProps = async () => {
  const { data } = await client.query<TechnologiesListQuery>({ query: TechnologiesListDocument });

  return {
    props: {
      technologies: data.technologies,
    },
  };
};

export default HomePage;
