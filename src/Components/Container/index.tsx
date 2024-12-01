import React from "react";
import { useStyles } from "./containerstyle";
import { containerProps } from "./Props";
import { Lato } from "../../assets/desginPattern/font/fontFamily/golbalFontFamily";
export const ZContainer = React.forwardRef<HTMLDivElement, containerProps>(
  ({ ...props }, ref) => {
    const styles = useStyles();
    const { className, children, ...rest } = props;
    Lato();
    return (
      <div
        className={`${styles.customContainer} ${className}`}
        ref={ref}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

export const ZContainerFluid = React.forwardRef<HTMLDivElement, containerProps>(
  ({ ...props }, ref) => {
    const styles = useStyles();
    const { className, children, ...rest } = props;
    return (
      <div
        className={`${styles.customContainerFluid} ${className}`}
        ref={ref}
        {...rest}
      >
        {children}
      </div>
    );
  }
);
