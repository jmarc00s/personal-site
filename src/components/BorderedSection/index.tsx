import React, { ReactElement, ReactNode } from 'react';

type BorderedSectionProps = {
  children: ReactNode;
  title: string;
  icon: ReactElement;
};

export const BorderedSection = ({
  children,
  title,
  icon,
}: BorderedSectionProps) => {
  return (
    <section className="w-full border rounded-lg border-base-300 bg-base-300 px-6 py-4 shadow-sm h-full">
      <div className="flex gap-4 items-center mb-8">
        {icon}
        <p className="font-bold text-sm">{title}</p>
      </div>
      {children}
    </section>
  );
};
