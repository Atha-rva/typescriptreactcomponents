import React, { useState } from "react";
import { ZDropdown } from "./index"; 
import { Button } from "@fluentui/react-components";

const DropDownFile: React.FC = () => {
  const [selectedOptions] = useState<string[]>([]);
  const [dropdownValidState] = useState<"none" | "valid" | "invalid">("none");

//   const handleDropdownChange = (data: { key: string; info: { value: string[]; validState: "none" | "valid" | "invalid" } }) => {
//     setSelectedOptions(data.info.value);
//     setDropdownValidState(data.info.validState);
//   };

//   const handleBlur = (compInfo: { key: string; info: { value: string[]; validState: "none" | "valid" | "invalid" } }) => {
//     console.log("Blur Event Info:", compInfo);
//   };

  return (
    <div style={{ padding: "20px" }}>
      <h1>ZDropdown Example</h1>

      <ZDropdown
        id="example-dropdown"
        label="Choose Options"
        options={["Option 1", "Option 2", "Option 3", "Option 4"]}
        placeholder="Select an option"
        multiselect={true}
        selectedOptions={selectedOptions}
        validState={dropdownValidState}
        required={true}
        onSelectOption={(options) => console.log("Selected Options:", options)}
        // handleChange={handleDropdownChange}
        errorMessage="Please select at least one option"
        // onBlur={handleBlur}
        isAutoSave={true}
        autoSaveMethod={(id, data) => console.log(`Auto-saved ${id}:`, data)}
      />

      <Button
        onClick={() => {
          console.log("Final Selected Options:", selectedOptions);
        }}
        style={{ marginTop: "20px" }}
      >
        Submit
      </Button>
    </div>
  );
};

export default DropDownFile;
