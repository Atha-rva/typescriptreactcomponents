import { cinRegex } from "./regexs";
import isSQLInjection from "./sqlInjectionCheck";

const cinFomatValidation = (cin: string): boolean => {
  if (isSQLInjection(cin)) {
    return false;
  }
  return cinRegex.test(cin);
};

const cinDatabase = (cin: string): boolean => {
  return false;
};

const cinGovernment = (cin: string): boolean => {
  return true;
};

const validateCin = (cin: string): number => {
  if (cinFomatValidation(cin)) {
    if (cinDatabase(cin)) {
      return 1;
    } else {
      if (cinGovernment(cin)) {
        return 3;
      } else {
        return 2;
      }
    }
  } else {
    return 0;
  }
};
export { cinFomatValidation, validateCin };
