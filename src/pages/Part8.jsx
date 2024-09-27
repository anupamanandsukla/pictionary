import React from 'react'
import { useState } from 'react';
import { Coffee } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion"
const Part8 = () => {
  return (
    <div className='w-full flex flex-col justify-center gap-y-4 px-8 py-4' >
          <div className='flex w-full px-8'>
            <div className=' w-3/12 pt-4 text-4xl font-thin'>

          Answer to <br />Your questions
            </div>
          <div class="relative w-9/12 flex flex-col gap-y-4 overflow-x-hidden text-center px-8"> 
          <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>What skills does our group possess?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
            </div>
          </div>
        </div>
  )
}

export default Part8

