// import React from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle2, PenLine, CircleDot } from 'lucide-react';

import { ArrowSvg, HomeSvg, WelcomeSvg } from "../constant/svg";
import labels from "../constant/labels";
import Part1 from "./Part1";
import Part2 from "./Part2";
import Part3 from "./Part3";
import Part4 from "./Part4";
import Part5 from "./Part5";
const tasks = [
  { id: 1, name: 'Logo Design', status: 'todo' },
  { id: 2, name: 'Facebook banner', status: 'todo' },
  { id: 3, name: 'Landing page', status: 'in-progress' },
  { id: 4, name: 'Brand Guideline', status: 'todo' },
  { id: 5, name: 'Email', status: 'todo' },
];


function Home() {
  const navigate = useNavigate()
  return (
    <div className="bg-black text-white">
      <Part1  />
      <Part2  />
      <Part3  />
      <Part4 />
      <Part5 />

      
      </div>
      
      
  );
}

export default Home;
