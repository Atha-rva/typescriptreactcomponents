const isSQLInjection = (data: string): boolean => {
  const forbiddenPatterns =
    /(SELECT|INSERT|UPDATE|DELETE|DROP|UNION|EXEC|OR|AND|--|;|\/\*)/i;

  if (forbiddenPatterns.test(data)) {
    return true;
  }
  return false;
};

export default isSQLInjection;
