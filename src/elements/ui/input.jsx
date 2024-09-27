import { InputEle } from "./InputEle";
import * as React from "react";
import "react-international-phone/style.css";
import { Label } from "../Input/label";
import { PatternFormat } from "react-number-format";
import { cn } from "../../lib/utils";
import { SelectComponent } from "../Input/SelectComponent";
import { DatePicker } from "../Input/DatePicker";
import { Combobox } from "../Input/ComboBox";
import { SliderDemo } from "./SliderDemo";
import { Checkbox } from "./checkbox";
import { RadioGroupDemo } from "./RadioDemo";

export function Input(props) {
  const {
    type,
    onChange,
    labeltext,
    error,
    errormessage,
    onClickText,
    onOTPSubmit,
    onClickEmailText,
    ...propsinput
  } = props;
  const renderInput = () => {
    switch (type) {
      case "radio":
        return <RadioGroupDemo {...props} />;
      case "checkbox":
        return <Checkbox {...props} />;
      case "slider":
        return <SliderDemo {...props} />;
      case "selectsearch":
        return <Combobox {...props} />;
      case "date":
        return (
          <DatePicker
            {...props}
            className={
              `${
                error === true
                  ? " border-red-400"
                  : error === false
                  ? "border-green-400"
                  : ""
              } ` + props?.className
            }
          />
        );
      case "select":
        return (
          <SelectComponent
            {...props}
            className={
              `${
                error === true
                  ? " border-red-400"
                  : error === false
                  ? "border-green-400"
                  : ""
              } ` + props?.className
            }
          />
        );
      case "phone":
        return (
          <div
            className={cn(
              ` flex items-center w-full h-10 text-xs rounded-lg overflow-hidden border border-input bg-background ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none  disabled:cursor-not-allowed disabled:opacity-50 `,
              props.className,
              `${
                error
                  ? "border-red-500 "
                  : error != undefined && " border-green-500 "
              }${
                error
                  ? "border-red-500 "
                  : error != undefined && " border-green-500 "
              }`
            )}
          >
            <button
              id="dropdown-phone-button"
              className="flex-shrink-0  inline-flex items-center py-3 px-3.5  font-medium text-center text-gray-900 bg-gray-100 border-r border-gray-300 hover:bg-gray-200  focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
              type="button"
              disabled
            >
              +91
              <svg
                className="w-2 h-2 ms-2"
                aria-hidden="true"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            <label
              htmlFor="phone-input"
              className="mb-2 font-medium text-gray-900 sr-only dark:text-white"
            >
              {labeltext && labeltext}
            </label>
            <div className="relative w-full">
              <PatternFormat
                className=" tracking-widest py-3 px-4 w-full z-20 text-sm text-gray-900 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                {...propsinput}
                onValueChange={({ value }) => {
                  onChange(value);
                }}
              />
            </div>
            {props?.verify ? (
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="green"
                    fill-rule="evenodd"
                    d="M15.418 5.643a1.25 1.25 0 0 0-1.34-.555l-1.798.413a1.25 1.25 0 0 1-.56 0l-1.798-.413a1.25 1.25 0 0 0-1.34.555l-.98 1.564c-.1.16-.235.295-.395.396l-1.564.98a1.25 1.25 0 0 0-.555 1.338l.413 1.8a1.25 1.25 0 0 1 0 .559l-.413 1.799a1.25 1.25 0 0 0 .555 1.339l1.564.98c.16.1.295.235.396.395l.98 1.564c.282.451.82.674 1.339.555l1.798-.413a1.25 1.25 0 0 1 .56 0l1.799.413a1.25 1.25 0 0 0 1.339-.555l.98-1.564c.1-.16.235-.295.395-.395l1.565-.98a1.25 1.25 0 0 0 .554-1.34L18.5 12.28a1.25 1.25 0 0 1 0-.56l.413-1.799a1.25 1.25 0 0 0-.554-1.339l-1.565-.98a1.25 1.25 0 0 1-.395-.395zm-.503 4.127a.5.5 0 0 0-.86-.509l-2.615 4.426l-1.579-1.512a.5.5 0 1 0-.691.722l2.034 1.949a.5.5 0 0 0 .776-.107z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            ) : (
              <div
                className={`absolute right-11 cursor-pointer font-semibold ${
                  props?.isMobileNumber === true
                    ? "opacity-50 pointer-events-none"
                    : ""
                }`}
                onClick={onClickText}
                role="button"
                style={{ color: "#6666c2" }}
              >
                Send OTP
              </div>
            )}
          </div>
        );
      case "number":
        return (
          <div>
            <PatternFormat
              className={cn(
                ` flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0  disabled:cursor-not-allowed disabled:opacity-50 `,
                props.className,
                `${
                  error
                    ? "border-red-500 "
                    : error != undefined && " border-green-500 "
                }${
                  error
                    ? "border-red-500 "
                    : error != undefined && " border-green-500 "
                }`
              )}
              {...propsinput}
              onValueChange={({ value }) => {
                onChange(value);
              }}
            />
          </div>
        );
      case "otp":
        return (
          <div className="flex">
            <InputEle
              {...props}
              className={
                `${
                  error === true
                    ? " border-red-400"
                    : error === false
                    ? "border-green-400"
                    : ""
                } ` + props?.className
              }
            />
            <div
              className="absolute right-11 cursor-pointer pt-3 font-semibold"
              onClick={onOTPSubmit}
              role="button"
              style={{ color: "#6666c2", fontSize: "12px" }}
            >
              Submit OTP
            </div>
          </div>
        );
      case "email":
        return (
          <div className="flex relative">
            <InputEle
              {...props}
              className={
                `${
                  error === true
                    ? " border-red-400"
                    : error === false
                    ? "border-green-400"
                    : ""
                } ` + props?.className
              }
            />
            {props?.verifyEmail ? (
              <div className="absolute right-0 top-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="green"
                    fill-rule="evenodd"
                    d="M15.418 5.643a1.25 1.25 0 0 0-1.34-.555l-1.798.413a1.25 1.25 0 0 1-.56 0l-1.798-.413a1.25 1.25 0 0 0-1.34.555l-.98 1.564c-.1.16-.235.295-.395.396l-1.564.98a1.25 1.25 0 0 0-.555 1.338l.413 1.8a1.25 1.25 0 0 1 0 .559l-.413 1.799a1.25 1.25 0 0 0 .555 1.339l1.564.98c.16.1.295.235.396.395l.98 1.564c.282.451.82.674 1.339.555l1.798-.413a1.25 1.25 0 0 1 .56 0l1.799.413a1.25 1.25 0 0 0 1.339-.555l.98-1.564c.1-.16.235-.295.395-.395l1.565-.98a1.25 1.25 0 0 0 .554-1.34L18.5 12.28a1.25 1.25 0 0 1 0-.56l.413-1.799a1.25 1.25 0 0 0-.554-1.339l-1.565-.98a1.25 1.25 0 0 1-.395-.395zm-.503 4.127a.5.5 0 0 0-.86-.509l-2.615 4.426l-1.579-1.512a.5.5 0 1 0-.691.722l2.034 1.949a.5.5 0 0 0 .776-.107z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            ) : (
              <div
                className={`absolute right-3 cursor-pointer pt-3 font-semibold ${
                  props?.isEmail === true
                    ? "opacity-50 pointer-events-none"
                    : ""
                }`}
                onClick={onClickEmailText}
                role="button"
                style={{ color: "#6666c2", fontSize: "12px"  }}
              >
                Send OTP
              </div>
            )}
          </div>
        );
      default:
        return (
          <InputEle
            {...props}
            className={
              `${
                error === true
                  ? " border-red-400"
                  : error === false
                  ? "border-green-400"
                  : ""
              } ` + props?.className
            }
          />
        );
    }
  };

  return (
    <div className="mb-3">
      {!["checkbox", "radio"].includes(props.type) && (
        <Label className="text-sm font-normal">
          {labeltext ? labeltext : ""}
        </Label>
      )}
      <div className={`mt-1  `}>{renderInput()}</div>
      <div
        className={`input-error ${
          error === true ? "text-red-600" : "text-green-500"
        }`}
      >
        {errormessage}
      </div>
    </div>
  );
}
