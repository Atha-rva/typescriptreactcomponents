export interface FileUploaderComponentInfo {
  key: string | undefined;
  info: {
    value: File | FileList;
    validState: "none" | "valid" | "invalid";
  };
}

export type fileUploaderType = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  handleChange?: (componentInfo: FileUploaderComponentInfo) => void;
  isVisible?: boolean;
  disabled?: boolean;
  removeErrorMessage?: boolean;
  errorMessage?: string;
  onBlur?: (compInfo: FileUploaderComponentInfo) => void;
  onDrop?: (files: File | FileList) => void;
  allowMultipleFiles?: boolean;
  allowTypes?: string[];
  successMessage?: string;
  progress?: number;
  isSuccess?: boolean;
  title?: string;
  subTitle?: string;
  onCancelClick?: () => void;
};
