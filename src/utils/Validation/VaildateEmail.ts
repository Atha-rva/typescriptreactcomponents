import { emailRegex } from "./regexs";
import isSQLInjection from "./sqlInjectionCheck";

const emailDB: string[] = [
  "abc@gmail.com",
  "chetu@zitics.com",
  "zyx@yahoo.in",
  "yamini1@user.com",
];

const databaseEmail = (email: string): boolean => {
  const checkDatabase = emailDB.includes(email);
  return checkDatabase;
};

const validateEmail = (email: string): number => {
  if (isSQLInjection(email)) {
    return 0;
  }

  let result = emailRegex.test(email);
  if (result) {
    // if (databaseEmail(email)) {
    //   return "Email matched";
    // } else {
    //   return "Email not matched";
    // }
    return 2;
  } else {
    return 0;
  }
};

export { validateEmail };
