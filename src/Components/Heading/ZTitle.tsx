import * as React from "react";
import { LargeTitle, mergeClasses } from "@fluentui/react-components";
import { headingTextProps } from "./Props";
import { useStyles } from "./ZHeadingStyle";
import { Lato } from "../../assets/desginPattern/font/fontFamily/golbalFontFamily";

const ZTitle = React.forwardRef<HTMLSpanElement, headingTextProps>(
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
          styles.title,
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

export { ZTitle };
