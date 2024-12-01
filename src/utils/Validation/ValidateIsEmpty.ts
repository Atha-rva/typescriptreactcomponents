const isEmpty = (obj: any) => {
  let emptyFields: string[] = [];
  for (let key in obj) {
    if (obj[key] === "") {
      emptyFields.push(key);
    }
  }
  return emptyFields;
};

export { isEmpty };
