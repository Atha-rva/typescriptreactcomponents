import React from "react";
import { CalendarOverlaidMonth } from "./index"; 

const CalenderOverladFile: React.FC = () => {
  // Handle the selected date callback
  const handleDateChange = (date: string) => {
    console.log("Selected Date:", date);
  };

  // Handle autosave method
  const handleAutoSave = (id: string, data: any) => {
    console.log("Auto-saving data:", { id, data });
  };

  // Handle blur event
  const handleBlur = (compInfo: any) => {
    console.log("Blur event info:", compInfo);
  };

  return (
    <div style={{ padding: "20px"}}>
      <h1>Calendar Overlaid Month Component Example</h1>
      <div style={{width:'18.75rem'}}>
      <CalendarOverlaidMonth
        getDate={handleDateChange}
        label="Select Date"
        required={true}
        placeholder="DD/MM/YYYY"
        isAutoSave={true}
        autoSaveMethod={handleAutoSave}
        handleChange={(data) => console.log("Handle Change Data:", data)}
        validState="none"
        id="calendar-example"
        position="bottom"
        isVisible={true}
        onBlur={handleBlur}
        isFinancialYear={1}
      />
      </div>
    </div>
  );
};

export default CalenderOverladFile;
