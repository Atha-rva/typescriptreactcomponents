import { mobileRegex } from "./regexs";
import isSQLInjection from "./sqlInjectionCheck";

const validateMobileNumber = (mobileNumber: string): boolean => {
  if (isSQLInjection(mobileNumber)) {
    return false;
  }
  return mobileRegex.test(mobileNumber);
};
export { validateMobileNumber };
