import { Label } from "../Input/label"
import { RadioGroup, RadioGroupItem } from "./radio-group"

export function RadioGroupDemo(props) {
    const {values, label } = props
    return (
        <RadioGroup
            {...props}
        >
            {values.map((i, idx) => <div key={idx} className="flex items-center space-x-2">
                <RadioGroupItem value={i} id={i} />
                <Label className='cursor-pointer text-xs' htmlFor={i}>{label[idx]}</Label>
            </div>)}
        </RadioGroup>
    )
}
