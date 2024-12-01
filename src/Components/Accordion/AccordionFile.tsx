import React from "react";
import { ZAccordion } from "../Accordion/index";

const OtherAccordionFile: React.FC = () => {
      
  return (
    <div>
      <h1>ZAccordion Example</h1>
      <ZAccordion
      style={{width:'50.5rem'}}
              panels={[{
                label: "Panel 1",
                component: <div>Content for Panel 1</div>, 
                completeStatus: "100", 
                isActive: true, 
                onAccordionClick: (index: number) => {
                  alert(`Accordion Panel ${index + 1} clicked`);
                },
                avatar: <img src="path-to-avatar.png" alt="Avatar" />, 
              },
]} 

              isVisible={true}
              disabled={false}
              hideExpandIconKeys={[2]}
              defaultOpen={1}       />
    </div>
  );
};

export default OtherAccordionFile;
