import React from 'react';
import { ProjectsListQuery } from '../generated/graphql';
import Tool from './Tool';

type Props = {
  project: ProjectsListQuery['projects'][0];
};

const Project = ({ project }: Props) => {
  return (
    <div className="space-y-8 p-5">
      <h2 className="text-2xl md:text-3xl text-sky-400 font-bold">{project.title}</h2>
      <p className="text-white text-md md:text-xl">{project.description}</p>
      <ul className="grid grid-cols-2 w-[90%] md:w-[70%] gap-2">
        {project.tools.map((item) => (
          <Tool key={project.id} tool={item} />
        ))}
      </ul>
      <a
        href={project.github!}
        target="_blank"
        rel="noreferrer"
        className="px-4 py-2 border-2 border-sky-400 text-sky-400 rounded-full text-lg inline-block"
      >
        Github repo
      </a>
    </div>
  );
};

export default Project;
