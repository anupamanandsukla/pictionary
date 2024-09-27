import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cva } from "class-variance-authority";

import { cn } from "../../utils/utils"

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70  flex  ",
)

const Label = React.forwardRef(({ className, label, required, optionlastar, ...props }, ref) => (
  <LabelPrimitive.Root ref={ref} title={typeof label === "string" ? label : undefined} className={cn(labelVariants(), className)} {...props}>
    <div className="overflow-hidden text-ellipsis whitespace-nowrap">
      {label}
    </div>
    {(required && !optionlastar) && (
      <span className="text-red-500 ml-1"> *</span>
    )}
  </LabelPrimitive.Root>
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }
