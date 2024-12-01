import { passportRegex } from "./regexs";
import isSQLInjection from "./sqlInjectionCheck";

const passportFomatValidation = (passport: string): boolean => {
  if (isSQLInjection(passport)) {
    return false;
  }
  return passportRegex.test(passport);
};

const passportDatabase = (passport: string): boolean => {
  return false;
};

const passportGovernment = (passport: string): boolean => {
  return true;
};

const validatePassport = (passport: string): number => {
  if (passportFomatValidation(passport)) {
    if (passportDatabase(passport)) {
      return 1;
    } else {
      if (passportGovernment(passport)) {
        return 3;
      } else {
        return 2;
      }
    }
  } else {
    return 0;
  }
};
export { passportFomatValidation, validatePassport };
