import React, { useEffect, useRef, useState } from "react";
import { useStyles } from "./DropdownStyle";
import { colorSchema } from "../../assets/desginPattern/colors/colorsSchema";
import { Autosave } from "react-autosave";

import {
  Divider,
  Dropdown,
  Field,
  Option,
  mergeClasses,
} from "@fluentui/react-components";
import { CaretDownFilled, CaretUpFilled } from "@fluentui/react-icons";
import { dropdowntype } from "./Props";
import { Lato } from "../../assets/desginPattern/font/fontFamily/golbalFontFamily";

export const ZDropdown = React.forwardRef<HTMLButtonElement, dropdowntype>(
  (props, ref) => {
    Lato();
    const {
      id,
      validState,
      options = [],
      required,
      className,
      multiselect,
      placeholder,
      isAutoSave,
      autoSaveMethod,
      onSelectOption,
      selectedOptions = [],
      isVisible = true,
      disabled = false,
      label,
      handleChange,
      removeErrorMessage = false,
      errorMessage,
      onBlur,
      ...rest
    } = props;

    const [dropdownValidState, setDropdownValidState] = useState<
      "none" | "valid" | "invalid"
    >(validState || "none");

    const [crossAxis] = React.useState(0);
    const [mainAxis] = React.useState(5);

    const styles = useStyles();

    const [isOpen, setIsOpen] = useState(false);
    const [currentSelectedOptions, setCurrentSelectedOptions] =
      useState<string[]>(selectedOptions);
    const [dropdownOptions, setDropdownOptions] = useState<string[]>(options);

    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleOpenChange = (ev: any, data: { open?: boolean }) => {
      setIsOpen(data.open!);
    };

    const handleOnWheel = (e: React.WheelEvent) => {
      const target = e.target as HTMLElement;
      target.blur();
    };

    const handleSelectOption = (event: any, optionValue?: string) => {
      if (!optionValue) return;
      let newSelectedOptions;
      if (multiselect) {
        if (currentSelectedOptions.includes(optionValue)) {
          newSelectedOptions = currentSelectedOptions.filter(
            (option) => option !== optionValue
          );
        } else {
          newSelectedOptions = [...currentSelectedOptions, optionValue];
        }
      } else {
        newSelectedOptions = [optionValue];
      }
      setCurrentSelectedOptions(newSelectedOptions);
      if (onSelectOption) {
        onSelectOption(newSelectedOptions);
      }
      if (newSelectedOptions.length <= 0) {
        setDropdownValidState("invalid");
      } else if (newSelectedOptions.length > 0) {
        setDropdownValidState("valid");
      }
    };

    const handleBlur = () => {
      const newState: "valid" | "invalid" | "none" =
        currentSelectedOptions.length > 0 ? "valid" : "invalid";
      if (currentSelectedOptions.length > 0) {
        setDropdownValidState("valid");
      } else {
        setDropdownValidState("invalid");
      }

      const compInfo = {
        key: id,
        info: {
          value: currentSelectedOptions,
          validState: newState,
        },
      };

      // Note: onblur method is used to get key and value for the component
      if (onBlur) {
        onBlur(compInfo);
      }
    };

    const renderButtonContent = () => {
      const hasSelectedOptions = currentSelectedOptions.length > 0;

      if (multiselect) {
        return hasSelectedOptions ? (
          <div className={styles.selectedOption}>
            {currentSelectedOptions.map((option) => (
              <div className={styles.optionLabel} key={option}>
                {option}
                <div
                  className={styles.crossButton}
                  onClick={(e) => {
                    e.stopPropagation();
                    const updatedOptions = currentSelectedOptions.filter(
                      (item) => item !== option
                    );
                    setCurrentSelectedOptions(updatedOptions);
                    handleChangeData(updatedOptions);
                    if (onSelectOption) {
                      onSelectOption(updatedOptions);
                    }
                  }}
                >
                  X
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>{placeholder}</div>
        );
      } else {
        return hasSelectedOptions ? (
          <div style={{ color: "#242424" }}>{currentSelectedOptions[0]}</div>
        ) : (
          <div>{placeholder}</div>
        );
      }
    };

    useEffect(() => {
      if (validState) setDropdownValidState(validState);
    }, [validState]);

    useEffect(() => {
      if (options.length > 0) setDropdownOptions(options);
    }, [options]);

    useEffect(() => {
      if (selectedOptions.length > 0) {
        setCurrentSelectedOptions(selectedOptions);
      } else {
        setCurrentSelectedOptions([]);
      }
    }, [selectedOptions]);

    const handleChangeData = (data: any) => {
      const newState: "none" | "valid" | "invalid" =
        data.length > 0 ? "valid" : "invalid";
      if (handleChange) {
        handleChange({
          key: id,
          info: {
            value: data,
            validState: newState,
          },
        });
      }
    };

    useEffect(() => {
      if (typeof window !== "undefined") {
        const handleScroll = (event: Event) => {
          if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target as Node)
          ) {
            setIsOpen(false);
          }
        };

        if (isOpen) {
          window.addEventListener("scroll", handleScroll, { passive: true });
        }

        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }
    }, [isOpen]);

    return (
      <Field
        className={mergeClasses(
          styles.label,
          !isVisible && styles.invisible,
          disabled && styles.disabled
        )}
        label={required ? label + "*" : label}
        ref={dropdownRef}
      >
        <Dropdown
          open={isOpen}
          onBlur={handleBlur}
          onOpenChange={handleOpenChange}
          onWheel={handleOnWheel}
          listbox={{
            className: mergeClasses(
              styles.listboxContainer,
              dropdownOptions.length > 4 ? styles.listbox : ""
            ),
            style: {
              ...(required && {
                border:
                  dropdownValidState === "none"
                    ? ""
                    : dropdownValidState === "valid"
                    ? `1px solid ${colorSchema.types.primary3}`
                    : `1px solid ${colorSchema.errorsAndStatus.error}`,
              }),
            },
          }}
          className={mergeClasses(styles.dropdown, className)}
          style={{
            ...(required && {
              border:
                dropdownValidState === "none"
                  ? ""
                  : dropdownValidState === "valid"
                  ? `1px solid ${colorSchema.types.primary3}`
                  : `1px solid ${colorSchema.errorsAndStatus.error}`,
            }),
          }}
          expandIcon={
            isOpen ? (
              <CaretUpFilled color="black" />
            ) : (
              <CaretDownFilled color="black" />
            )
          }
          aria-labelledby={"dropdown"}
          placeholder={placeholder}
          multiselect={multiselect || false}
          onOptionSelect={(event, data) => {
            handleChangeData(data.selectedOptions);
            handleSelectOption(event, data.optionValue);
          }}
          selectedOptions={currentSelectedOptions}
          button={renderButtonContent()}
          ref={ref}
          {...rest}
          positioning={{ position: "below", offset: { crossAxis, mainAxis } }}
        >
          <div className={mergeClasses(styles.border)}>
            {dropdownOptions.map((option, index) => (
              <React.Fragment key={index}>
                <Option
                  {...(multiselect && {
                    checkIcon: {
                      className: mergeClasses(
                        styles.option,
                        currentSelectedOptions.includes(option)
                          ? styles.checked
                          : ""
                      ),
                    },
                  })}
                  className={mergeClasses(styles.option)}
                  value={option}
                >
                  {option}
                </Option>
                {index < dropdownOptions.length - 1 && (
                  <Divider className={styles.sidemargin} />
                )}
              </React.Fragment>
            ))}
          </div>
          <Autosave
            data={currentSelectedOptions}
            onSave={(data: string[]) => {
              dropdownValidState === "valid" &&
                isAutoSave &&
                autoSaveMethod &&
                autoSaveMethod(id || "", data);
            }}
          />
        </Dropdown>
        {!removeErrorMessage &&
          (dropdownValidState === "invalid" ? (
            <div className={styles.errorMessage}>
              {errorMessage || "Field cannot be empty"}
            </div>
          ) : (
            <div style={{ visibility: "hidden" }}>Empty</div>
          ))}
      </Field>
    );
  }
);
