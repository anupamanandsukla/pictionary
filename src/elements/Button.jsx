import * as React from "react"
import { cn } from "../utils/utils"
import { SvgSpinners90Ring } from "../utils/svg"

const variant = (props) => {
  switch (props?.variant) {
    case 'primary':
      return 'bg-primary hover:bg-primary text-white font-medium py-1.5 px-3 rounded text-sm'
    case 'secondary':
      return 'bg-secondary hover:bg-secondary text-white font-medium py-1.5 px-3 rounded text-sm'
    case 'outline':
      return 'border hover:text-primary-hover font-medium py-1.5 px-3 rounded-lg text-sm '
    case 'outline-secondary':
      return 'border border-secondary-normal hover:border-secondary-hover text-secondary-normal hover:text-secondary-hover font-medium py-1.5 px-3 rounded-[4px] text-sm'
    case 'text':
      return 'text-primary-normal hover:text-primary-hover font-medium py-1.5 px-3 rounded text-sm'
    case 'expandIcon':
      return "group relative text-primary-foreground bg-primary hover:bg-primary/90"
    case 'ringHover':
      return "bg-primary text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:ring-2 hover:ring-primary/90 hover:ring-offset-2"
    case 'shine':
      return "text-primary-foreground animate-shine bg-gradient-to-r from-primary via-primary/75 to-primary bg-[length:400%_100%] "
    case 'gooeyRight':
      return "text-primary-foreground relative bg-primary z-0 overflow-hidden transition-all duration-500 before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5] before:rounded-[100%] before:bg-gradient-to-r from-zinc-400 before:transition-transform before:duration-1000  hover:before:translate-x-[0%] hover:before:translate-y-[0%] "
    case "gooeyLeft":
      return "text-primary-foreground relative bg-primary z-0 overflow-hidden transition-all duration-500 after:absolute after:inset-0 after:-z-10 after:translate-x-[-150%] after:translate-y-[150%] after:scale-[2.5] after:rounded-[100%] after:bg-gradient-to-l from-zinc-400 after:transition-transform after:duration-1000  hover:after:translate-x-[0%] hover:after:translate-y-[0%] "
    case 'linkHover1':
      return "relative after:absolute after:bg-primary after:bottom-2 after:h-[1px] after:w-2/3 after:origin-bottom-left after:scale-x-100 hover:after:origin-bottom-right hover:after:scale-x-0 after:transition-transform after:ease-in-out after:duration-300"
    case 'linkHover2':
      return "relative after:absolute after:bg-primary after:bottom-2 after:h-[1px] after:w-2/3 after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300"
    default:
      return 'bg-primary text-white font-medium py-1.5 px-3 rounded text-sm'
  }
}

let disabled = (props) => {
  if (props?.disabled) {
    return 'cursor-not-allowed opacity-50 bg-gray-300 text-gray-600 hover:bg-gray-400 hover:text-gray-800 disabled:outline-none'
  }
  return ''
}
const loading = (loading) => { return loading ? 'bg-gray-300 text-white disabled:outline-none cursor-wait text-center' : '' }

const Button = React.forwardRef(
  ({ className, size, asChild = false, children, Icon,
    iconPlacement, ...props }, ref) => {
    return (
      <button
        type={'button'}
        className={cn(variant(props), disabled(props), loading(props?.loading), 'text-[13px] ', className)}
        ref={ref}
        {...props}
      >
        {Icon && iconPlacement === "left" && (
          <div className="w-0 translate-x-[0%] pr-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-100 group-hover:pr-2 group-hover:opacity-100">
            <Icon />
          </div>
        )}
        {props?.loading ? <div className="flex gap-2 items-center justify-between"><SvgSpinners90Ring /></div> : children}
        {Icon && iconPlacement === "right" && (
          <div className="w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-2 group-hover:opacity-100">
            <Icon />
          </div>
        )}
      </button>
    )
  }
)

export default Button
