import { panRegex } from "./regexs";
import isSQLInjection from "./sqlInjectionCheck";

const panFomatValidation = (pan: string): boolean => {
  if (isSQLInjection(pan)) {
    return false;
  }

  // if (!panRegex.test(pan)) {
  //   return "PAN format is not valid. It should consist of 5 uppercase letters followed by 4 digits and then 1 uppercase letter.";
  // }

  return panRegex.test(pan);
};

const panDatabase = (pan: string): boolean => {
  return false;
};

const panGovernment = (pan: string): boolean => {
  return true;
};

const validatePan = (pan: string): number => {
  if (panFomatValidation(pan)) {
    if (panDatabase(pan)) {
      return 1;
    } else {
      if (panGovernment(pan)) {
        return 3;
      } else {
        return 2;
      }
    }
  } else {
    return 0;
  }
};
export { panFomatValidation, validatePan };
