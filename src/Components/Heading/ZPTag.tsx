import React from "react";
import { mergeClasses, Text } from "@fluentui/react-components";
import { paragraphProps } from "./Props";
import { useStyles } from "./ZHeadingStyle";
import { Lato } from "../../assets/desginPattern/font/fontFamily/golbalFontFamily";

const ZPTag = React.forwardRef<HTMLDivElement, paragraphProps>((props, ref) => {
  Lato();
  const styles = useStyles();
  const {
    className,
    children,
    isVisible = true,
    disabled = false,
    size,
    style,
    ...rest
  } = props;

  return (
    <div
      className={mergeClasses(
        styles.SubTitle,
        className,
        !isVisible && styles.invisible,
        disabled && styles.disabled
      )}
      ref={ref}
      style={style}
    >
      <Text size={size} {...rest}>
        {children}
      </Text>
    </div>
  );
});

export { ZPTag };
