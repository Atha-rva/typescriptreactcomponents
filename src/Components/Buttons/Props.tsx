// import { ButtonProps } from "@fluentui/react-components";

// type zButtonProps = ButtonProps & {
//   className?: string;
//   onClick?: () => void;
// };

// export { zButtonProps };
import { ButtonProps } from "@fluentui/react-components";

export type zButtonProps = ButtonProps &
  VisibilityProps & {
    variant?:
      | "primary"
      | "secondary"
      | "colorHold"
      | "transparent"
      | "default"
      | "linearGradiant"
      | "borderColor"
      | "eyeButton"
      | "secondaryBorder";
    className?: string;
    onClick?: () => void;
    iconType?: "eye";
  };
