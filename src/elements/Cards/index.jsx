import React, { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

const Card = (props) => {
  const { className, children } = props
  const classes = className ? twMerge('p-2 bg-white rounded-lg', className) : 'p-2 bg-white rounded-lg';

  return <div {...props} className={`cus-shadow ${classes}`} >{children}</div>;
};

export default Card;
