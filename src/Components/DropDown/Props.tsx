import { DropdownProps } from "@fluentui/react-components";

export interface DropdownComponentInfo {
  key: string | undefined;
  info: {
    value: string[];
    validState: "none" | "valid" | "invalid";
  };
}

export type dropdowntype = Partial<DropdownProps> &
  VisibilityProps & {
    options: string[];
    label?: string;
    validState?: "none" | "valid" | "invalid";
    required?: boolean;
    handleChange?: (componentInfo: DropdownComponentInfo) => void;
    onSelectOption?: (options: string[]) => void;
    selectedOptions?: string[];
    isAutoSave?: boolean;
    autoSaveMethod?: (key: string, value: string[]) => void;
    removeErrorMessage?: boolean;
    errorMessage?: string;
    onBlur?: (compInfo: DropdownComponentInfo) => void;
  };
