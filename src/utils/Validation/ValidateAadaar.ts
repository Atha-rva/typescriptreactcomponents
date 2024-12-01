import { aadhaarRegex } from "./regexs";
import isSQLInjection from "./sqlInjectionCheck";

const aadhaarFomatValidation = (aadhaar: string): boolean => {
  if (isSQLInjection(aadhaar)) {
    return false;
  }

  return aadhaarRegex.test(aadhaar);
};

const aadhaarDatabase = (aadhaar: string): boolean => {
  return false;
};

const aadhaarGovernment = (aadhaar: string): boolean => {
  return true;
};

const validateAadhaar = (aadhaar: string): number => {
  if (aadhaarFomatValidation(aadhaar)) {
    if (aadhaarDatabase(aadhaar)) {
      return 1;
    } else {
      if (aadhaarGovernment(aadhaar)) {
        return 3;
      } else {
        return 2;
      }
    }
  } else {
    return 0;
  }
};
export { validateAadhaar };
