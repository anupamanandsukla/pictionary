import React from 'react'
import { Card1, Card2, Card3, Card4, Vercel, Vercel1, Vercel2, Vercel3, Vercel4 } from './Part2'

const Part5 = () => {
  return (
    <div className='w-full flex flex-col justify-center gap-y-4 px-8' >
          <div className='max-w-sm mx-auto text-center justify-center text-4xl font-normal '>
            Why DesignLab
          </div>
          <div class="relative flex overflow-x-hidden w-full text-center px-8"> 
                <div class="py-12 animate-marquee whitespace-nowrap flex justify-evenly items-center">
                    <span class="text-4xl mx-4"><Card1 /></span>
                    <span class="text-4xl mx-4"><Card2 /></span>
                    <span class="text-4xl mx-4"><Card3 /></span>
                    <span class="text-4xl mx-4"><Card4 /></span>
                    <span class="text-4xl mx-4"><Card1 /></span>
                </div>

                <div class="absolute top-0 py-12 animate-marquee2 whitespace-nowrap flex justify-evenly items-center">
                    <span class="text-4xl mx-4"><Card1/></span>
                    <span class="text-4xl mx-4"><Card2 /></span>
                    <span class="text-4xl mx-4"><Card3 /></span>
                    <span class="text-4xl mx-4"><Card4 /></span>
                    <span class="text-4xl mx-4"><Card1 /></span>
                </div>
            </div>
        </div>
  )
}

export default Part5