import React from 'react';
import { BorderedSection } from '../BorderedSection';
import { EducationIcon } from '../icons';

export const Education = () => {
  return (
    <BorderedSection title="Education" icon={<EducationIcon />}>
      <div className="flex justify-between items-center">
        <div>
          <p className="font-semibold">Graduated in Computer Engeenering</p>
          <span className="text-sm">UEMG</span>
        </div>
        <span className="text-sm">2014 - 2018</span>
      </div>
    </BorderedSection>
  );
};
