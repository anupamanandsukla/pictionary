import React, { ReactNode, MouseEventHandler } from 'react';
import { twMerge } from 'tailwind-merge';

const Title = (props) => {
  const { className, onClick, children } = props
  const classes = twMerge('font-bold', className);

  return (
    <h1 className={classes} onClick={onClick}>
      {children}
    </h1>
  );
};

export default Title;
