import React, { ReactNode, MouseEventHandler } from 'react';
import { twMerge } from 'tailwind-merge';


const SubTitle= (props) => {
  const { className, onClick, children }=props
  const classes = twMerge('text-xs font-thin', className);

  return (
    <h1 className={classes} onClick={onClick}>
      {children}
    </h1>
  );
};

export default SubTitle;
