import { PositioningProps } from "@fluentui/react-components";

type fieldProps = VisibilityProps & {
  labelName?: string;
  placeholder?: string;
  positioning?: PositioningProps;
  inputStyle?: string;
  labelStyle?: string;
  onChange?: (date: Date | null | undefined) => void; // Add onChange prop
};

export type { fieldProps };
