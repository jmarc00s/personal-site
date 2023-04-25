import React from 'react';
import { WorkExperience } from '../../types';

type WorkExperienceItemProps = {
  workExperience: WorkExperience;
};

export const WorkExperienceItem = ({
  workExperience,
}: WorkExperienceItemProps) => {
  const { name, role, startYear, endYear } = workExperience;

  const isCurrentJob = !endYear;

  return (
    <li className="flex mb-3 gap-3 items-center">
      <div className="ring-2 ring-base-200 bg-base-200 flex w-10 h-10 items-center justify-center rounded-full">
        <span className="rounded-full w-8 h-8 bg-base-300"></span>
      </div>
      <div className="flex-1">
        <p className="font-semibold">{name}</p>
        <span className="text-sm">{role}</span>
      </div>
      {isCurrentJob ? (
        <p className="text-sm">Current job</p>
      ) : (
        <p className="text-sm">
          {startYear} - {endYear}
        </p>
      )}
    </li>
  );
};
