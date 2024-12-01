import { addressRegex } from "./regexs";
import isSQLInjection from "./sqlInjectionCheck";

const validateAddress = (address: string): boolean => {
  // Allow letters, numbers, spaces, commas, periods, hyphens, and slashes

  if (isSQLInjection(address)) {
    return false;
  }
  return addressRegex.test(address);
};
export { validateAddress };
