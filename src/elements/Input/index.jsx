import { twMerge } from "tailwind-merge";
// import Clock from "./Clock";
// import Calender from "./Calender";
import Fileinput from "./Fileinput";
import { Select } from "./SelectInput";
import { DatePicker } from "./DatePicker";

const Input = (props) => {
  const {
    labeltext,
    type,
    value,
    error,
    errormessage,
    className,
    required,
    autoFocus,
    placeholder
  } = props

  const errorTag = (error, errormessage) => {
    return <div className={`input-error ${error === true ? "text-red-600" : "text-green-500"}`} >
      {errormessage}
    </div>

  }
  const renderInput = () => {
    switch (type) {
      case ("select"):
        return (<Select {...props} />)
      case ("date"):
        return <DatePicker  {...props} />
      case "file":
        return (<Fileinput {...props} />)
      case "checkbox":
        return (
          <>
            <div className="cursor-pointer">
              <div className="flex">
                <input
                  id={labeltext}
                  type="checkbox"
                  checked={value}
                  {...props}
                  className={`w-5 h-5 text-black-600 accent-[#000] border-gray-300 focus:ring-black-500 dark:focus:ring-black-600 dark:ring-offset-gray-800 dark:bg-gray-700 ${className}`}
                />
                <label
                  htmlFor={labeltext}
                  className={twMerge("decoration-solid ml-2 text-xs font-medium text-gray-900  hover:cursor-pointer", props.className)}
                >
                  {labeltext ? labeltext : <>{props.children}</>}
                  {/* {required ? <span className="text-red-600">*</span> : null} */}
                </label>
              </div>
              {errorTag(error, errormessage)}
            </div>

          </>
        );
      case "toggle":
        return (
          <div className="flex">
            {labeltext && (
              <div htmlFor={labeltext} className="mr-3 text-gray-700 text-sm font-semibold">
                {labeltext}
                {/* {required ? <span className="text-red-600">*</span> : null} */}
              </div>
            )}

            <label className="relative inline-flex items-center cursor-pointer">
              <input
                id={labeltext}
                type="checkbox"
                checked={props?.checked}
                onChange={props?.onChange}
                onClick={props?.onChange}
                name={props?.name}
                className="hidden"


              />
              {props?.checked && props?.checked === true ? <div {...props}>
                <svg width="29" height="17" viewBox="0 0 29 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="29" height="17" rx="8.5" fill="#32A64D" fillOpacity="0.2" />
                  <rect x="14" y="2" width="13" height="13" rx="6.5" fill="#32A64D" />
                </svg>

              </div> : <div {...props}>
                <svg width="29" height="17" viewBox="0 0 29 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="29" height="17" rx="8.5" fill="#CFCFCF" />
                  <rect x="2" y="2" width="13" height="13" rx="6.5" fill="white" />
                </svg>

              </div>

              }

            </label>

            {errorTag(error, errormessage)}
          </div>
        );
      case "radio":
        return (
          <div className="cursor-pointer">
            <div className="flex items-center">
              <input
                id={labeltext}
                type="radio"
                value=""
                checked={props?.checked}
                disabled={props?.disabled}
                className="cursor-pointer w-4 h-4 text-black-600 accent-[#000] border-gray-300 focus:ring-black-500 dark:focus:ring-black-600 dark:ring-offset-gray-800 dark:bg-gray-700"
                {...props}
              />
              {labeltext && (
                <label
                  htmlFor={props?.labeltext}
                  className="ml-2  cursor-pointer font-medium text-gray-900 "
                >
                  {labeltext}
                  {/* {required ? <span className="text-red-600">*</span> : null} */}

                </label>
              )}
            </div>
            {errorTag(error, errormessage)}
          </div>
        );
      case "metrics":
        return (<div className="">
          {labeltext && (
            <label
              htmlFor={labeltext}
              className="block mb-0.5 text-xs pb-1 font-medium text-[#555] "
            >
              {labeltext}
              {/* {required ? <span className="text-red-600">*</span> : null} */}
            </label>
          )}
          <div className="flex">
            <input
              id="metrics"
              autoFocus={autoFocus}
              className="rounded-none  rounded-l-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-1.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...props}
              type="number"
            />
            <span className="inline-flex items-center text-xs px-2  text-gray-900 bg-gray-300 border border-r-0 border-gray-300 rounded-r-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
              {props?.metricstext && props?.metricstext}
            </span>
          </div>
        </div>)
      default:
        return (
          <div className="mb-3 relative">
            {labeltext && (
              <label
                htmlFor={labeltext}
                className="block text-black-700 text-sm mb-2"
              >
                {labeltext}
                {/* {required ? <span className="text-red-600">*</span> : null} */}
              </label>
            )}
            <input
              id={labeltext}
              autoFocus={autoFocus}
              className={`shadow appearance-none rounded-lg border border-gray-400 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline , border-#D0D5DD-1px ${(error) ? "border-red-500" : (error != undefined && "border-green-500")}`}
              disabled={props?.disabled}
              placeholder={placeholder}
              onKeyDown={(e) => {
                if (type === 'number') {
                  blockInvalidChar(e)
                }
              }}
              maxLength={50}
              {...props}
            />
            <div className={`input-error ${error === true ? "text-red-600" : "text-green-500"}`}>
              {errormessage}
            </div>
          </div>
        );
    }
  };

  return <>{renderInput()}</>;
};

export default Input;

export const blockInvalidChar = e => ['e', 'E', '+', '-', '.'].includes(e.key) && e.preventDefault();

