import React, { AllHTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';

type PageHeaderProps = AllHTMLAttributes<HTMLHeadingElement> & {
  children: ReactNode;
};

export const PageHeader = ({
  children,
  className,
  ...rest
}: PageHeaderProps) => (
  <h1 className={classNames('text-4xl font-bold tracking-tight', className)}>
    {children}
  </h1>
);
