import * as React from "react";
import { ProgressBar } from "@fluentui/react-components";
import { ZProgressBarProps } from "./Props";
import { useStyles } from "./ZProgressBarStyle";

export const ZProgressBar = React.forwardRef<
  HTMLTableElement,
  ZProgressBarProps
>((props, ref) => {
  const { progress = 0, showProgress = false } = props;
  const styles = useStyles();

  const percentageProgress = Math.round(progress * 100);
  const tooltipRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (tooltipRef.current) {
      tooltipRef.current.textContent = `${percentageProgress}%`;
    }
  }, [percentageProgress]);

  return (
    <div className={styles.progressContainer}>
      {showProgress && (
        <div
          ref={tooltipRef}
          className={styles.tooltip}
          style={{
            left: `${percentageProgress}%`,
            transform: "translateX(-50%)",
            visibility:
              percentageProgress > 0 && percentageProgress < 100
                ? "visible"
                : "hidden",
          }}
        >
          <div className={styles.tooltipText}>{percentageProgress}%</div>
        </div>
      )}

      <ProgressBar
        className={styles.completeProgress}
        shape="square"
        value={progress}
        ref={ref}
        {...props}
      />
    </div>
  );
});
