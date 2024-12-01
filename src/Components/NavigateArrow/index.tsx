import React, { useState } from "react";
import { ChevronLeftFilled, ChevronRightFilled } from "@fluentui/react-icons";
import { useStyles } from "./NavigteArrowStyle";
import { ZNavigateArrowProps } from "./Props";
import { mergeClasses } from "@fluentui/react-components";

const ZNavigateArrow: React.FC<ZNavigateArrowProps> = ({
  iconSpacing,
  borderSize,
  iconSize,
  borderColor,
  boxWidth,
  borderRadius,
  boxHeight,
  boxColor,
  iconColor,
  onClickLeft,
  onClickRight,
  isVisible = true,
  disabled = false,
}) => {
  const styles = useStyles();
  const [leftIconSelected, setLeftIconSelected] = useState(false);
  const [rightIconSelected, setRightIconSelected] = useState(true);

  const handleLeftClick = () => {
    setLeftIconSelected(true);
    setRightIconSelected(false);
    onClickLeft && onClickLeft();
  };

  const handleRightClick = () => {
    setLeftIconSelected(false);
    setRightIconSelected(true);
    onClickRight && onClickRight();
  };

  const containerStyle = {
    width: boxWidth,
    height: boxHeight,
    borderRadius: borderRadius,
    backgroundColor: boxColor,
    border: borderSize && `${borderSize} solid ${borderColor}`,
    gap: iconSpacing,
  };

  return (
    <div
      className={mergeClasses(
        styles.container,
        !isVisible && styles.invisible,
        disabled && styles.disabled
      )}
      style={containerStyle}
    >
      <div>
        <ChevronLeftFilled
          style={{
            fontSize: iconSize,
            color: leftIconSelected ? iconColor : "grey",
          }}
          onClick={handleLeftClick}
        />
      </div>
      <div>
        <ChevronRightFilled
          style={{
            fontSize: iconSize,
            color: rightIconSelected ? iconColor : "grey",
          }}
          onClick={handleRightClick}
        />
      </div>
    </div>
  );
};

export { ZNavigateArrow };
