import * as React from "react";
import { Button, Divider } from "@fluentui/react-components";

import { addDividerProps } from "./Props";
import { useStyles } from "./ZDividerAddStyle";

export const ZDividerAdd: React.FC<addDividerProps> = ({
  onAddClick,
  text,
  ...props
}) => {
  const styles = useStyles();

  return (
    <div className={styles.dividerAddContainer}>
      <Divider appearance="strong" className={styles.divider} {...props}>
        <Button
          className={styles.innerBtn}
          appearance="transparent"
          onClick={() => {
            onAddClick && onAddClick();
          }}
        >
          {text}
        </Button>
      </Divider>
    </div>
  );
};

export default ZDividerAdd;
