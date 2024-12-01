import React, { useState, useEffect } from "react";
import { useStyles } from "./FileUploaderStyle";
import { Button, mergeClasses, Text } from "@fluentui/react-components";
import { ZPTag } from "../Heading";
import { ZProgressBar } from "../ZProgressBar/index";
import { fileUploaderType } from "./props";
import { validateFileType } from "../../utils/Validation/fileValidator";
import  activeIcon  from "../../assets/Images/active.svg";
import documentIcon from "../../assets/Images/documentIcon.svg";
import invalid from "../../assets/Images/invalidImage.svg";

export const ZFileUploader = React.forwardRef<HTMLDivElement, fileUploaderType>(
  (props, ref) => {
    const {
      onDrop,
      onDragOver,
      onDragEnter,
      onDragLeave,
      allowMultipleFiles = false,
      allowTypes,
      errorMessage = "File not uploaded",
      progress = 0,
      isSuccess = undefined,
      successMessage = "Upload successful",
      subTitle = "Present proposal",
      title,
      onCancelClick,
    } = props;

    const styles = useStyles();
    const [fileDropped, setFileDropped] = useState(false);
    const [dragOver, setDragOver] = useState(false);
    const [file, setFile] = useState<File | FileList | null>(null);
    const [errorMessageFile, setErrorMessageFile] = useState<string>("");
    const [progressFile, setProgressFile] = useState(0);
    const [remainingTime, setRemainingTime] = useState<string>("0");
    const progressIntervalRef = React.useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
      if (isSuccess === true) {
        // Complete the progress to 100% when upload is successful
        setProgressFile(1);
        clearInterval(progressIntervalRef.current!);
        setRemainingTime("0 sec");
      } else if (isSuccess === false) {
        // Display error message and stop progress if upload failed
        clearInterval(progressIntervalRef.current!);
        setRemainingTime("0 sec");
      }
    }, [isSuccess]);

    // Function to map MIME type to a more readable format
    const getFileType = (mimeType: string): string => {
      switch (mimeType) {
        case "application/pdf":
          return "pdf";
        case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        case "application/msword":
          return "docx";
        case "application/vnd.ms-excel":
        case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
          return "xlsx";
        case "application/vnd.ms-powerpoint":
        case "application/vnd.openxmlformats-officedocument.presentationml.presentation":
          return "pptx";
        case "image/jpeg":
          return "jpeg";
        case "image/png":
          return "png";
        case "image/svg+xml":
          return "svg";
        default:
          return mimeType.split("/")[1].toUpperCase();
      }
    };

    // Function to format file size in KB or MB
    const getFormattedSize = (size: number): string => {
      if (size < 1024) {
        return size + " B";
      } else if (size < 1024 * 1024) {
        return (size / 1024).toFixed(2) + " KB";
      } else {
        return (size / (1024 * 1024)).toFixed(2) + " MB";
      }
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      event.stopPropagation();
      setErrorMessageFile("");
      setDragOver(false);

      const files = event.dataTransfer.files;

      if (files && files.length > 0) {
        for (let i = 0; i < files.length; i++) {
          const file = files[i];
          const validateFile = validateFileType(file, allowTypes ?? undefined);
          if (!validateFile.valid) {
            setErrorMessageFile(validateFile.error!);
            return;
          }
        }

        if (onDrop) {
          let copyFiles: File | FileList = files;
          if (!allowMultipleFiles) {
            copyFiles = files[0];
          }
          onDrop(copyFiles);
        }
        setFile(files[0]);
        setFileDropped(true);
        setDragOver(false);
        startProgress();
      }
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      event.stopPropagation();
      if (onDragOver) {
        onDragOver(event);
      }
    };

    const handleDragEnter = (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      event.stopPropagation();
      if (onDragEnter) {
        onDragEnter(event);
      }
      setDragOver(true);
    };

    const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      event.stopPropagation();
      if (onDragLeave) {
        onDragLeave(event);
      }
      setDragOver(false);
    };

    const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFile = event.target.files?.[0];
      if (selectedFile) {
        const validateFile = validateFileType(
          selectedFile,
          allowTypes ?? undefined
        );
        if (!validateFile.valid) {
          setErrorMessageFile(validateFile.error!);
          return;
        }
        if (onDrop) {
          onDrop(selectedFile);
        }
        setFile(selectedFile);
        setFileDropped(true);
        startProgress();
      }
    };

    const fileInputRef = React.useRef<HTMLInputElement>(null);

    const handleButtonClick = () => {
      if (fileInputRef.current) {
        fileInputRef.current.click();
      }
    };

    const handleClose = () => {
      setFile(null);
      setFileDropped(false);
      setProgressFile(0);
      clearInterval(progressIntervalRef.current!);
      onCancelClick?.();
    };

    // Function to start the progress simulation
    const startProgress = () => {
      let currentProgress = 0;
      let startTime = Date.now();
      progressIntervalRef.current = setInterval(() => {
        if (currentProgress < 0.85 || isSuccess === true) {
          // Only progress past 85% if isSuccess is true
          currentProgress += 0.02;
          setProgressFile(Math.min(currentProgress, 1)); // Limit to 1 (100%)

          // Calculate remaining time
          const elapsedTime = (Date.now() - startTime) / 1000;
          const estimatedTotalTime = elapsedTime / currentProgress;
          const timeLeft = Math.max(0, estimatedTotalTime - elapsedTime);
          setRemainingTime(
            timeLeft >= 60
              ? `${Math.floor(timeLeft / 60)} min ${Math.floor(
                  timeLeft % 60
                )} sec`
              : `${timeLeft.toFixed(0)} sec`
          );
        } else {
          clearInterval(progressIntervalRef.current!); // Pause at 85% if isSuccess is undefined
        }
      }, 100);
    };

    return (
      <>
        {!fileDropped ? (
          <>
            <div
              className={mergeClasses(
                styles.dropZone,
                dragOver ? styles.dragOver : ""
              )}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragEnter={handleDragEnter}
              onDragLeave={handleDragLeave}
            >
              <Text className={styles.text}>Drop file here</Text>
              <Text className={styles.textOr}>or</Text>
              <Button
                className={styles.selectButton}
                appearance="outline"
                onClick={handleButtonClick}
              >
                Select file
              </Button>
              <ZPTag className={styles.fileFormatText}>
                (Formats: JPEG, Doc, Excel, Pdf etc)
              </ZPTag>
              <input
                ref={fileInputRef}
                type="file"
                style={{ display: "none" }}
                onChange={handleFileSelect}
              />
            </div>
            {errorMessageFile ? (
              <div className={styles.errorMessage}>{errorMessageFile}</div>
            ) : (
              <div style={{ visibility: "hidden" }}>Empty</div>
            )}
          </>
        ) : (
          <div className={styles.uploadedFileContainer}>
            <button className={styles.closeButton} onClick={handleClose}>
              &times;
            </button>

            <div className={styles.fileDetailsContainer}>
              <div className={styles.fileDetails}>
                <img src={documentIcon} alt="document" />
                <div className={styles.fileInfo}>
                  <Text className={styles.fileName}>
                    {title
                      ? title
                      : file
                      ? (file as File).name.replace(/\.[^/.]+$/, "")
                      : ""}
                  </Text>

                  <Text className={styles.subTitle}>{subTitle}</Text>
                  <div className={styles.fileMeta}>
                    <Text className={styles.fileMetaText}>
                      {file ? getFileType((file as File).type) : ""}
                    </Text>{" "}
                    <Text className={styles.fileMetaText}>
                      {file ? getFormattedSize((file as File).size) : ""}
                    </Text>{" "}
                    <Text className={styles.fileMetaText}>
                      {!(remainingTime === "0 sec") &&
                        !(progress >= 1) &&
                        `${remainingTime} left`}
                    </Text>
                  </div>
                </div>
              </div>
              {progressFile < 1 && !(progress >= 1) ? (
                <div className={styles.progressContainer}>
                  <ZProgressBar progress={progressFile} showProgress />
                </div>
              ) : isSuccess ? (
                <div className={styles.successMessage}>
                  {successMessage}
                  <img src={activeIcon} alt="uploaded" />
                </div>
              ) : (
                <div className={styles.successMessage}>
                  {errorMessage}
                  <img src={invalid} alt="not uploaded" />
                </div>
              )}
            </div>
          </div>
        )}
      </>
    );
  }
);

export default ZFileUploader;
