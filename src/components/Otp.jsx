import React, { ChangeEvent, KeyboardEvent, RefObject } from 'react';
import SubTitle from '../elements/Title';
import labels from '../constant/labels';


const OTP = (props) => {
  const { timer, otp, handleOTPChange, handleKeyDown, inputRefs, resendClick } = props;

  return (
    <>
      <div>
        <div className="w-full max-w-sm mb-6">
          <label className="block">
            <span className="block text-xs font-normal text-slate-700 -mb-4 mt-3">
              {labels?.OTP}
            </span>
          </label>
          <div id="otp" className="flex mt-5 text-2xl justify-between gap-1">
            {otp.map((digit, index) => (
              <input
                key={index}
                className="border h-12 w-14 text-center form-control rounded-xl"
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleOTPChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                ref={(ref) => {
                  if (ref) {
                    inputRefs.current[index] = ref;
                  }
                }}
                required
              />
            ))}
          </div>
          <div className="flex justify-between align-middle w-full mt-2">
            <SubTitle className={`${timer > 0 ? "cursor-not-allowed" : "cursor-pointer"} ${timer === 0 ? 'text-red-600 underline' : 'text-[#999999]'}`} onClick={resendClick}>{labels.RESEND}</SubTitle>
            <SubTitle
              className={`${timer > 10 ? 'text-green-700 font-semibold' : timer > 0 ? ' text-red-700 font-semibold' : ''
                }`}
            >
              00:{timer.toString().padStart(2, '0')}
            </SubTitle>
          </div>
        </div>
      </div>
    </>
  );
};

export default OTP;