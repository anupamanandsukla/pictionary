import { cn } from "../../lib/utils"
import { Slider } from "./slider"


export function SliderDemo({ className, ...props }) {
  return (
    <Slider
      defaultValue={[0]}
      
      max={180}
      min={-180}
      step={1}
      className={cn("w-[60%]", className)}
      {...props}
    />
  )
}
