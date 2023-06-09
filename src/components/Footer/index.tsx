import React from 'react';
import { SocialMedia } from '../SocialMedia';

export const Footer = () => {
  return (
    <footer className="bg-base-100 border-t border-base-300 px-16 py-6 flex flex-col md:flex-row justify-between items-center">
      <p className="text-sm text-center">
        © 2023 João Marcos. All rights reserved.
      </p>
      <SocialMedia />
    </footer>
  );
};
