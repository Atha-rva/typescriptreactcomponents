import { websiteRegex } from "./regexs";
import isSQLInjection from "./sqlInjectionCheck";

const validateWebsite = (website: string): boolean => {
  if (isSQLInjection(website)) {
    return false;
  }
  return websiteRegex.test(website);
};
export { validateWebsite };
