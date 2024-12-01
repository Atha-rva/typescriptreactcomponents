import * as React from "react";
import {
  Label,
  Menu,
  MenuItem,
  MenuList,
  MenuPopover,
  MenuTrigger,
  mergeClasses,
  Radio,
  RadioGroup,
  SplitButton,
} from "@fluentui/react-components";
import { InfoRegular } from "@fluentui/react-icons";
import type { MenuButtonProps } from "@fluentui/react-components";
import { useStyles } from "./ZButtonwithRadioStyle";
import { Lato } from "../../assets/desginPattern/font/fontFamily/golbalFontFamily";
import { ButtonWithIconProps } from "./props";

export const ZButtonWithRadio = React.forwardRef<
  HTMLButtonElement,
  ButtonWithIconProps
>(
  (
    {
      data = [],
      ClassName,
      menuPositioning,
      isVisible = true,
      disabled = false,
      ...props
    },
    ref
  ) => {
    const [click, setClick] = React.useState(false);
    const handleClick = () => {
      setClick(!click);
    };

    Lato();
    const styles = useStyles();

    return (
      <RadioGroup
        className={mergeClasses(
          styles.radioGroop,
          !isVisible && styles.invisible,
          disabled && styles.disabled
        )}
      >
        {data.map((item, key) => (
          <Menu key={key} positioning={menuPositioning || "above-end"}>
            <MenuTrigger disableButtonEnhancement>
              {(triggerProps: MenuButtonProps) => (
                <SplitButton
                  className={mergeClasses(styles.splitButton, ClassName)}
                  appearance="transparent"
                  menuButton={triggerProps}
                  ref={ref}
                  onClick={handleClick}
                  menuIcon={
                    <InfoRegular
                      className={styles.infoButton}
                      primaryFill="white"
                    />
                  }
                  {...props}
                >
                  <Radio
                    className={styles.radio}
                    value={item.name}
                    label={
                      <Label className={mergeClasses(styles.radio)}>
                        {item.name}
                      </Label>
                    }
                  />
                  {/* &nbsp;&nbsp; */}
                </SplitButton>
              )}
            </MenuTrigger>

            <MenuPopover>
              <MenuList>
                {item.infoOption.map((option, index) => (
                  <MenuItem key={index}>{option}</MenuItem>
                ))}
              </MenuList>
            </MenuPopover>
          </Menu>
        ))}
      </RadioGroup>
    );
  }
);
