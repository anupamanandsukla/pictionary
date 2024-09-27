const Apis ={
  'ADDCUSTOMER': 'AddCustomer_Evf',
  'GETVCIP': 'GetVcipLinkDetails',
  'CRETAESLOT': 'CreateSlot',
  'OCR': 'PanOCR',
  'VERIFYPAN': 'VerifyPANNumber',
  'SAVEPANDATA':'SavePanData',
  'DIGILOCKER': 'DigiLockerRequest',
  'DIGILOCKERSTATUS': 'FetchDigiLockerTxnStatus',
  'FINALSUBMIT': 'FinalSubmit',
  'LIVECHECK':'CheckImageLiveness',
  "FACEMATCH":'FaceMatch',
  "SENDOTP": 'SendOTP_EMPV',
  "VERIFYOTP":'VerifyOTP_EMPV'
}
const ApiNames = Object.freeze(Apis);

export default ApiNames;
