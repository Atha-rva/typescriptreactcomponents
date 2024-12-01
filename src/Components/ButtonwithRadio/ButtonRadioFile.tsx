import React from "react";
import { ZButtonWithRadio } from "./index";

const ButtonRadioFile: React.FC = () => {

  const radioMenuData = [
    {
      name: "Option 1",
      infoOption: ["Info 1.1", "Info 1.2", "Info 1.3"],
    },
    {
      name: "Option 2",
      infoOption: ["Info 2.1", "Info 2.2"],
    },
    {
      name: "Option 3",
      infoOption: ["Info 3.1", "Info 3.2", "Info 3.3", "Info 3.4"],
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>ZButtonWithRadio Example</h1>
      <p>
        Below is an example of the `ZButtonWithRadio` component with multiple
        radio options and their corresponding menus.
      </p>

      <ZButtonWithRadio
        data={radioMenuData}
        isVisible={true}
        disabled={false}
        menuPositioning="below-end"
      />
    </div>
  );
};

export default ButtonRadioFile;
