import React from 'react';
import { GithubIcon, LinkedinIcon } from '../icons';

export const SocialMedia = () => {
  return (
    <ul className="flex gap-6">
      <li>
        <a
          title="Linkedin"
          href="https://www.linkedin.com/in/joao-marcos-santos/"
          target="_blank"
        >
          <LinkedinIcon />
        </a>
      </li>
      <li>
        <a href="https://github.com/jmarc00s" target="_blank" title="Github">
          <GithubIcon />
        </a>
      </li>
    </ul>
  );
};
