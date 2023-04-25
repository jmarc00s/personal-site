import { MenuItem as MenuItemType } from '@/types';
import Link from 'next/link';
import React from 'react';

type MenuItemProps = MenuItemType;

export const MenuItem = ({ title, href }: MenuItemProps) => {
  return (
    <Link href={href}>
      <li
        className="font-semibold text-sm transition hover:text-teal-500 px-3 py-2"
        title={title}
      >
        {title}
      </li>
    </Link>
  );
};
