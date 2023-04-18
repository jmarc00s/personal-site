import Link from 'next/link';
import React from 'react';
import type { MenuItem as MenuItemType } from '../../types';

type MenuItemProps = MenuItemType;

export const MenuItem = ({ title, href }: MenuItemProps) => {
  return (
    <li
      className="font-semibold text-sm transition hover:text-teal-500 px-3 py-2"
      title={title}
    >
      <Link href={href}>{title}</Link>
    </li>
  );
};
