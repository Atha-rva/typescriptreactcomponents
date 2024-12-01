import * as React from "react";
import { LargeTitle, mergeClasses } from "@fluentui/react-components";
import { headingSubTextProps } from "./Props";
import { useStyles } from "./ZHeadingStyle";
import { Lato } from "../../assets/desginPattern/font/fontFamily/golbalFontFamily";

const ZSubTitle = React.forwardRef<HTMLSpanElement, headingSubTextProps>(
  ({ ...props }, ref) => {
    Lato();
    const styles = useStyles();

    const {
      className,
      children,
      isVisible = true,
      disabled = false,
      ...rest
    } = props;

    return (
      <LargeTitle
        className={mergeClasses(
          styles.SubTitle,
          className,
          !isVisible && styles.invisible,
          disabled && styles.disabled
        )}
        {...rest}
      >
        {children}
      </LargeTitle>
    );
  }
);

export { ZSubTitle };
