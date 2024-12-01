import { SplitButtonProps } from "@fluentui/react-components";

export type ButtonWithIconProps = SplitButtonProps &
  VisibilityProps & {
    ClassName?: string;
    data: { name: string; infoOption: string[] }[];
    menuPositioning?:
      | "above"
      | "above-start"
      | "above-end"
      | "below"
      | "below-start"
      | "below-end"
      | "before"
      | "before-top"
      | "before-bottom"
      | "after"
      | "after-top"
      | "after-bottom";
  };
