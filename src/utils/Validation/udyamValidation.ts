import { udhyamRegex } from "./regexs";
import isSQLInjection from "./sqlInjectionCheck";

const udhyamFomatValidation = (udhyam: string): boolean => {
  if (isSQLInjection(udhyam)) {
    return false;
  }
  return udhyamRegex.test(udhyam);
};

const udyamDatabase = (udhyam: string): boolean => {
  return false;
};

const udyamGovernment = (udhyam: string): boolean => {
  return true;
};

const validateUdyam = (udyam: string): number => {
  if (udhyamFomatValidation(udyam)) {
    if (udyamDatabase(udyam)) {
      return 1;
    } else {
      if (udyamGovernment(udyam)) {
        return 3;
      } else {
        return 2;
      }
    }
  } else {
    return 0;
  }
};
export { udhyamFomatValidation, validateUdyam };
