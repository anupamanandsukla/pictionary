import statecountry from '../constant/statecountry.json'
import moment from 'moment';
import * as yup from 'yup'
const emojiRegex = /[\u{1F600}-\u{1F6FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F1E0}-\u{1F1FF}\u{1F191}-\u{1F251}\u{1F004}\u{1F0CF}\u{1F170}-\u{1F251}\u{1F600}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{1F1E6}-\u{1F1FF}\u{1F600}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F300}-\u{1F5FF}\u{1F900}-\u{1F9FF}\u{1F600}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F1E0}-\u{1F1FF}\u{1F600}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{231A}\u{1F300}-\u{1F5FF}\u{1F1E6}-\u{1F1FF}\u{1F600}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{1F1E0}-\u{1F1FF}\u{1F600}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{1F1E6}-\u{1F1FF}\u{1F600}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{1F1E0}-\u{1F1FF}\u{2705}]/gu;

export function dropdownStateCountry() {
  return statecountry.map(country => {
    const updatedCountry = { ...country, value: country.label };
    updatedCountry.states = updatedCountry.states.map(state => ({
      ...state,
      value: state.label
    }));
    return updatedCountry;
  });
}

export function getstates() {
  for (let i in statecountry)
    return statecountry[i].states.map(i => i.label)
}


const isEighteenToSixtyFive = (date) => {
  const dob = moment(date, 'DD-MM-YYYY');
  const today = moment();
  const age = today.diff(dob, 'year');
  return age >= 18 && age <= 65;
};


export const infoformSchema = yup.object().shape({
  fullname: yup
    .string()
    .matches(/^[A-Za-z\s]+$/, 'Name must consist of only alphabetic characters')
    .min(3, 'Name should be at least 3 characters')
    .max(100, 'Name should not exceed 100 characters')
    .required('Name is required'),
  mobile: yup
    .string()
    .matches(/^[0-9]+$/, 'Phone number should contain only digits')
    .test('startsWithSixToNine', 'Phone number should start with [6-9]', (value) => {
      if (value) {
        const firstDigit = value.charAt(0);
        return /^[6-9]/.test(firstDigit);
      }
      return false;
    })
    .test('isLengthTen', 'Phone number should be 10 digits', (value) => {
      if (value) {
        return value.length === 10;
      }
      return false;
    })
    .required('Phone number is required'),
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email address is required'),
  // gender: yup
  //   .string()
  //   .oneOf(['M', 'F'], 'Gender should be either Male or Female '),
  //   // .required('Please select a gender'),
  // dob: yup
  //   .string()
  //   .matches(
  //     /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-(19\d{2}|20(?:[01]\d|20))$/,
  //     'Date of birth should be in format dd-mm-yyyy'
  //   )
  //   .test('age', 'Age should be between 18 and 65', (value) => {
  //     return isEighteenToSixtyFive(value);
  //   }),
  // .required('Date of birth is required'),
  address1: yup
    .string()
    .test('ismin', 'Address must be a minimum of 3 characters', (value) => {
      if (!value) return true
      return value.length > 2;
    })
    .test('no-emojis', 'Street cannot contain emojis', function (value) {
      return !emojiRegex.test(value);
    }).nullable(),
  address2: yup
    .string()
    .optional()
    .test('ismin', 'Address must be a minimum of 3 characters', (value) => {
      if (!value) return true
      return value.length > 2;
    })
    .test('no-emojis', 'Street cannot contain emojis', function (value) {
      return !emojiRegex.test(value);
    })
  ,
  state: yup
    .string()
    .when(["address1"], ([address1], schema) => {
      if (address1)
        return yup.string().required("Please select a state")
      return yup.string('').nullable()
    }),
  country: yup.string().required('Country is required').matches(/^India$/, 'Country must be India'),
  ref3: yup.string().matches(/^\d{12}$/, 'UAN must be a 12-digit number').required('UAN is required'),
});

export const paneditformSchema = yup.object().shape({
  edtname: yup
    .string()
    .matches(/^[A-Za-z\s]+$/, 'Name must consist of only alphabetic characters')
    .min(3, 'Name should be at least 3 characters')
    .max(100, 'Name should not exceed 100 characters')
    .required('Name is required'),
  edtfname: yup
    .string()
    .matches(/^[A-Za-z\s]+$/, 'Name must consist of only alphabetic characters')
    .min(3, 'Name should have at least 3 characters')
    .max(100, 'Name should not exceed 100 characters')
    .required('Name is required'),
  edtpannumber: yup
    .string()
    .matches(/^[A-Z]{5}[0-9]{4}[A-Z]$/, 'Invalid PAN Card format')
    .required('PAN Card is required'),
  edtdob: yup
    .string()
    .matches(
      /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-(19\d{2}|20(?:[01]\d|20))$/,
      'Date of birth should be in format dd-mm-yyyy'
    )
    .test('age', 'Age should be between 18 and 65', (value) => {
      return isEighteenToSixtyFive(value);
    })
    .required('Date of birth is required'),
});

export const checkFieldValidity = async (schema, fieldName, value) => {
  try {
    await schema.validateAt(fieldName, { [fieldName]: value });
    return { state: false, errormessage: '' }; // Return null when the field is valid
  } catch (error) {
    return { state: true, errormessage: error.message };
  }
};

export const checkFormValidity = async (schema, data) => {
  return await schema.validate(data, { abortEarly: false }).catch((err) => {
    return err.inner.reduce((acc, error) => {
      return {
        ...acc,
        [error.path]: {
          state: true,
          errormessage: error.message
        },
      }
    }, {})
  })
};