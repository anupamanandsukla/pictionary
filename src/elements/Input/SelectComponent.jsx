import React from 'react'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { cn } from "../../lib/utils";

export const SelectComponent = (props) => {
    const { value } = props

    return (
        <>
            <Select
                {...props}
            >
                <SelectTrigger >
                    <SelectValue
                        className={cn(
                            "w-full justify-between text-left font-normal text-xs border border-gray-400",
                            !value && "text-muted-foreground"
                        )}
                        disabled={props.disabled}
                        placeholder={props.placeholder} 
                        />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        {props.options.map((i) => <SelectItem value={i.value} key={i.value} disabled={i.disabled}>{i.label}</SelectItem>)}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </>
    )
}

export default Select