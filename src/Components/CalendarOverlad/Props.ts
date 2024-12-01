import { CalendarProps } from "@fluentui/react-calendar-compat";
export interface ComponentInfo {
  key: string | undefined;
  info: {
    value: string | undefined;
    validState: "none" | "valid" | "invalid";
  };
}
type dateProps = CalendarProps &
  VisibilityProps & {
    label?: string;
    className?: string;
    getDate?: any;
    placeholder: string;
    position?: "top" | "bottom" | "left" | "right" | "top-left";
    handleChange?: (componentInfo: ComponentInfo) => void;
    validState?: "none" | "valid" | "invalid";
    selectedValue?: string;
    required?: boolean;
    isAutoSave?: boolean;
    isCurrentDate?: boolean;
    isDateOfBirth?: boolean;
    isFinancialYear?: number;
    autoSaveMethod?: (key: string, value: any) => void;
    onBlur?: (compInfo: ComponentInfo) => void;
    removeErrorMessage?: boolean;
  };

export type { dateProps };
