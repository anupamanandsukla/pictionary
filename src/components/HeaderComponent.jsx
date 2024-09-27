import React from 'react';
import { M2pLogoSvg, MadeIDflowSvg } from '../constant/svg';

function HeaderComponent(props) {
  return (
    <div className='flex justify-between align-middle sticky top-0 px-3 py-4 '
      style={{ backgroundColor: props.background ? '' : '#ffffff' }}
    >
      <div className='w-auto'>
        <M2pLogoSvg />
      </div>
      <div className='w-auto  bg-white shadow h-min rounded-lg'>
        <MadeIDflowSvg />
      </div>
    </div>
  )
}

export default HeaderComponent;