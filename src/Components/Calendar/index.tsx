import * as React from "react";
import { Field, mergeClasses } from "@fluentui/react-components";
import { DatePicker } from "@fluentui/react-datepicker-compat";
import { useStyles } from "./CalendarStyle";
import { fieldProps } from "./Props";

const onFormatDate = (date?: Date): string => {
  return !date
    ? ""
    : date.getDate() +
        "/" +
        (date.getMonth() + 1) +
        "/" +
        (date.getFullYear() % 100);
};

export const ZCalender: React.FC<fieldProps> = (props) => {
  const {
    labelName,
    labelStyle,
    positioning,
    placeholder,
    inputStyle,
    isVisible = true,
    disabled = false,
    ...rest
  } = props;
  const styles = useStyles();

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

  // const handleDateChange = (date?: Date | null) => {
  //   setValue(date);
  //   if (props.onChange) {
  //     props.onChange(date); // Call the onChange prop
  //   }
  // };

  return (
    <Field
      label={labelName}
      className={mergeClasses(
        styles.labelName,
        labelStyle,
        !isVisible && styles.invisible,
        disabled && styles.disabled
      )}
    >
      <DatePicker
        ref={datePickerRef}
        allowTextInput
        value={value}
        // onSelectDate={handleDateChange}
        onSelectDate={setValue as (date?: Date | null) => void}
        formatDate={onFormatDate}
        parseDateFromString={onParseDateFromString}
        placeholder={placeholder}
        className={mergeClasses(styles.inputStyle, inputStyle)}
        // inlinePopup={false}
        positioning={positioning}
        isMonthPickerVisible={false}
      />
    </Field>
  );
};

// import * as React from "react";
// import {
//   Field,
//   makeStyles,
//   mergeClasses,
//   PositioningProps,
// } from "@fluentui/react-components";
// import { DatePicker } from "@fluentui/react-datepicker-compat";
// import { useStyles } from "./ZCalendarStyle";
// import type { DatePickerProps } from "@fluentui/react-datepicker-compat";

// type FieldProps = Partial<DatePickerProps> & {
//   labelName: string;
//   placeholder: string;
//   positioning: PositioningProps;
//   inputStyle?: string;
//   labelStyle?: string;
//   onChange?: (date: Date | null | undefined) => void; // Add onChange prop
// };

// const onFormatDate = (date?: Date): string => {
//   return !date
//     ? ""
//     : date.getDate() +
//         "/" +
//         (date.getMonth() + 1) +
//         "/" +
//         (date.getFullYear() % 100);
// };

// export const ZCalender = React.forwardRef<HTMLDivElement, FieldProps>(
//   (props, ref) => {
//     const styles = useStyles();

//     const [value, setValue] = React.useState<Date | null | undefined | any>(
//       null
//     );
//     const datePickerRef = React.useRef<HTMLInputElement>(null);

//     const onParseDateFromString = React.useCallback(
//       (newValue: string): Date => {
//         const previousValue = value || new Date();
//         const newValueParts = (newValue || "").trim().split("/");
//         const day =
//           newValueParts.length > 0
//             ? Math.max(1, Math.min(31, parseInt(newValueParts[0], 10)))
//             : previousValue.getDate();
//         const month =
//           newValueParts.length > 1
//             ? Math.max(1, Math.min(12, parseInt(newValueParts[1], 10))) - 1
//             : previousValue.getMonth();
//         let year =
//           newValueParts.length > 2
//             ? parseInt(newValueParts[2], 10)
//             : previousValue.getFullYear();
//         if (year < 100) {
//           year +=
//             previousValue.getFullYear() - (previousValue.getFullYear() % 100);
//         }
//         return new Date(year, month, day);
//       },
//       [value]
//     );

//     const handleDateChange = (date?: Date | null | undefined) => {
//       setValue(date);
//       if (props.onChange) {
//         props.onChange(date); // Call the onChange prop
//       }
//     };

//     return (
//       <div className={styles.root}>
//         <Field
//           label={props.labelName}
//           className={mergeClasses(styles.labelName, props.labelStyle)}
//         >
//           <DatePicker
//             ref={datePickerRef}
//             allowTextInput
//             value={value}
//             onSelectDate={handleDateChange}
//             formatDate={onFormatDate}
//             parseDateFromString={onParseDateFromString}
//             placeholder={props.placeholder}
//             className={mergeClasses(styles.inputStyle, props.inputStyle)}
//             inlinePopup={false}
//             positioning={props.positioning}
//             isMonthPickerVisible={false}
//           />
//         </Field>
//       </div>
//     );
//   }
// );

// import * as React from "react";
// import {
//   Field,
//   makeStyles,
//   mergeClasses,
//   PositioningProps,
// } from "@fluentui/react-components";
// import { DatePicker } from "@fluentui/react-datepicker-compat";
// import { useStyles } from "./ZCalendarStyle";
// import type { DatePickerProps } from "@fluentui/react-datepicker-compat";

// type FieldProps = Partial<DatePickerProps> & {
//   labelName: string;
//   placeholder: string;
//   positioning: PositioningProps;
//   inputStyle?: string;
//   labelStyle?: string;
//   onChange?: (date: Date | null | undefined) => void;
// };

// const onFormatDate = (date?: Date): string => {
//   return !date
//     ? ""
//     : date.getDate() +
//         "/" +
//         (date.getMonth() + 1) +
//         "/" +
//         (date.getFullYear() % 100);
// };

// export const ZCalender = React.forwardRef<HTMLDivElement, FieldProps>(
//   (props, ref) => {
//     const styles = useStyles();
//     const { ...rest } = props;
//     const [value, setValue] = React.useState<any>(null);
//     const datePickerRef = React.useRef<HTMLInputElement>(null);

//     const onParseDateFromString = React.useCallback(
//       (newValue: string): Date => {
//         const previousValue = value || new Date();
//         const newValueParts = (newValue || "").trim().split("/");
//         const day =
//           newValueParts.length > 0
//             ? Math.max(1, Math.min(31, parseInt(newValueParts[0], 10)))
//             : previousValue.getDate();
//         const month =
//           newValueParts.length > 1
//             ? Math.max(1, Math.min(12, parseInt(newValueParts[1], 10))) - 1
//             : previousValue.getMonth();
//         let year =
//           newValueParts.length > 2
//             ? parseInt(newValueParts[2], 10)
//             : previousValue.getFullYear();
//         if (year < 100) {
//           year +=
//             previousValue.getFullYear() - (previousValue.getFullYear() % 100);
//         }
//         return new Date(year, month, day);
//       },
//       [value]
//     );

//     const handleDateChange = (date?: any) => {
//       setValue(date);
//       if (props.onChange) {
//         props.onChange(date); // Call the onChange prop
//       }
//     };

//     return (
//       <div className={styles.root}>
//         <Field
//           label={props.labelName}
//           className={mergeClasses(styles.labelName, props.labelStyle)}
//         >
//           <DatePicker
//             ref={datePickerRef}
//             allowTextInput
//             value={props.value}
//             onSelectDate={handleDateChange}
//             formatDate={onFormatDate}
//             parseDateFromString={onParseDateFromString}
//             className={mergeClasses(styles.inputStyle, props.inputStyle)}
//             inlinePopup={false}
//             isMonthPickerVisible={false}
//             {...rest}
//           />
//         </Field>
//       </div>
//     );
//   }
// );
