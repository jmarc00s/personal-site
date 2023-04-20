import React, { AllHTMLAttributes, ReactNode } from 'react';
import cn from 'classnames';

type PageHeaderProps = AllHTMLAttributes<HTMLHeadingElement> & {
  children: ReactNode;
};

export const PageHeader = ({
  children,
  className,
  ...rest
}: PageHeaderProps) => (
  <h1 className={cn('text-4xl font-bold tracking-tight', className)}>
    {children}
  </h1>
);
