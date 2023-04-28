import React from 'react';
import { EmailIcon, GithubIcon, LinkedinIcon } from '../icons';

export const SocialMedia = () => {
  return (
    <ul className="flex items-center gap-6">
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
      <li>
        <a href="mailto:jmarcossferreira@gmail.com" title="Mail">
          <EmailIcon />
        </a>
      </li>
    </ul>
  );
};
