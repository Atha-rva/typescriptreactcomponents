import { pincodeRegex } from "./regexs";
import isSQLInjection from "./sqlInjectionCheck";

const validatePincode = (pincode: string): boolean => {
  if (isSQLInjection(pincode)) {
    return false;
  }
  return pincodeRegex.test(pincode);
};
export { validatePincode };
