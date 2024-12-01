import { validateAddress } from "./addressValidation";
import { validateAlphabet } from "./alphabetValidation";
import { validateAlphaNumeric } from "./alphaNumericValidation";
import { validateCin } from "./cinValidation";
import { validateDpin } from "./dpinValidation";
import { validateLei } from "./leiValidation";
import { validatePassport } from "./passportValidation";
import { validatePincode } from "./pincodeValidation";
import { emailRegex, panRegex } from "./regexs";
import { validateUdyam } from "./udyamValidation";
import { validateEmail } from "./VaildateEmail";
import { validateMobileNumber } from "./VaildateMobileNo";
import { validateAadhaar } from "./ValidateAadaar";
import { validateGstin } from "./ValidateGstin";
import { validatePan } from "./ValidatePan";
import { validateWebsite } from "./websiteValidation";

interface ValidationResponse {
  message: string;
  validState: "valid" | "invalid" | "none";
}

interface Validations {
  [key: string]: (input: string | number) => ValidationResponse;
}

const inputValidations: Validations = {
  pan: (input: string | number) => {
    let validationResponse: number = validatePan(input.toString());
    switch (validationResponse) {
      case 0:
        return { message: "Invalid Format", validState: "invalid" };
      case 1:
        return { message: "Already Exit", validState: "valid" };
      case 2:
        return { message: "Invalid PAN", validState: "invalid" };
      case 3:
        return { message: "", validState: "valid" };
      default:
        return { message: "", validState: "none" };
    }
  },
  gstn: (input: string | number) => {
    let validationResponse: number = validateGstin(input.toString());
    switch (validationResponse) {
      case 0:
        return { message: "Invalid Format", validState: "invalid" };
      case 1:
        return { message: "Already Exit", validState: "valid" };
      case 2:
        return { message: "Invalid GSTIN", validState: "invalid" };
      case 3:
        return { message: "", validState: "valid" };
      default:
        return { message: "", validState: "none" };
    }
  },
  aadhaar: (input: string | number) => {
    let validationResponse: number = validateAadhaar(input.toString());
    switch (validationResponse) {
      case 0:
        return { message: "Enter numbers only", validState: "invalid" };
      case 1:
        return { message: "Already Exit", validState: "valid" };
      case 2:
        return { message: "Invalid Aadhaar", validState: "invalid" };
      case 3:
        return { message: "", validState: "valid" };
      default:
        return { message: "", validState: "none" };
    }
  },
  udyam: (input: string | number) => {
    let validationResponse: number = validateUdyam(input.toString());
    switch (validationResponse) {
      case 0:
        return { message: "Invalid Format", validState: "invalid" };
      case 1:
        return { message: "Already Exit", validState: "valid" };
      case 2:
        return { message: "Invalid Udyam", validState: "invalid" };
      case 3:
        return { message: "", validState: "valid" };
      default:
        return { message: "", validState: "none" };
    }
  },
  lei: (input: string | number) => {
    let validationResponse: number = validateLei(input.toString());
    switch (validationResponse) {
      case 0:
        return { message: "Invalid Format", validState: "invalid" };
      case 1:
        return { message: "Already Exit", validState: "valid" };
      case 2:
        return { message: "Invalid LEI", validState: "invalid" };
      case 3:
        return { message: "", validState: "valid" };
      default:
        return { message: "", validState: "none" };
    }
  },
  cin: (input: string | number) => {
    let validationResponse: number = validateCin(input.toString());
    switch (validationResponse) {
      case 0:
        return { message: "Invalid Format", validState: "invalid" };
      case 1:
        return { message: "Already Exit", validState: "valid" };
      case 2:
        return { message: "Invalid CIN", validState: "invalid" };
      case 3:
        return { message: "", validState: "valid" };
      default:
        return { message: "", validState: "none" };
    }
  },
  dpin: (input: string | number) => {
    let validationResponse: number = validateDpin(input.toString());
    switch (validationResponse) {
      case 0:
        return { message: "Invalid Format", validState: "invalid" };
      case 1:
        return { message: "Already Exit", validState: "valid" };
      case 2:
        return { message: "Invalid DPIN", validState: "invalid" };
      case 3:
        return { message: "", validState: "valid" };
      default:
        return { message: "", validState: "none" };
    }
  },
  email: (input: string | number) => {
    let validationResponse: number = validateEmail(input.toString());
    switch (validationResponse) {
      case 0:
        return { message: "Invalid email", validState: "invalid" };
      case 1:
        return { message: "Already Exit", validState: "valid" };
      case 2:
        return { message: "", validState: "valid" };
      default:
        return { message: "", validState: "none" };
    }
  },
  passport: (input: string | number) => {
    let validationResponse: number = validatePassport(input.toString());
    switch (validationResponse) {
      case 0:
        return { message: "Invalid passport", validState: "invalid" };
      case 1:
        return { message: "Already Exit", validState: "valid" };
      case 2:
        return { message: "", validState: "valid" };
      default:
        return { message: "", validState: "none" };
    }
  },
  address: (input: string | number) => {
    let validationResponse: boolean = validateAddress(input.toString());
    if (validationResponse) {
      return { message: "", validState: "valid" };
    }
    return {
      message: "Address format is not valid.",
      validState: "invalid",
    };
  },
  alphabet: (input: string | number) => {
    let validationResponse: boolean = validateAlphabet(input.toString());
    if (validationResponse) {
      return { message: "", validState: "valid" };
    }
    return {
      message: "Field can contain alphabets only.",
      validState: "invalid",
    };
  },
  pincode: (input: string | number) => {
    let validationResponse: boolean = validatePincode(input.toString());
    if (validationResponse) {
      return { message: "", validState: "valid" };
    }
    return {
      message: "Pincode format is not valid.",
      validState: "invalid",
    };
  },
  mobile: (input: string | number) => {
    let validationResponse: boolean = validateMobileNumber(input.toString());
    if (validationResponse) {
      return { message: "", validState: "valid" };
    }
    return {
      message: "Mobile number format is not valid.",
      validState: "invalid",
    };
  },
  alphaNumeric: (input: string | number) => {
    let validationResponse: boolean = validateAlphaNumeric(input.toString());
    if (validationResponse) {
      return { message: "", validState: "valid" };
    }
    return {
      message: "Field can contain alphanumeric value only.",
      validState: "invalid",
    };
  },
  website: (input: string | number) => {
    let validationResponse: boolean = validateWebsite(input.toString());
    if (validationResponse) {
      return { message: "", validState: "valid" };
    }
    return {
      message: "Webiste format is not valid.",
      validState: "invalid",
    };
  },
  username: (input: string | number) => {
    let resultEmail = emailRegex.test(input.toString());
    let resultPan = panRegex.test(input.toString());
    if (resultEmail || resultPan) {
      return { message: "", validState: "valid" };
    } else {
      return { message: "Invalid username", validState: "invalid" };
    }
  },
  default: (input: string | number) => {
    if (input.toString().length > 0) {
      return { message: "", validState: "valid" };
    } else {
      return { message: "Required", validState: "invalid" };
    }
  },
};

export { inputValidations };
export type { ValidationResponse, Validations };
