import { alphabetRegex } from "./regexs";
import isSQLInjection from "./sqlInjectionCheck";

const validateAlphabet = (alphabet: string): boolean => {
  // Allow alphabet only

  if (isSQLInjection(alphabet)) {
    return false;
  }
  return alphabetRegex.test(alphabet);
};
export { validateAlphabet };
