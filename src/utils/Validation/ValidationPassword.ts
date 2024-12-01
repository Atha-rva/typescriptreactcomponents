const validatePassword = (password: string): string | true => {
  // Check length (should be 4 to 8 characters)
  if (password.length < 8 || password.length > 16) {
    return "Password length should be between 8 and 16 characters";
    // const checkLength = true;
    // return checkLength;
  }

  // Check for at least one capital letter
  const capitalLetterRegex = /[A-Z]/;
  if (!capitalLetterRegex.test(password)) {
    return "Password should contain at least one capital letter";
  }

  // Check for at least one capital letter
  const lowerLetterRegex = /[a-z]/;
  if (!lowerLetterRegex.test(password)) {
    return "Password should contain at least one lower case";
  }

  // Check for at least one special character
  const specialCharacterRegex = /[!@#$%^&*(),.?":{}|<>]/;
  if (!specialCharacterRegex.test(password)) {
    return "Password should contain at least one special character";
  }

  // Check for at least one numeric digit
  const numericRegex = /\d/;
  if (!numericRegex.test(password)) {
    return "Password should contain at least one numeric digit";
  }

  // Password meets all criteria
  return true;
};

export { validatePassword };
