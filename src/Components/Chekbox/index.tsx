import * as React from "react";
import {
  Checkbox,
  CheckboxOnChangeData,
  Field,
  mergeClasses,
} from "@fluentui/react-components";
import { ZCheckboxProps } from "./Props";
import { useStyles, useStaticStyles } from "./CheckboxStyle";

const ZCheckbox: React.FC<ZCheckboxProps> = ({
  label = "",
  checkboxlabel = undefined,
  className = "",
  style = {},
  isVisible = true,
  disabled = false,
  handleChange,
  id,
  onBlur,
  ...props
}) => {
  const styles = useStyles();
  useStaticStyles();

  const onCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    data: CheckboxOnChangeData
  ) => {
    const newState: "valid" | "invalid" | "none" = data.checked
      ? "valid"
      : "invalid";

    if (handleChange) {
      const checkboxInfo = {
        key: id,
        info: {
          value: data.checked ? true : false,
          validState: newState,
        },
      };
      handleChange(checkboxInfo);
    }
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (onBlur) {
      const newState: "valid" | "invalid" | "none" = event.target.checked
        ? "valid"
        : "invalid";
      const checkboxInfo = {
        key: id,
        info: {
          value: event.target.checked,
          validState: newState,
        },
      };
      onBlur(checkboxInfo);
    }
  };

  return (
    <Field
      className={mergeClasses(
        styles.label,
        !isVisible && styles.invisible,
        disabled && styles.disabled
      )}
    >
      <label style={{ marginLeft: "8px" }}>{label}</label>
      <div className={styles.checkboxContainer}>
        <Checkbox
          id={id}
          indicator={{ className: styles.checkIndicator }}
          className={mergeClasses(styles.labelCheckbox, className)}
          size="large"
          label={checkboxlabel}
          style={style}
          disabled={disabled}
          onChange={onCheckboxChange}
          onBlur={handleBlur}
          {...props}
        />
      </div>
    </Field>
  );
};

export { ZCheckbox };
