"use client"

import * as React from "react"

import { cn } from "../../lib/utils";
import { Button } from "../ui/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "../ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { Label } from "./label";


export function Combobox(props) {
    const { value, onChange = () => { }, options, placeholder } = props
    const [open, setOpen] = React.useState(false)

    return (
            <Popover open={open} onOpenChange={setOpen}
                className='w-full relative'
            >
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className={cn(
                            "w-full justify-between text-left font-normal text-xs",
                            !value && "text-muted-foreground"
                        )}
                        disabled={props.disabled}
                    >
                        {value
                            ? options.find((framework) => framework.value.toLowerCase() === value.toLowerCase())?.label
                            : placeholder}
                        <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0 PopoverContent min-h-max">
                    <Command>
                        <CommandInput placeholder="Search framework..." className="h-9" />
                        <CommandEmpty>No options found.</CommandEmpty>
                        <CommandGroup>
                            {options.map((framework) => <CommandItem
                                key={framework.value}
                                value={framework.value}
                                onSelect={(currentValue) => {
                                    // setValue(currentValue === value ? "" : currentValue)
                                    setOpen(false)
                                    onChange(currentValue === value ? "" : currentValue)
                                }}
                            >
                                {framework.label}
                                <CheckIcon
                                    className={cn(
                                        "ml-auto h-4 w-4",
                                        value === framework.value.toLowerCase() ? "opacity-100" : "opacity-0"
                                    )}
                                />
                            </CommandItem>
                            )}
                        </CommandGroup>
                    </Command>
                </PopoverContent>
            </Popover>
    )
}
