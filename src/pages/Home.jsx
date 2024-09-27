// import React from "react";
import { useNavigate } from "react-router-dom";

import { ArrowSvg, HomeSvg, WelcomeSvg } from "../constant/svg";
import labels from "../constant/labels";

function Home() {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col h-full justify-between p-4">
      <WelcomeSvg className='flex justify-end  w-full' />
      <HomeSvg className="w-full flex items-center mt-6" />
      <div className="bg-none right-0 bottom-0 hover:opacity-90">
        <button className="flex  gap-4 p-4 justify-end font-bold text-xl  items-center rounded-lg cursor-pointer float-right"
          onClick={() => navigate('/welcome')}
        >
          {labels.letstart}
          <ArrowSvg className="h-16 w-16 rounded-full bg-[#064CD0] flex items-center justify-center" />
        </button>
      </div>

    </div>
  );
}

export default Home;
