import React from "react";
import { ZCalender } from "./index";

const CalenderFile: React.FC = () => {
  const handleDateChange = (date: Date | null | undefined) => {
    if (date) {
      console.log("Selected Date:", date.toLocaleDateString());
    } else {
      console.log("No date selected.");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>ZCalender Component Example</h1>
      <p>Select a date using the custom calendar component:</p>

      <ZCalender
              labelName="Pick a Date"
              placeholder="DD/MM/YYYY"
              isVisible={true}
              disabled={false}        
              onChange={handleDateChange}
      />
    </div>
  );
};

export default CalenderFile;
