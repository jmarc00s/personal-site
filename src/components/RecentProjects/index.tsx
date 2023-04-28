import { Repo } from '@/types';
import React from 'react';
import { RecentProjectItem } from './components/RecentProjectsItem';
import { ProjectsIcon } from '../icons';

type RecentProjectsProps = {
  repos: Repo[];
};

export const RecentProjects = ({ repos }: RecentProjectsProps) => (
  <section className="w-full border rounded-lg border-base-300 px-6 py-4 shadow-sm">
    <div className="flex gap-4 items-center mb-8">
      <ProjectsIcon />
      <p className="font-bold text-sm">Recent projects</p>
    </div>
    <ul className="flex-col mb-8 ">
      {repos.map((repo) => (
        <RecentProjectItem key={repo.id} repo={repo} />
      ))}
    </ul>
  </section>
);
