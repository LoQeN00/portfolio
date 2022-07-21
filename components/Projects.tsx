import React from 'react';
import { ProjectsListQuery } from '../generated/graphql';
import Project from './Project';

type Props = {
  projects: ProjectsListQuery['projects'];
};

export const Projects = ({ projects }: Props) => {
  return (
    <div className="mb-8">
      <h2 className="text-4xl font-extrabold tracking-wider text-white text-center my-20">My Coding Projects</h2>
      <div className="space-y-8">
        {projects.map((item) => (
          <Project key={item.id} project={item} />
        ))}
      </div>
    </div>
  );
};
