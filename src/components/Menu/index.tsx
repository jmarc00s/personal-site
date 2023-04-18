import React from 'react';
import { MenuItem } from './types';
import { MenuItem as MenuItemComponent } from './components/MenuItem';

const menus: MenuItem[] = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Projects',
    href: '/projects',
  },
  {
    title: 'About',
    href: '/about',
  },
];

export const Menu = () => (
  <header className="flex justify-center">
    <nav className="rounded-full bg-base-300 border border-base-200 shadow-sm">
      <ul className="flex px-3">
        {menus.map((menu, index) => (
          <MenuItemComponent key={index} {...menu} />
        ))}
      </ul>
    </nav>
  </header>
);
