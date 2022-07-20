import React from 'react';
import { InferGetStaticPropsType } from 'next';

import { Header } from '../components/Header';
import { Technologies } from '../components/Technologies';
import { AboutMe } from '../components/AboutMe';
import { Projects } from '../components/Projects';

import {
  TechnologiesListDocument,
  TechnologiesListQuery,
  ToolsListDocument,
  ToolsListQuery,
} from '../generated/graphql';
import { client } from '../graphql/apolloClient';

type Props = {};

const HomePage = ({ technologies, tools }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="min-h-screen flex flex-col relative max-w-7xl mx-auto">
      <Header />
      <Technologies technologies={technologies} />
      <AboutMe tools={tools} />
      <div className="h-[2px] w-full border-2 border-gray-500 rounded-lg"></div>
      <Projects />
    </div>
  );
};

export const getStaticProps = async () => {
  const { data: technologiesData } = await client.query<TechnologiesListQuery>({ query: TechnologiesListDocument });
  const { data: toolsData } = await client.query<ToolsListQuery>({ query: ToolsListDocument });

  console.log(toolsData);

  return {
    props: {
      technologies: technologiesData.technologies,
      tools: toolsData.tools,
    },
  };
};

export default HomePage;
