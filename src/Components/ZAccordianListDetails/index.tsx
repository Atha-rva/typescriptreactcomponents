import * as React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  mergeClasses,
} from "@fluentui/react-components";
import { useStyles, useStaticStyles } from "./ZAccordionListDetailsStyle";
import { CaretDownFilled } from "@fluentui/react-icons";
import { HeadingLevelsProps } from "./Props";
import deleteIcon from "../../assets/Images/deleteButtonIcon.svg";

export const ZAccordionListDetails: React.FC<HeadingLevelsProps> = (props) => {
  const {
    disabled = false,
    isVisible = true,
    list,
    Headertitle,
    children,
    onDelete,
    index,
    bodyClassName,
    showCount,
    removeDeleteBtn = false,
    showTitle = false,
    hideIndex = false,
    ...rest
  } = props;
  useStaticStyles();
  const styles = useStyles();
  const [expandedIndex, setExpandedIndex] = React.useState<number | null>(null);

  const toggleRotation = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div
      className={mergeClasses(
        styles.body,
        !isVisible && styles.invisible,
        disabled && styles.disabled
      )}
    >
      <Accordion collapsible {...rest}>
        {list.map((entry, entryIndex) => (
          <AccordionItem key={entryIndex} value={`${entryIndex}`}>
            <AccordionHeader
              expandIcon={""}
              as="h1"
              onClick={() => toggleRotation(entryIndex)}
            >
              <div style={{ display: "inline-block", cursor: "pointer" }}>
                <CaretDownFilled
                  className={expandedIndex === entryIndex ? styles.rotated : ""}
                />
                {Headertitle}
              </div>
              <ul className={mergeClasses(styles.listOutter)}>
                <li>
                  {!hideIndex ? (
                    <span className={mergeClasses(styles.span)}>
                      {index !== undefined
                        ? index < 10
                          ? `0${index}`
                          : `${index}`
                        : `${entryIndex + 1}`}
                    </span>
                  ) : (
                    <span style={{ width: "35px" }}></span>
                  )}
                  {entry.map((field, fieldIndex) => (
                    <ul
                      key={fieldIndex}
                      className={mergeClasses(styles.listInner)}
                      style={{
                        display:
                          expandedIndex === entryIndex && !showTitle
                            ? "none"
                            : "block",
                      }}
                    >
                      <li className={mergeClasses(styles.listKey)}>
                        {field.key}
                      </li>
                      <li className={mergeClasses(styles.listValue)}>
                        {field.value}
                      </li>
                    </ul>
                  ))}
                  {!showCount && !removeDeleteBtn && (
                    <img
                      className={styles.deleteIconStyle}
                      src={deleteIcon}
                      onClick={(e) => {
                        e.stopPropagation();
                        if (onDelete) {
                          onDelete();
                        }
                      }}
                      alt="Delete"
                    />
                  )}
                  {showCount && (
                    <div className={styles.deleteIconStyle}>{showCount}</div>
                  )}
                </li>
              </ul>
            </AccordionHeader>
            <AccordionPanel>
              <div className={mergeClasses(styles.body, bodyClassName)}>
                {entry.map((field, fieldIndex) => (
                  <div key={fieldIndex}>
                    {/* <ul className={mergeClasses(styles.listInner)}>
                      <li className={mergeClasses(styles.listKey)}>
                        {field.key}
                      </li>
                      <li className={mergeClasses(styles.listValue)}>
                        {field.value}
                      </li>
                    </ul> */}
                  </div>
                ))}
                {children}
              </div>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
