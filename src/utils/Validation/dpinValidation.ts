import { dpinRegex } from "./regexs";
import isSQLInjection from "./sqlInjectionCheck";

const dpinFomatValidation = (dpin: string): boolean => {
  if (isSQLInjection(dpin)) {
    return false;
  }
  return dpinRegex.test(dpin);
};

const dpinDatabase = (dpin: string): boolean => {
  return false;
};

const dpinGovernment = (dpin: string): boolean => {
  return true;
};

const validateDpin = (dpin: string): number => {
  if (dpinFomatValidation(dpin)) {
    if (dpinDatabase(dpin)) {
      return 1;
    } else {
      if (dpinGovernment(dpin)) {
        return 3;
      } else {
        return 2;
      }
    }
  } else {
    return 0;
  }
};
export { dpinFomatValidation, validateDpin };
