import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  mergeClasses,
} from "@fluentui/react-components";
import { useStaticStyles, useStyles } from "./AccordionStyle";
import  dropDownArrow from "../../assets/Images/DownArrow.svg";
import steeperComplete from "../../assets/Images/SteeperComplete.svg"
import CompletionStatusIcon from "./CompletionStatusIcon";
import React, { useEffect, useState } from "react";
import { AccordionPanelType, ZAccordionProps } from "./props";
import { Lato } from "../../assets/desginPattern/font/fontFamily/golbalFontFamily";
const ZAccordion: React.FC<ZAccordionProps> = (props) => {
  Lato();
  useStaticStyles();
  const styles = useStyles();
  const {
    panels,
    className,
    style,
    accordionHeaderClassName,
    accordionItemClassName,
    accordionPanelClassName,
    accordionPanelStyle,
    accordionHeaderStyle,
    accordionItemStyle,
    isVisible = true,
    disabled = false,
    hideExpandIconKeys,
    defaultOpen,
    openAccordion,
  } = props;
  const [accordionPanels, setAccordionPanels] =
    useState<AccordionPanelType[]>(panels);
  const [openItem, setOpenItem] = useState<number>(
    defaultOpen !== undefined ? defaultOpen : -1
  );

  useEffect(() => {
    setAccordionPanels(panels);
  }, [panels]);

  useEffect(() => {
    if (openAccordion || openAccordion === 0) setOpenItem(openAccordion);
  }, [openAccordion]);

  return (
    <Accordion
      className={mergeClasses(
        styles.accordion,
        className,
        !isVisible && styles.invisible,
        disabled && styles.disabled
      )}
      style={style}
      collapsible
      openItems={openItem.toString()}
    >
      {accordionPanels.map((panel, panelIndex) => {
        const isDisabled = panel.disabled ?? false;
        return (
          <>
            <AccordionItem
              value={panelIndex.toString()}
              onClick={() => {
                if (!isDisabled) {
                  setOpenItem(panelIndex);
                }
              }}
              className={mergeClasses(
                styles.inactiveItem,
                accordionItemClassName,
                openItem === panelIndex ? styles.openItem : "",
                isDisabled ? styles.disabledItem : ""
              )}
              style={accordionItemStyle}
              aria-disabled={isDisabled}
            >
              <AccordionHeader
                className={mergeClasses(
                  styles.header,
                  accordionHeaderClassName
                )}
                style={accordionHeaderStyle}
                expandIconPosition="end"
                expandIcon={
                  hideExpandIconKeys?.includes(panelIndex + 1) ? (
                    ""
                  ) : (
                    <img src={dropDownArrow} alt="down arrow" />
                  )
                }
              >
                <ul className={mergeClasses(styles.headerUl)}>
                  <div className={mergeClasses(styles.statusAndHeading)}>
                    <li>
                      {panel.completeStatus === "100" ? (
                        <img src={steeperComplete} alt="Steeper complete" />
                      ) : panel.isActive === false ? (
                        <div className={styles.Steeper}></div>
                      ) : (
                        <div className={styles.stepperActive}></div>
                      )}
                    </li>
                    <li
                      onClick={() =>
                        panel.onAccordionClick &&
                        panel.onAccordionClick(panelIndex)
                      }
                    >
                      {panel.label}
                    </li>
                  </div>
                  <div className={mergeClasses(styles.avatarAndPercent)}>
                    <li>{panel.avatar}</li>
                    <li className={styles.statusPercent}>
                      {" "}
                      <CompletionStatusIcon>{`${panel.completeStatus}%`}</CompletionStatusIcon>
                    </li>
                  </div>
                </ul>
              </AccordionHeader>
              <AccordionPanel
                className={mergeClasses(styles.panel, accordionPanelClassName)}
                style={accordionPanelStyle}
              >
                {panel.component}
              </AccordionPanel>
            </AccordionItem>
            <br />
          </>
        );
      })}
    </Accordion>
  );
};

export { ZAccordion };
