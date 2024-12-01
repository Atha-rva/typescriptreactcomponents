import { gstinRegex } from "./regexs";
import isSQLInjection from "./sqlInjectionCheck";

const gstinFomatValidation = (gstin: string): boolean => {
  if (isSQLInjection(gstin)) {
    return false;
  }

  // if (!panRegex.test(pan)) {
  //   return "PAN format is not valid. It should consist of 5 uppercase letters followed by 4 digits and then 1 uppercase letter.";
  // }

  return gstinRegex.test(gstin);
};

const gstinDatabase = (pan: string): boolean => {
  return false;
};

const gstinGovernment = (pan: string): boolean => {
  return true;
};

const validateGstin = (pan: string): number => {
  if (gstinFomatValidation(pan)) {
    if (gstinDatabase(pan)) {
      return 1;
    } else {
      if (gstinGovernment(pan)) {
        return 3;
      } else {
        return 2;
      }
    }
  } else {
    return 0;
  }
};
export { gstinFomatValidation, validateGstin };
