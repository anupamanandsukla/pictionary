import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";

import ButtonDropdown from "./ButtonDropdown";
import Input from "../Input/Input";

const PageHeader = ({
  pageTitle,
  isSearch = false,
  TabValue,
  searchOnChange,
  leftSideActions,
  rightSideActions,
  totalCount,
  searchCustomer = false,
}) => {
  const options = [
    { name: "Docket No", code: "docket_no" },
    { name: "Customer No ", code: "customer_number" },
    { name: "Customer Branch", code: "customer_branch" },
    { name: "KYC number", code: "kyc_number" },
    { name: "Reference Number", code: "reference_number" },
    { name: "PAN", code: "pan" },
    { name: "AADHAAR", code: "aadhar" },
    { name: "First Name", code: "first_name" },
    { name: "Middle Name", code: "middle_name" },
    { name: "Last Name", code: "last_name" },
    // { name: "Mobile Code", code: "mobile_code" },
    { name: "Mobile Number", code: "mobile" },
    // { name: "Details", code: "details" },
  ]

  const [first, setfirst] = useState('')
  return (
    <>
      <div className="
      px-3 py-2 flex justify-between items-center bg-[var(--primarya)]">
        <div className='flex items-center text-xl mr-4 font-medium'>
          {`${pageTitle} ${totalCount && totalCount !== 0 ? `(${totalCount})` : ""
            }`}
        </div>

        {searchCustomer && <div className="grid grid-cols-[55%_45%] min-w-72 max-w-80 "
        >
          <Input
            name="search"
            placeholder="Search by"
            searchoption={true}
            type="select"
            value={searchCustomer?.values?.name}
            options={options ?? []}
            onChange={(val => {
              searchCustomer?.onChange(val)
            })}
            className="rounded-none rounded-s-lg py-2 active:border active:border-primary dark:active:outline-none"
            tabIndex={0}
            errorOptional={false}
          />

          <form onSubmit={searchCustomer?.onSubmitSearch} className=""
            tabIndex={1}
          >
            <Input
              placeholder="search text ..."
              className="mt-0 capitalize rounded-s-none"
              type="text"
              errorOptional={false}
              value={searchCustomer?.values?.value}
              disabled={!searchCustomer?.values?.name}
              variant="outline"
              onChange={(val) => searchCustomer?.onSearch(val)}
              endAdornment={<SearchIcon className="h-4 w-4 shrink-0 opacity-50" />}
            />

          </form>
        </div>
        }
        {isSearch && (
          <div className=" grid justify-center">
            <Input
              id="input-with-icon-textfield"
              startAdornment={<SearchIcon />}
              errorOptional={false}
              title="search by "
              className="m-0"
              placeholder="Search by..."
              variant="outlined"
              value={first}
              onChange={(e) => {
                searchOnChange(e)
                setfirst(e)
              }}
            />
          </div>
        )}
      </div>
      <div className='flex justify-between px-5 pt-2.5 w-full '>
        <div className={` flex justify-end  gap-x-4  font-medium flex-wrap  `} >
          {rightSideActions?.map((action, index) => {
            return <div key={action?.title} className={`flex items-end  text-nowrap justify-end uppercase pb-2 text-sm px-4   ${TabValue === index ? 'border-b-2 border-primary text-primary' : 'cursor-pointer'} `} {...action} >{action?.title}</div>;
          })}
        </div>
        <div className='px-2 pt-2.5 flex justify-end gap-2 flex-wrap'>
          {leftSideActions?.map((action) => {
            return (
              <div className={`flex items-center`}>
                {action?.type === 'custom' ? action.component() : action.type === 'select' ? <>
                  <ButtonDropdown
                    {...action}
                    variant="outlined"
                    groupTitle={action?.groupTitle}
                  />
                </> : <></>}

              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PageHeader;
