import React, { AllHTMLAttributes, PropsWithChildren } from 'react';
import classNames from 'classnames';

type BaseTextProps = AllHTMLAttributes<HTMLParagraphElement> &
  PropsWithChildren;

export const BaseText = ({ children, className, ...rest }: BaseTextProps) => {
  return (
    <p className={classNames('text-base', className)} {...rest}>
      {children}
    </p>
  );
};
