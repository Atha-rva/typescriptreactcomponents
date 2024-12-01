import React, { useState } from "react";
import { ZFileUploader } from "./index";

const FileUploderFile = () => {
  const [uploadedFile, setUploadedFile] = useState<File | FileList | null>(null);
  const [uploadSuccess, setUploadSuccess] = useState<boolean | undefined>(undefined);

//   const handleFileDrop = (file: File | FileList) => {
//     console.log("File dropped:", file);
//     setUploadedFile(file);

//     // Simulate a successful upload after a delay
//     setTimeout(() => {
//       setUploadSuccess(true); // Set to false if upload fails
//     }, 2000);
//   };

  const handleCancelUpload = () => {
    console.log("Upload canceled");
    setUploadedFile(null);
    setUploadSuccess(undefined);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>File Uploader Component</h1>
      <ZFileUploader
        // onDrop={handleFileDrop}
        allowTypes={["image/jpeg", "application/pdf", "application/msword"]} // Specify allowed file types
        allowMultipleFiles={false} // Allow only single file uploads
        errorMessage="Upload failed. Please try again."
        progress={uploadedFile ? 0.85 : 0} // Example progress
        isSuccess={uploadSuccess}
        successMessage="File uploaded successfully!"
        subTitle="Attach your document"
        onCancelClick={handleCancelUpload}
      />
    </div>
  );
};

export default FileUploderFile;
