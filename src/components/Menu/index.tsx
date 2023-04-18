import React from 'react';
import { MenuItem } from './types';
import { MenuItem as MenuItemComponent } from './components/MenuItem';

export const Menu = () => {
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

  return (
    <header className="flex justify-center">
      <section className="py-2 px-8 rounded-full bg-base-300 border border-base-200 shadow-sm">
        <ul className="flex gap-6">
          {menus.map((menu, index) => (
            <MenuItemComponent key={index} {...menu} />
          ))}
        </ul>
      </section>
    </header>
  );
};
