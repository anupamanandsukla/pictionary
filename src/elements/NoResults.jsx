import React from "react";
import Button from "./Button";
export default ({ openNewCKYCForm }) => {
  return (
    <div className="flex flex-col items-center justify-center my-4">
      <div className='text-sm font-medium'>
        KYC Not Registered
      </div>
      <div className='mt-3 mb-4'>
        Do you want to create a new user
      </div>
      <Button onClick={openNewCKYCForm}>
        <div className='text-sm font-medium'>
          Register New CKYC
        </div>
      </Button>
    </div>
  );
};
