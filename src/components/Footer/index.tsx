import { MENUS } from '@/constants';
import Link from 'next/link';
import React from 'react';
import { MenuItem } from '../Menu/components/MenuItem';

export const Footer = () => {
  return (
    <footer className="bg-base-100 border-t border-base-300 px-16 py-6 flex justify-between items-center">
      <nav>
        <ul className="flex">
          {MENUS.map((menu, index) => (
            <MenuItem key={index} {...menu} />
          ))}
        </ul>
      </nav>

      <p className="text-sm">© 2023 João Marcos. All rights reserved.</p>
    </footer>
  );
};
