import * as React from "react";
import { Calendar } from "@fluentui/react-calendar-compat";
import { Field, Input } from "@fluentui/react-components";
import { mergeClasses } from "@griffel/react";
import { dateProps } from "./Props";
import { useStyles } from "./CalendarOverlad";
import { colorSchema } from "../../assets/desginPattern/colors/colorsSchema";
import  CalendarIcon  from "../../assets/Images/CalendarIcon.svg";
import { Autosave } from "react-autosave";

export const CalendarOverlaidMonth: React.FC<dateProps> = (props) => {
  const {
    getDate,
    position = "bottom",
    isVisible = true,
    disabled = false,
    isCurrentDate = false,
    isDateOfBirth = false,
    isFinancialYear,
    required,
    label,
    isAutoSave,
    selectedValue,
    autoSaveMethod,
    handleChange,
    validState,
    onBlur,
    removeErrorMessage = false,
    id,
  } = props;

  const styles = useStyles();

  const calculateMinDate = (): Date => {
    if (isFinancialYear !== undefined) {
      const currentYear = new Date().getFullYear();
      const financialYearStart = new Date(
        currentYear + isFinancialYear - 1,
        3,
        1
      );
      return financialYearStart;
    }
    return new Date(1700, 0, 1);
  };
  const calculateMaxDate = (): Date => {
    if (isFinancialYear !== undefined) {
      const currentYear = new Date().getFullYear();
      const financialYearEnd = new Date(currentYear + isFinancialYear, 8, 30);
      return financialYearEnd;
    }
    return isDateOfBirth
      ? new Date(new Date().setFullYear(new Date().getFullYear() - 18))
      : isCurrentDate
      ? new Date()
      : new Date(2100, 11, 31);
  };

  const minDate = calculateMinDate();
  const maxDate = calculateMaxDate();

  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(
    undefined
  );
  const [isCalendarVisible, setIsCalendarVisible] =
    React.useState<boolean>(false);
  const [inputValue, setInputValue] = React.useState<string>("");
  const [validStateCalendar, setValidStateCalendar] = React.useState<
    "none" | "valid" | "invalid"
  >(validState || "none");
  const calendarRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const formatDate = (date: Date): string => {
    return new Intl.DateTimeFormat("en-GB").format(date);
  };

  const parseDate = (value: string): Date | null => {
    const [day, month, year] = value.split("/").map(Number);
    if (!day || !month || !year) return null;

    const isLeapYear = (year: number): boolean => {
      return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    };

    if (month === 2 && day === 29 && !isLeapYear(year)) {
      return null;
    }

    const parsedDate = new Date(year, month - 1, day);
    return parsedDate instanceof Date && !isNaN(parsedDate.getTime())
      ? parsedDate
      : null;
  };

  const onSelectDate = React.useCallback(
    (date: Date, _: any): void => {
      const formattedDate = formatDate(date);
      setSelectedDate(date);
      setInputValue(formattedDate);
      setIsCalendarVisible(false);
      setValidStateCalendar("valid");
      if (getDate) {
        getDate(formattedDate);
      }
    },
    [getDate]
  );

  // const isDateWithinRange = (date: Date): boolean => {
  //   return date >= minDate && date <= maxDate;
  // };

  const toggleCalendarVisibility = () => {
    setIsCalendarVisible(!isCalendarVisible);
  };

  const closeCalendar = () => {
    setIsCalendarVisible(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      calendarRef.current &&
      !calendarRef.current.contains(event.target as Node) &&
      inputRef.current &&
      !inputRef.current.contains(event.target as Node)
    ) {
      closeCalendar();
    }
  };

  const handleChangeData = (date: Date) => {
    const newState: "none" | "valid" | "invalid" =
      date.toDateString().length > 0 ? "valid" : "invalid";

    setValidStateCalendar(newState);

    if (handleChange)
      handleChange({
        key: id,
        info: {
          value: date ? formatDate(date) : "",
          validState: newState,
        },
      });
  };

  React.useEffect(() => {
    if (validState) setValidStateCalendar(validState);
  }, [validState]);

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    let value = event.target.value.replace(/[^0-9]/g, "");

    if (value.length > 8) return;

    if (value.length > 2) {
      value = value.slice(0, 2) + "/" + value.slice(2);
    }
    if (value.length > 5) {
      value = value.slice(0, 5) + "/" + value.slice(5);
    }

    const [dayStr, monthStr] = value.split("/");

    if (dayStr && dayStr.length > 1) {
      let digitOne = dayStr.charAt(0).toString();
      let digitTwo: number = Number(dayStr.charAt(1).toString());

      if (
        (digitOne === "0" && (digitTwo < 1 || digitTwo > 9)) ||
        Number(dayStr) < 1 ||
        Number(dayStr) > 31
      ) {
        setInputValue("");
        setSelectedDate(undefined);
        return;
      }
    }

    if (monthStr && monthStr.length > 1) {
      let digitOne = monthStr.charAt(0).toString();
      let digitTwo: number = Number(monthStr.charAt(1).toString());
      if (
        (digitOne === "0" && (digitTwo < 1 || digitTwo > 9)) ||
        Number(monthStr) < 1 ||
        Number(monthStr) > 12
      ) {
        setInputValue("");
        setSelectedDate(undefined);
        return;
      }
    }

    setInputValue(value);

    if (value.length === 10) {
      const parsedDate = parseDate(value);
      if (parsedDate ) {
        handleChangeData(parsedDate);
        setSelectedDate(parsedDate);
        if (getDate) {
          getDate(formatDate(parsedDate));
        }
      } else {
        setInputValue("");
        setSelectedDate(undefined);
      }
    }
    closeCalendar();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setIsCalendarVisible((prevState) => !prevState);
      if (inputValue.length === 10) {
        const [day, month, year] = inputValue.split("/").map(Number);
        if (day >= 1 && day <= 31 && month >= 1 && month <= 12) {
          const parsedDate = parseDate(inputValue);
          if (parsedDate ) {
            setSelectedDate(parsedDate);
            if (getDate) {
              getDate(formatDate(parsedDate));
            }
          } else {
            setInputValue("");
            setSelectedDate(undefined);
          }
        } else {
          setInputValue("");
          setSelectedDate(undefined);
        }
      }
    }
  };
  const handleInputClick = () => {
    if (isDateOfBirth) {
      setSelectedDate(maxDate);
    } else if (isFinancialYear !== undefined && isFinancialYear < 0) {
      const currentYear = new Date().getFullYear();
      const financialYearStart = new Date(currentYear + isFinancialYear, 0, 1);
      setSelectedDate(financialYearStart);
    }
    toggleCalendarVisibility();
  };

  const handleBlur = () => {
    if (selectedDate) {
      setValidStateCalendar("valid");
    } else {
      setValidStateCalendar("invalid");
    }

    const validState: "none" | "valid" | "invalid" = selectedDate
      ? "valid"
      : "invalid";
    const date = formatDate(selectedDate!);

    const compInfo = {
      key: id,
      info: {
        value: date,
        validState: validState,
      },
    };

    // Note: onblur method is used to get key and value for the component
    if (onBlur) {
      onBlur(compInfo);
    }
  };

  // React.useEffect(() => {
  //   if (selectedValue) {
  //     const parsedDate = parseDate(selectedValue);
  //     if (parsedDate && isDateWithinRange(parsedDate)) {
  //       setSelectedDate(parsedDate);
  //       setInputValue(formatDate(parsedDate));
  //       setValidStateCalendar("valid");
  //     } else {
  //       setValidStateCalendar("invalid");
  //     }
  //   } else {
  //     setSelectedDate(undefined);
  //     setInputValue("");
  //     setValidStateCalendar("none");
  //   }
  // }, [selectedValue]);

  const getPositionStyle = () => {
    switch (position) {
      case "top-left":
        return { bottom: "100%", right: "2.8%" };
      case "top":
        return { bottom: "100%", left: "1.5%" };
      case "bottom":
        return { top: "100%", left: "0" };
      case "left":
        return { top: "0", right: "100%" };
      case "right":
        return { top: "0", left: "100%" };
      default:
        return { top: "100%", left: "0" };
    }
  };

  return (
    <div
      className={mergeClasses(
        !isVisible && styles.invisible,
        disabled && styles.disabled
      )}
      style={{ position: "relative" }}
      ref={calendarRef}
      onBlur={handleBlur}
    >
      {props.label && (
        <Field
          className={styles.label}
          label={required ? label + "*" : label}
        />
      )}
      <Input
        ref={inputRef}
        maxLength={10}
        className={mergeClasses(styles.inputStyle, props.className)}
        placeholder={props.placeholder}
        value={inputValue}
        onClick={handleInputClick}
        onBlur={handleBlur}
        style={{
          ...(required && {
            border:
              validStateCalendar === "none"
                ? ""
                : validStateCalendar === "valid"
                ? `1px solid ${colorSchema.types.primary3}`
                : `1px solid ${colorSchema.errorsAndStatus.error}`,
          }),
        }}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        contentAfter={
          <img
            src={CalendarIcon}
            alt="Calendar Icon"
            onClick={toggleCalendarVisibility}
            style={{ cursor: "pointer" }}
          />
        }
      />
      {isCalendarVisible && (
        <div
          style={getPositionStyle()}
          className={styles.calendarWrapper}
          ref={calendarRef}
        >
          <Calendar
            showMonthPickerAsOverlay
            isDayPickerVisible
            highlightSelectedMonth
            showGoToToday={true}
            onSelectDate={(date: Date, selectedDateRangeArray?: Date[]) => {
              onSelectDate(date, selectedDateRangeArray);
              handleChangeData(date);
            }}
            value={selectedDate}
            className={styles.calendar}
            minDate={minDate}
            maxDate={maxDate}
          />
        </div>
      )}
      <Autosave
        data={selectedDate}
        onSave={(data: any) => {
          validStateCalendar === "valid" &&
            isAutoSave &&
            autoSaveMethod &&
            autoSaveMethod(id || "", data);
        }}
      />
      {!removeErrorMessage &&
        (validStateCalendar === "invalid" && required ? (
          <div className={styles.errorMessage}>Field cannot be empty</div>
        ) : (
          <div style={{ visibility: "hidden" }}>Empty</div>
        ))}
    </div>
  );
};
