import { TextPresetProps, TextProps } from "@fluentui/react-components";

// Props for heading text components.
// This extends TextPresetProps and includes common properties.
type headingTextProps = Partial<TextPresetProps> & VisibilityProps;

// Props for subheading text components.
// This extends TextProps and includes common properties.
type headingSubTextProps = Partial<TextProps> & VisibilityProps;

// Props for paragraph text components.
// This extends TextProps and includes common properties.
type paragraphProps = Partial<TextProps> & VisibilityProps;

export type { headingTextProps, headingSubTextProps, paragraphProps };
