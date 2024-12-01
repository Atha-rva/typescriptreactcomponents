import { leiRegex } from "./regexs";
import isSQLInjection from "./sqlInjectionCheck";

const leiFomatValidation = (lei: string): boolean => {
  if (isSQLInjection(lei)) {
    return false;
  }
  return leiRegex.test(lei);
};

const leiDatabase = (lei: string): boolean => {
  return false;
};

const leiGovernment = (lei: string): boolean => {
  return true;
};

const validateLei = (lei: string): number => {
  if (leiFomatValidation(lei)) {
    if (leiDatabase(lei)) {
      return 1;
    } else {
      if (leiGovernment(lei)) {
        return 3;
      } else {
        return 2;
      }
    }
  } else {
    return 0;
  }
};
export { leiFomatValidation, validateLei };
