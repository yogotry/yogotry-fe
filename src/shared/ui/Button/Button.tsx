import React, {ButtonHTMLAttributes} from 'react';

import {cn} from "@/shared/lib/cn";

import styles from './Button.module.scss';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
}

export function Button({
                         children,
                         variant = 'primary',
                         className,
                         ...props
                       }: ButtonProps) {
  return (
    <button
      className={cn(
        styles.button,
        styles[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
