import { useEffect, useRef, useState } from "react"
import './select.css'
import { twMerge } from "tailwind-merge"
import SubTitle from "../SubTitle"

export function Select(props) {
  const { multiple, value, onChange=()=>{}, options, className, labeltext, error, errormessage, placeholder, required,disabled } = props
  const [isOpen, setIsOpen] = useState(false)
  const [highlightedIndex, setHighlightedIndex] = useState(0)
  const containerRef = useRef(null)
  let containerclass = 'relative w-[15rem] text-xs min-h-[1.5rem] flex items-center gap-[0.5rem] p-[0.5rem] rounded-[0.25rem] border-[0.05rem] border-solid border-[#777] focus:border-[hsl(200,100%,50%)] outline-none'
  let classes = className ? twMerge(containerclass, className) : containerclass

  function clearOptions() {
    multiple ? onChange([]) : onChange({})
  }

  function selectOption(option) {
    if (multiple) {
      if (value.includes(option)) {
        onChange(value.filter(o => o !== option))
      } else {
        onChange([...value, option])
      }
    } else {
      if (option !== value) onChange(option)
    }
  }

  function isOptionSelected(option) {
    return multiple ? value.includes(option) : option === value
  }

  useEffect(() => {
    if (isOpen) setHighlightedIndex(0)
  }, [isOpen])

  useEffect(() => {
    const handler = (e) => {
      if (e.target != containerRef.current) return
      switch (e.code) {
        case "Enter":
        case "Space":
          setIsOpen(prev => !prev)
          if (isOpen) selectOption(options[highlightedIndex])
          break
        case "ArrowUp":
        case "ArrowDown": {
          if (!isOpen) {
            setIsOpen(true)
            break
          }

          const newValue = highlightedIndex + (e.code === "ArrowDown" ? 1 : -1)
          if (newValue >= 0 && newValue < options.length) {
            setHighlightedIndex(newValue)
          }
          break
        }
        case "Escape":
          setIsOpen(false)
          break
      }
    }
    containerRef.current?.addEventListener("keydown", handler)

    return () => {
      containerRef.current?.removeEventListener("keydown", handler)
    }
  }, [isOpen, highlightedIndex, options])
  return (
    <>
      {labeltext && <SubTitle className="mb-2 text-sm font-normal">{labeltext} 
      {/* {required ? <span className="text-red-600">*</span> : null} */}
      </SubTitle>}
      <div
        ref={containerRef}
        onBlur={() => setIsOpen(false)}
        onClick={() => {
          if(!disabled)setIsOpen(prev => !prev)}}
        tabIndex={0}
        className={`${classes}`}
      >
        <span className={'value'}>
          {(!value || value?.length === 0 || !value.value) && <span className="option-placeholder">{placeholder ? placeholder : `Please select an option`}</span>}
          {multiple
            ? value.map(v => (
              <button
                key={v.value}
                onClick={e => {
                  e.stopPropagation()
                  selectOption(v)
                }}
                className={"option-badge"}
              >
                {v.label}
                <span className={"remove-btn"}>&times;</span>
              </button>
            ))
            : <span className="option-placeholder">
              {value?.label}
            </span>
          }
        </span>
        {!(!value || value?.length === 0) && <button
          onClick={e => {
            e.stopPropagation()
            e.preventDefault()
            clearOptions()
          }}
          className={"clear-btn"}
        >
          &times;
        </button>}
        <div className={"divider"}></div>
        <div className={"caret"}></div>
        <ul className={`options ${isOpen ? 'show' : ""}`}>
          {options.map((option, index) => (
            <li
              onClick={e => {
                e.stopPropagation()
                selectOption(option)
                setIsOpen(false)
              }}
              onMouseEnter={() => setHighlightedIndex(index)}
              key={option.value}
              className={`option ${isOptionSelected(option) ? 'selected' : ""
                } ${index === highlightedIndex ? 'highlighted' : ""}`}
            >
              {option.label}
            </li>
          ))}
        </ul>
      </div>
      <div className={`input-error ${error === true ? "text-red-600" : "text-green-500"}`}>
        {errormessage}
      </div>
    </>
  )
}
