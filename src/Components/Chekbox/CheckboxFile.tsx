import React from "react";
import { ZCheckbox } from "./index"; 

const CheckboxFile: React.FC = () => {
  // Handler for checkbox state changes
  const handleCheckboxChange = (checkboxInfo: any) => {
    console.log("Checkbox Change Info:", checkboxInfo);
  };

  // Handler for checkbox blur events
  const handleCheckboxBlur = (checkboxInfo: any) => {
    console.log("Checkbox Blur Info:", checkboxInfo);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1> ZCheckbox Component</h1>

      <h2>Default ZCheckbox</h2>
      <ZCheckbox
        id="checkbox1"
        label="I agree to the terms and conditions"
        checkboxlabel="Terms"
        handleChange={handleCheckboxChange}
        onBlur={handleCheckboxBlur}
      />

      <h2>Disabled ZCheckbox</h2>
      <ZCheckbox
        id="checkbox2"
        label="This checkbox is disabled"
        checkboxlabel="Disabled Checkbox"
        disabled={true}
      />

      <h2>Hidden ZCheckbox</h2>
      <ZCheckbox
        id="checkbox3"
        label="This checkbox is hidden"
        checkboxlabel="Hidden Checkbox"
        isVisible={false}
      />

      <h2>Styled ZCheckbox</h2>
      <ZCheckbox
        id="checkbox4"
        label="Custom styled checkbox"
        checkboxlabel="Styled Checkbox"
        style={{
          color: "blue",
          fontWeight: "bold",
        }}
        handleChange={handleCheckboxChange}
      />
    </div>
  );
};

export default CheckboxFile;
