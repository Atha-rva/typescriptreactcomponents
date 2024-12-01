import React from "react";
import { ZButton } from "./index";

const ButtonFile: React.FC = () => {
  const handleClick = (variant: string) => {
    alert(`Button clicked: ${variant}`);
  };

  return (
    <div>
      <h1>ZButton Variants Example</h1>
      <div style={{display:'flex' , gap:'10px'}}>
        {/* Primary Button */}
      <ZButton
      style={{width:'150px'}}
        variant="primary"
        onClick={() => handleClick("Primary")}
        disabled={false}
      >
        Primary Button
      </ZButton>
      <br />

      {/* Secondary Button */}
      <ZButton
      style={{width:'150px'}}
        variant="secondary"
        onClick={() => handleClick("Secondary")}
        disabled={false}
      >
        Secondary Button
      </ZButton>
      <br />

      {/* Transparent Button */}
      <ZButton
      style={{width:'150px'}}
        variant="transparent"
        onClick={() => handleClick("Transparent")}
        disabled={false}
      >
        Transparent Button
      </ZButton>
      <br />

      {/* Border Button */}
      <ZButton
      style={{width:'150px'}}
        variant="secondaryBorder"
        onClick={() => handleClick("Border")}
        disabled={false}
      >
        Border Button
      </ZButton>
      <br />

      {/* Color Hold Button */}
      <ZButton
      style={{width:'150px'}}
        variant="colorHold"
        onClick={() => handleClick("Color Hold")}
        disabled={false}
      >
        Color Hold Button
      </ZButton>
      <br />

      {/* Linear Gradient Button */}
      <ZButton
      style={{width:'150px'}}
        variant="linearGradiant"
        onClick={() => handleClick("Linear Gradient")}
        disabled={false}
      >
        Linear Gradient Button
      </ZButton>
      <br />

      {/* Border Color Button */}
      <ZButton
      style={{width:'150px'}}
        variant="borderColor"
        onClick={() => handleClick("Border Color")}
        disabled={false}
      >
        Border Color Button
      </ZButton>
      <br />

      {/* Default Button */}
      <ZButton
      style={{width:'150px'}}
        variant="default"
        onClick={() => handleClick("Default")}
        disabled={false}
      >
        Default Button
      </ZButton>
      </div>
    </div>
  );
};

export default ButtonFile;
