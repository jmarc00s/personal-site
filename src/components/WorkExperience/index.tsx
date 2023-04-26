import React from 'react';
import { WORK_EXPERIENCES } from './constant';
import { WorkExperienceItem } from './components/WorkExperienceItem';
import { WorkIcon } from '../icons';

export const WorkExperience = () => {
  return (
    <section className="w-full border rounded-lg border-base-300 px-6 py-4 max-h-72">
      <div className="flex gap-4 items-center mb-8">
        <WorkIcon />
        <p className="font-bold text-sm">Work experiences</p>
      </div>
      <ul className="flex flex-col mb-8">
        {WORK_EXPERIENCES.map((workExperience, index) => (
          <WorkExperienceItem key={index} workExperience={workExperience} />
        ))}
      </ul>
    </section>
  );
};
