import { alphaNumericRegex } from "./regexs";
import isSQLInjection from "./sqlInjectionCheck";

const validateAlphaNumeric = (alphaNumeric: string): boolean => {
  // Allow alphaNumeric only

  if (isSQLInjection(alphaNumeric)) {
    return false;
  }
  return alphaNumericRegex.test(alphaNumeric);
};
export { validateAlphaNumeric };
