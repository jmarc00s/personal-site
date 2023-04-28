import { Repo } from '@/types';
import React from 'react';

type RecentProjectItemProps = {
  repo: Repo;
};

export const RecentProjectItem = ({
  repo: { name, description, html_url: url, topics },
}: RecentProjectItemProps) => {
  const topicsToShow =
    topics && topics.length > 2 ? topics?.slice(0, 3) : topics;

  return (
    <a href={url} title="Click to see more" target="_blank">
      <li className="flex flex-col mb-3 bg-base-200  hover:bg-base-300 transition rounded-lg p-4 shadow-md">
        <div className="mb-2">
          <p className="text-md font-semibold">{name}</p>
          <span className="text-sm ">{description}</span>
        </div>
        <div className="gap-3 hidden md:flex">
          {topicsToShow?.map((topic) => (
            <span key={topic} className="badge">
              {topic}
            </span>
          ))}
        </div>
      </li>
    </a>
  );
};
