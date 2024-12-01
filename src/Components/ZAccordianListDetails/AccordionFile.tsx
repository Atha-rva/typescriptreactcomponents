import React from "react";
import { ZAccordionListDetails } from "./index";

const AccordionFile: React.FC = () => {
  const handleDelete = () => {
    alert("Delete button clicked");
  };

  const accordionData = [
    [
      { key: "Name", value: "John Doe" },
      { key: "Age", value: "30" },
    ],
    [
      { key: "Name", value: "Jane Smith" },
      { key: "Age", value: "25" },
    ],
  ];
  
  return (
    <div>
      <h1>Accordion Component</h1>
      <ZAccordionListDetails
              list={accordionData} // Provide the data to the accordion
            //   Headertitle="Accordion Header" // Title for each accordion header
              onDelete={handleDelete} // Function to handle delete button click
              disabled={false} // Optional: disable accordion items
              isVisible={true} // Optional: control visibility of the accordion
              showCount="5" // Optional: custom count or badge
              removeDeleteBtn={false} // Optional: whether to hide the delete button
              hideIndex={false} // Optional: whether to hide the index
              children={undefined}      />
    </div>
  );
};

export default AccordionFile;
