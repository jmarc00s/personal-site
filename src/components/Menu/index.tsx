import React from 'react';
import { MenuItem } from './components/MenuItem';
import { MENUS } from '@/constants';

export const Menu = () => (
  <header className="flex justify-center">
    <nav className="rounded-full bg-base-300 border border-base-200 shadow-sm">
      <ul className="flex px-3">
        {MENUS.map((menu, index) => (
          <MenuItem key={index} {...menu} />
        ))}
      </ul>
    </nav>
  </header>
);
