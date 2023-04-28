import React from 'react';
import { WORK_EXPERIENCES } from './constant';
import { WorkExperienceItem } from './components/WorkExperienceItem';
import { WorkIcon } from '../icons';
import { BorderedSection } from '../BorderedSection';

export const WorkExperience = () => {
  return (
    <BorderedSection icon={<WorkIcon />} title="Work experiences">
      <ul className="flex flex-col">
        {WORK_EXPERIENCES.map((workExperience, index) => (
          <WorkExperienceItem key={index} workExperience={workExperience} />
        ))}
      </ul>
    </BorderedSection>
  );
};
