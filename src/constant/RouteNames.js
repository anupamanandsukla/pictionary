const Routes = {
  HOME: '',
  WELCOME: 'welcome',
  FILLDETAILS: 'fill_details',
  PAN: 'pan',
  PANPHOTO: 'pan_capture',
  PANCROP: 'pan_crop',

  PANPDF: 'epan',
  PANOTP: 'pan_otp',
  PANDETAILS: 'pan_details',
  PANPREVIEW: 'pan_preview',
  AADHARDETAILS: 'aadhar_details',
  AADHARPREVIEW: 'aadhar_preview',
  STATUS: 'status',

  SELFIE: 'selfie',
  SELFIEPHOTO: 'selfie_capture',
  SELFIEPREVIEW: 'selfie_preview',
}

// type RouteNames = keyof typeof Routes;

const RouteNames = Object.freeze(Routes)

export default RouteNames
