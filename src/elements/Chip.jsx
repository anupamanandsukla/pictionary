import React from 'react'
import { cn } from '../utils/utils'
import { CrossIcon } from '../utils/svg'

const Chip = React.forwardRef(
    ({ className, label, asChild = false, children, ...props }, ref) => {
        return (
            <div
                type={'button'}
                className={cn('border flex justify-between  gap-1 items-center border-gray-300 rounded-full text-[13px] px-2 py-1.5 text-nowrap overflow-x-auto', className,)}
                ref={ref}
                {...props}
            >{children}{label}
                {props?.onDelete && <CrossIcon
                    onClick={props?.onDelete}
                />}
            </div>
        )
    }
)

export default Chip