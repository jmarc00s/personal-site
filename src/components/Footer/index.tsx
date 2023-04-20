import { MENUS } from '@/constants';
import Link from 'next/link';
import React from 'react';
import { MenuItem } from '../Menu/components/MenuItem';
import { SocialMedia } from '../SocialMedia';

export const Footer = () => {
  return (
    <footer className="bg-base-100 border-t border-base-300 px-16 py-6 flex flex-col md:flex-row justify-between items-center">
      <nav>
        <ul className="flex pb-8 md:pb-0">
          {MENUS.map((menu, index) => (
            <MenuItem key={index} {...menu} />
          ))}
        </ul>
      </nav>

      <p className="text-sm text-center">
        © 2023 João Marcos. All rights reserved.
      </p>
      <SocialMedia />
    </footer>
  );
};
