import React from 'react';
import { ToolsListQuery } from '../generated/graphql';

type Props = {
  tool: ToolsListQuery['tools'][0];
};

const Tool = ({ tool }: Props) => {
  return (
    <li className="text-xl md:text-2xl text-white space-x-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 inline-block text-sky-500"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clipRule="evenodd"
        />
      </svg>
      <span>{tool.name}</span>
    </li>
  );
};

export default Tool;
