import React from "react";
import { ZDatePicker } from ".";

const DatePickerFile: React.FC = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>ZDatePicker Example</h1>

      <div style={{ marginBottom: "20px" }}>
        <h2>Basic Usage</h2>
        <ZDatePicker
          label="Select a Date"
          placeholder="DD/MM/YYYY"
          fieldStyle={{ marginBottom: "10px" }}
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h2>Disabled State</h2>
        <ZDatePicker
          label="Disabled Date Picker"
          placeholder="DD/MM/YYYY"
          disabled={true}
          fieldStyle={{ marginBottom: "10px" }}
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h2>Custom Input Styling</h2>
        <ZDatePicker
          label="Custom Styled Date Picker"
          placeholder="DD/MM/YYYY"
          inputStyle={{ border: "2px solid blue", borderRadius: "8px" }}
          fieldStyle={{ marginBottom: "10px" }}
        />
      </div>
    </div>
  );
};

export default DatePickerFile;
