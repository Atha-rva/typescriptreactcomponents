import { CheckboxProps } from "@fluentui/react-components";

export interface CheckboxInfo {
  key: string | undefined;
  info: {
    value: boolean;
    validState: "none" | "valid" | "invalid";
  };
}

export type ZCheckboxProps = CheckboxProps &
  VisibilityProps & {
    label?: string;
    checkboxlabel?: string;
    className?: string;
    style?: React.CSSProperties;
    handleChange?: (componentInfo: CheckboxInfo) => void;
    onBlur?: (compInfo: CheckboxInfo) => void;
  };
