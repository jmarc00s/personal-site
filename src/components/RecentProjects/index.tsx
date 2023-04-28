import { Repo } from '@/types';
import React from 'react';
import { RecentProjectItem } from './components/RecentProjectsItem';
import { ProjectsIcon } from '../icons';
import { BorderedSection } from '../BorderedSection';

type RecentProjectsProps = {
  repos: Repo[];
};

export const RecentProjects = ({ repos }: RecentProjectsProps) => (
  <BorderedSection icon={<ProjectsIcon />} title="Recent projects">
    <ul className="flex-col mb-8 ">
      {repos.map((repo) => (
        <RecentProjectItem key={repo.id} repo={repo} />
      ))}
    </ul>
  </BorderedSection>
);
