/*** Validates a file to ensure it matches the allowed file types.**
 * @param file - The file to be validated.*
 * @param allowedTypes - An optional array of allowed file types. Defaults to ["image/jpeg", "image/png", "application/pdf"].*
 * @returns An object with a `valid` boolean and an optional `error` string if the file is invalid.
 * */

export const validateFileType = (
  file: File,
  allowedTypes = [
    "image/jpeg",
    "image/png",
    "application/pdf",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  ]
) => {
  if (!file) {
    return { valid: false, error: "No file provided" };
  }
  if (!allowedTypes.includes(file.type)) {
    return {
      valid: false,
      error: `Invalid file type. Allowed types: DOCX, XLSX, PPTX, PDF, JPEG, JPG, PNG.`,
    };
  }
  return { valid: true };
};
