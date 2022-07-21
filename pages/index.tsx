import React from 'react';
import { InferGetStaticPropsType } from 'next';

import { Header } from '../components/Header';
import { Technologies } from '../components/Technologies';
import { AboutMe } from '../components/AboutMe';
import { Projects } from '../components/Projects';
import Contact from '../components/Contact';

import {
  TechnologiesListDocument,
  TechnologiesListQuery,
  ToolsListDocument,
  ToolsListQuery,
  ProjectsListDocument,
  ProjectsListQuery,
} from '../generated/graphql';
import { client } from '../graphql/apolloClient';

type Props = {};

const HomePage = ({ technologies, tools, projects }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="min-h-screen flex flex-col relative max-w-7xl mx-auto">
      <Header />
      <Technologies technologies={technologies} />
      <AboutMe tools={tools} />
      <div className="h-[2px] w-[90%] mx-auto border-2 border-gray-500 rounded-lg"></div>
      <Projects projects={projects} />
      <Contact />
    </div>
  );
};

export const getStaticProps = async () => {
  const { data: technologiesData } = await client.query<TechnologiesListQuery>({ query: TechnologiesListDocument });
  const { data: toolsData } = await client.query<ToolsListQuery>({ query: ToolsListDocument });
  const { data: projectsData } = await client.query<ProjectsListQuery>({ query: ProjectsListDocument });

  return {
    props: {
      technologies: technologiesData.technologies,
      tools: toolsData.tools,
      projects: projectsData.projects,
    },
  };
};

export default HomePage;
