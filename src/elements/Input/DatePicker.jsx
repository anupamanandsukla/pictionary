"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "../../lib/utils";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Calendar } from "../../elements/Input/calendar";
import moment from "moment";

export function DatePicker(props) {
    const {
        value,
        placeholder,
        onChange,
        defaultMonth = moment().subtract(18, 'year').toDate(),
        displayFormat = "dd-MM-yyyy",
        fromDate = moment().subtract(65, 'year').toDate(),
        toDate = moment().subtract(18, 'year').toDate(),
    } = props

    const handleValueChange = (data) => {
        setDate(data)
        let e = {}
        e.target = {}
        e.target.name = props.name
        e.target.value = data ? moment(data).format('DD-MM-YYYY') : null
        e.target.type = 'date'
        onChange(e)
        setCalendarOpen(false)

    }
    const [date, setDate] = React.useState(value ? moment(value, 'DD-MM-YYYY').toDate() : undefined)

    const [calendarOpen, setCalendarOpen] = React.useState(false);

    return (
        <>
            <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant={"outline"}
                        className={cn(
                            "w-full justify-start text-left font-normal text-xs",
                            !value && "text-muted-foreground",props.className?props.className:''
                        )}
                        disabled={props.disabled}
                    >
                        {/* <CalendarIcon className="mr-2 h-4 w-4" /> */}
                        {date ? format(date, displayFormat) : <span>{placeholder ? placeholder : `Pick a date`}</span>}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />

                    </Button>
                </PopoverTrigger>
                <PopoverContent className=" p-0" align="center">
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={handleValueChange}
                        fromDate={fromDate}
                        toDate={toDate}
                        showOutsideDays
                        defaultMonth={defaultMonth}
                        captionLayout="dropdown-buttons"
                        {...props}
                        
                    />
                </PopoverContent>
            </Popover>
        </>
    )
}
