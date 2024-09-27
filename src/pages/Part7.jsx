import React from 'react'
import { BentoGrid, BentoGridItem } from "../elements/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { useState } from 'react';
import { Coffee } from 'lucide-react';
const Part7 = () => {
  return (
    <div className='w-full flex flex-col justify-center gap-y-4 px-8' >
          <div className='max-w-lg mx-auto text-center justify-center text-6xl font-normal '>
          Membership
          </div>
          <div className='flex w-full'>

          <div class="relative w-9/12 flex flex-col gap-y-4 overflow-x-hidden text-center px-8"> 
          <MembershipCard/>
          <MembershipCard1/>
            </div>
            <ScheduleTalkCard/>
          </div>
        </div>
  )
}

export default Part7




const MembershipCard = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <div className=" rounded-2xl overflow-hidden w-full mx-auto">
      <div className="flex ">
        <div className="w-1/2 p-8 bg-gradient-to-r from-[#333232cc] to-[#4545453B]">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="bg-lime-400 rounded-full p-2">
                <Coffee className="w-6 h-6 text-gray-900" />
              </div>
              <h3 className="text-2xl pr-3 font-bold text-white">Standard</h3>
            </div>
            <div className="bg-gray-700 rounded-full p-1 flex text-xs">
              <button
                className={`px-2 py-1 rounded-full text-xs transition-colors duration-200 ${
                  isMonthly ? 'bg-gray-600 text-white' : 'text-gray-400'
                }`}
                onClick={() => setIsMonthly(true)}
              >
                Monthly
              </button>
              <button
                className={`px-2 py-1 rounded-full text-xs transition-colors duration-200 ${
                  !isMonthly ? 'bg-gray-600 text-white' : 'text-gray-400'
                }`}
                onClick={() => setIsMonthly(false)}
              >
                Yearly
              </button>
            </div>
          </div>
          <p className="text-gray-400 text-sm mb-2">2 spot left</p>
          <p className="text-gray-400 text-sm mb-8">
            Experience the Power of Collaboration and Excellence!
          </p>
          <div className="mb-6">
            <span className="text-5xl font-bold text-white">$2000</span>
            <span className="text-gray-400 text-xl">/{isMonthly ? 'month' : 'year'}</span>
          </div>
          <button className="w-full bg-lime-400 text-black py-3 rounded-full text-lg font-semibold hover:bg-lime-300 transition duration-300">
            Get started →
          </button>
        </div>
        <div className="w-1/2 p-8  bg-gradient-to-r from-[#333232cc] to-[#4545453B]">
          <h4 className="text-white text-xl text-left font-semibold mb-6">What's included</h4>
          <ul className="text-gray-300 space-y-2 font-thin text-sm">
            {[
              "One request at a time",
              "Average 24 hour delivery",
              "Unlimited design requests",
              "Unlimited brands",
              "Pause or cancel anytime",
              "Lightning fast delivery"
            ].map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="text-lime-400 mr-2 text-xl">•</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const MembershipCard1 = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <div className=" rounded-2xl overflow-hidden w-full mx-auto">
      <div className="flex">
        <div className="w-1/2 p-8 bg-gradient-to-r from-[#333232cc] to-[#4545453B]">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="bg-lime-400 rounded-full p-2">
                <Coffee className="w-6 h-6 text-gray-900" />
              </div>
              <h3 className="text-2xl pr-3 font-bold text-white">Pro</h3>
            </div>
            <div className="bg-gray-700 rounded-full p-1 flex text-xs">
              <button
                className={`px-2 py-1 rounded-full text-xs transition-colors duration-200 ${
                  isMonthly ? 'bg-gray-600 text-white' : 'text-gray-400'
                }`}
                onClick={() => setIsMonthly(true)}
              >
                Monthly
              </button>
              <button
                className={`px-2 py-1 rounded-full text-xs transition-colors duration-200 ${
                  !isMonthly ? 'bg-gray-600 text-white' : 'text-gray-400'
                }`}
                onClick={() => setIsMonthly(false)}
              >
                Yearly
              </button>
            </div>
          </div>
          <p className="text-gray-400 text-sm mb-2">2 spot left</p>
          <p className="text-gray-400 text-sm mb-8">
            Experience the Power of Collaboration and Excellence!
          </p>
          <div className="mb-6">
            <span className="text-5xl font-bold text-white">$2000</span>
            <span className="text-gray-400 text-xl">/{isMonthly ? 'month' : 'year'}</span>
          </div>
          <button className="w-full bg-lime-400 text-black py-3 rounded-full text-lg font-semibold hover:bg-lime-300 transition duration-300">
            Get started →
          </button>
        </div>
        <div className="w-1/2 p-8 bg-gradient-to-r from-[#333232cc] to-[#4545453B]">
          <h4 className="text-white text-xl text-left font-semibold mb-6">What's included</h4>
          <ul className="text-gray-300 space-y-2 font-thin text-sm">
            {[
              "One request at a time",
              "Average 24 hour delivery",
              "Unlimited design requests",
              "Unlimited brands",
              "Pause or cancel anytime",
              "Lightning fast delivery"
            ].map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="text-lime-400 mr-2 text-xl">•</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
const ScheduleTalkCard = () => {
  return (
    <div className="relative bg-gradient-to-r from-[#333232cc] to-[#4545453B] rounded-3xl overflow-hidden max-w-sm mx-auto p-8 flex flex-col justify-between min-h-[320px] isolation">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-[#333232cc] to-[#4545453B]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(0,0,0,0.3),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(0,0,0,0.3),transparent_70%)]"></div>
      </div>
      <div className="relative z-10">
        <h2 className="text-white text-3xl font-bold mb-4">
          Schedule<br />a talk
        </h2>
        <p className="text-gray-400 text-sm">
          Interested in a set price? How about a swift chat so we can understand your product better and provide an exact cost projection.
        </p>
      </div>
      <button className="relative z-10 w-full bg-white text-black py-3 px-6 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300 mt-8 flex items-center justify-center">
        Set Calendar <span className="ml-2">→</span>
      </button>
    </div>
  );
};