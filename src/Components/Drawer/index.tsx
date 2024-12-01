import * as React from "react";
import {
  DrawerBody,
  DrawerHeader,
  DrawerHeaderTitle,
  Drawer,
  Button,
  useRestoreFocusSource,
  Divider,
  mergeClasses,
} from "@fluentui/react-components";
import { useStyles } from "./DrawerStyle";
import { drawerProps } from "./Props";
import  closeIcon  from "../../assets/Images/TagError.svg";

export const ZDrawer = React.forwardRef<HTMLDivElement, drawerProps>(
  (props, ref) => {
    const {
      title,
      position,
      type,
      modalType,
      size,
      children,
      open,
      setIsOpen,
      ...rest
    } = props;
    const styles = useStyles();
    const [isOpen, setIsOpenD] = React.useState(open);

    const restoreFocusSourceAttributes = useRestoreFocusSource();

    React.useEffect(() => {
      setIsOpenD(open);
    }, [open]);

    return (
      <div className={styles.root}>
        <div>
          <Drawer
            className={mergeClasses(
              styles.drawerPosition,
              size ? "" : styles.drawer
            )}
            position={position}
            modalType={modalType}
            type={type || "inline"}
            open={isOpen}
            ref={ref}
            {...rest}
            {...restoreFocusSourceAttributes}
          >
            <DrawerHeader
              className={mergeClasses(styles.padding, styles.drawerHeader)}
            >
              <DrawerHeaderTitle
                className={styles.headerTitle}
                action={
                  <Button
                    appearance="transparent"
                    aria-label="Close"
                    icon={
                      <img
                        width={"20px"}
                        height={"20px"}
                        src={closeIcon}
                        alt="Close"
                      />
                    }
                    onClick={() => {
                      if (setIsOpen) setIsOpen(false);
                    }}
                  />
                }
              >
                {title}
              </DrawerHeaderTitle>
              <Divider className={styles.divider} />
            </DrawerHeader>
            <DrawerBody
              className={mergeClasses(styles.padding, styles.drawerBody)}
            >
              {children}
            </DrawerBody>
          </Drawer>
        </div>
      </div>
    );
  }
);
