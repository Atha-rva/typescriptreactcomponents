import * as React from "react";
import { Field, mergeClasses } from "@fluentui/react-components";
import { DatePicker } from "@fluentui/react-datepicker-compat";
import { useStyles } from "./DatePicker";
import { datePickerProp } from "./Props";

const onFormatDate = (date?: Date): string => {
  return !date
    ? ""
    : date.getDate() +
        "/" +
        (date.getMonth() + 1) +
        "/" +
        (date.getFullYear() % 100);
};

export const ZDatePicker = React.forwardRef<HTMLInputElement, datePickerProp>(
  (props, ref) => {
    const styles = useStyles();

    const {
      label,
      placeholder,
      fieldStyle,
      positioning,
      inputStyle,
      isVisible = true,
      disabled = false,
    } = props;
    const [value, setValue] = React.useState<Date | null | undefined>(null);
    const datePickerRef = React.useRef<HTMLInputElement>(null);

    const onParseDateFromString = React.useCallback(
      (newValue: string): Date => {
        const previousValue = value || new Date();
        const newValueParts = (newValue || "").trim().split("/");
        const day =
          newValueParts.length > 0
            ? Math.max(1, Math.min(31, parseInt(newValueParts[0], 10)))
            : previousValue.getDate();
        const month =
          newValueParts.length > 1
            ? Math.max(1, Math.min(12, parseInt(newValueParts[1], 10))) - 1
            : previousValue.getMonth();
        let year =
          newValueParts.length > 2
            ? parseInt(newValueParts[2], 10)
            : previousValue.getFullYear();
        if (year < 100) {
          year +=
            previousValue.getFullYear() - (previousValue.getFullYear() % 100);
        }
        return new Date(year, month, day);
      },
      [value]
    );

    return (
      <div
        className={mergeClasses(
          styles.root,
          !isVisible && styles.invisible,
          disabled && styles.disabled
        )}
      >
        <Field
          label={label}
          className={mergeClasses(styles.zlabel, props.fieldStyle)}
        >
          <DatePicker
            ref={datePickerRef}
            allowTextInput
            value={value}
            onSelectDate={setValue as (date?: Date | null) => void}
            formatDate={onFormatDate}
            parseDateFromString={onParseDateFromString}
            placeholder={props.placeholder}
            positioning={props.positioning}
            className={mergeClasses(styles.inputStyle, props.inputStyle)}
          />
        </Field>
      </div>
    );
  }
);
