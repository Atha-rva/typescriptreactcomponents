import { Button, mergeClasses, shorthands } from "@fluentui/react-components";
import { useStyles } from "./ZButtonsStyle";
import { forwardRef, useState } from "react";
import { colorSchema } from "../../assets/desginPattern/colors/colorsSchema";
import { zButtonProps } from "./Props";
import { Lato } from "../../assets/desginPattern/font/fontFamily/golbalFontFamily";
import  showPassword from "../../assets/Images/showPassword.svg";
const ZPrimaryButton = forwardRef<HTMLButtonElement, zButtonProps>(
  ({ ...props }, ref) => {
    const styles = useStyles();
    Lato();
    const { className, isVisible = true, disabled = false, ...rest } = props;

    return (
      <Button
        className={mergeClasses(
          styles.primary,
          className,
          "r1alrhcs",
          !isVisible && styles.invisible,
          disabled && styles.disabled
        )}
        disabled={disabled}
        {...rest}
        ref={ref}
      />
    );
  }
);

const ZSecondaryButton = forwardRef<HTMLButtonElement, zButtonProps>(
  ({ ...props }, ref) => {
    const styles = useStyles();
    const { className, isVisible = true, disabled = false, ...rest } = props;

    return (
      <Button
        className={mergeClasses(
          styles.secondary,
          className,
          "r1alrhcs",
          !isVisible && styles.invisible,
          disabled && styles.disabled
        )}
        disabled={disabled}
        {...rest}
        ref={ref}
      />
    );
  }
);

const ZborderButton = forwardRef<HTMLButtonElement, zButtonProps>(
  ({ ...props }, ref) => {
    const styles = useStyles();
    const { className, isVisible = true, disabled = false, ...rest } = props;

    return (
      <Button
        className={mergeClasses(
          styles.borderButton,
          className,
          "r1alrhcs",
          !isVisible && styles.invisible,
          disabled && styles.disabled
        )}
        disabled={disabled}
        {...rest}
        ref={ref}
      />
    );
  }
);

const ZDefaultButton = forwardRef<HTMLButtonElement, zButtonProps>(
  ({ ...props }, ref) => {
    const styles = useStyles();
    const {
      appearance,
      className,
      isVisible = true,
      disabled = false,
      iconType,
      ...rest
    } = props;

    const getIcon = () => {
      if (iconType)
        switch (iconType) {
          case "eye":
            return showPassword;
          default:
            return "";
        }
    };

    return (
      <Button
        className={
          appearance === "outline"
            ? mergeClasses(
                styles.defaultAppearence,
                !isVisible && styles.invisible,
                disabled && styles.disabled
              )
            : mergeClasses(
                styles.default,
                className,
                !isVisible && styles.invisible,
                disabled && styles.disabled
              )
        }
        icon={
          getIcon() && (
            <img className={styles.icon} src={getIcon()} alt="icon" />
          )
        }
        disabled={disabled}
        {...rest}
        ref={ref}
      />
    );
  }
);

const ZTransperantButton = forwardRef<HTMLButtonElement, zButtonProps>(
  ({ ...props }, ref) => {
    const styles = useStyles();

    const { className, isVisible = true, disabled = false, ...rest } = props;

    return (
      <Button
        appearance="transparent"
        className={mergeClasses(
          styles.transparentButton,
          className,
          "r1alrhcs",
          !isVisible && styles.invisible,
          disabled && styles.disabled
        )}
        disabled={disabled}
        {...rest}
        ref={ref}
      />
    );
  }
);

const ZcolorHoldButton = forwardRef<HTMLButtonElement, zButtonProps>(
  ({ ...props }, ref) => {
    const styles = useStyles();
    const {
      className,
      onClick,
      isVisible = true,
      disabled = false,
      ...rest
    } = props;
    const [buttonStyle, setButtonStyle] = useState({});

    const setStyle = () => {
      setButtonStyle({
        color: colorSchema.grays.defaultBackground,
        background: `linear-gradient(96deg, ${colorSchema.gradient.teaserModeLeft} , ${colorSchema.gradient.teaserModeRight} )`,
      });
      if (onClick) {
        onClick();
      }
    };

    return (
      <Button
        disabled={disabled}
        ref={ref}
        style={
          disabled
            ? {
                pointerEvents: "none",
              }
            : { ...buttonStyle }
        }
        className={mergeClasses(
          styles.colorHold,
          className,
          !isVisible && styles.invisible,
          disabled && styles.disabled
        )}
        {...rest}
        onClick={setStyle}
      />
    );
  }
);

const ZColorButton = forwardRef<HTMLButtonElement, zButtonProps>(
  ({ ...props }, ref) => {
    const styles = useStyles();
    const {
      className,
      onClick,
      isVisible = true,
      disabled = false,
      ...rest
    } = props;
    const [buttonStyle, setButtonStyle] = useState({});

    const setStyle = () => {
      setButtonStyle({
        backgroundImage: colorSchema.backgroundGradientSecondaryButton,
        color: colorSchema.colorButton,
      });
      if (onClick) {
        onClick();
      }
    };

    return (
      <Button
        disabled={disabled}
        ref={ref}
        style={
          disabled
            ? {
                pointerEvents: "none",
              }
            : { ...buttonStyle }
        }
        className={mergeClasses(
          styles.linearColor,
          className,
          !isVisible && styles.invisible,
          disabled && styles.disabled
        )}
        {...rest}
        onClick={setStyle}
      />
    );
  }
);

const ZBorderColorButton = forwardRef<HTMLButtonElement, zButtonProps>(
  ({ ...props }, ref) => {
    const styles = useStyles();
    const {
      className,
      onClick,
      isVisible = true,
      disabled = false,
      ...rest
    } = props;
    // const [buttonStyle, setButtonStyle] = useState({});

    // const setStyle = () => {
    //   setButtonStyle({
    //     color: colorSchema.buttonHoldBackgroundColor,
    //     backgroundColor: "none",
    //     ...shorthands.border(
    //       "1px",
    //       "solid",
    //       colorSchema.buttonHoldBackgroundColor
    //     ),
    //   });
    //   if (onClick) {
    //     onClick();
    //   }
    // };

    return (
      <Button
        disabled={disabled}
        ref={ref}
        className={mergeClasses(
          styles.borderColor,
          className,
          !isVisible && styles.invisible,
          disabled && styles.disabled
        )}
        {...rest}
        // onClick={setStyle}
      />
    );
  }
);

const ZButton = forwardRef<HTMLButtonElement, zButtonProps>(
  ({ variant = "default", ...props }, ref) => {
    switch (variant) {
      case "primary":
        return <ZPrimaryButton {...props} ref={ref} />;
      case "transparent":
        return <ZTransperantButton {...props} ref={ref} />;
      case "secondary":
        return <ZSecondaryButton {...props} ref={ref} />;
      case "secondaryBorder":
        return <ZborderButton {...props} ref={ref} />;
      case "colorHold":
        return <ZcolorHoldButton {...props} ref={ref} />;
      case "linearGradiant":
        return <ZColorButton {...props} ref={ref} />;
      case "borderColor":
        return <ZBorderColorButton {...props} ref={ref} />;
      case "default":
      default:
        return <ZDefaultButton {...props} ref={ref} />;
    }
  }
);

export { ZButton };
