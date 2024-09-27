import { cn } from "../../utils/utils";
import * as React from "react"


const Input = React.forwardRef(({ className, endAdornment, startAdornment, type, ...props }, ref) => {
  return (
    (<div className="relative">
      {startAdornment ? <span
        class=" absolute inset-y-0 start-0 grid w-10 place-content-center text-gray-500">
        {startAdornment}
      </span> : ''}
      <input
        type={type}
        className={cn(
          "flex mt-0.5 min-h-10 h-full w-full rounded-md border border-gray-300 bg-background px-3 py-2 placeholder:text-muted-foreground focus:outline-none focus:ring-1 outline-none focus:border-blue-500 disabled:cursor-not-allowed disabled:opacity-50",
          className, endAdornment ? 'pr-12' : '', startAdornment ? 'pl-8' : '', 'dark:bg-background dark:border-gray-700 dark:text-foreground'
        )}
        ref={ref}
        {...props} />
      {endAdornment ? <span
        class="absolute inset-y-0 end-0 grid w-10 place-content-center text-gray-500 "
      >
        {endAdornment}
      </span> : ''}
    </div>
    )
  );
})
Input.displayName = "Input"

export { Input as BasicInput }
