const addressRegex = /^[a-zA-Z0-9\s,.'\-\/]+$/;
const alphabetRegex = /^[A-Za-z\s]+$/;
const cinRegex = /^[UL][0-9]{5}[A-Z]{2}[0-9]{4}[A-Z]{3}[0-9]{6}$/;
const dpinRegex = /^[0-9]{8}$/;
const leiRegex = /^[0-9]{4}00[A-Z0-9]{12}[0-9]{2}$/;
const passportRegex = /^[A-Z0-9]{8,9}$/;
const pincodeRegex = /^[1-9][0-9]{5}$/;
const udhyamRegex = /^UDYAM-[A-Z]{2}-\d{2}-\d{7}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const mobileRegex = /^[6-9]\d{9}$/;
const aadhaarRegex = /^[2-9][0-9]{11}$/;
const gstinRegex =
  /^[0-9]{2}[A-Z]{3}[ABCFGHLJPT][A-Z][0-9]{4}[A-Z][0-9]Z[0-9A-Z]$/;
const panRegex = /^[A-Z]{3}[ABCFGHLJPT][A-Z][0-9]{4}[A-Z]$/;
const websiteRegex =
  /^((https?|ftp|smtp):\/\/)?([a-z0-9]+(\.[a-z0-9]+)+)(\/)?$/;
const alphaNumericRegex = /^[a-zA-Z0-9 ]*$/;

export {
  addressRegex,
  alphabetRegex,
  cinRegex,
  dpinRegex,
  leiRegex,
  passportRegex,
  pincodeRegex,
  udhyamRegex,
  emailRegex,
  mobileRegex,
  aadhaarRegex,
  gstinRegex,
  panRegex,
  websiteRegex,
  alphaNumericRegex,
};
