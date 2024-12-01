import React, { useState } from "react";
import { ZDrawer } from "./index"; 
import { Button } from "@fluentui/react-components";

const DrawerFile: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div style={{ padding: "20px" }}>
      <h1>ZDrawer Example</h1>

      <Button onClick={() => setIsDrawerOpen(true)}>Open Drawer</Button>

      <ZDrawer
        title="Example Drawer"
        position="start" 
        type="overlay"
        modalType="modal" 
        size="large"
        open={isDrawerOpen}
        setIsOpen={setIsDrawerOpen}
      >
        <p>This is the content inside the drawer!</p>
        <p>You can place any component or text here.</p>
        <Button onClick={() => setIsDrawerOpen(false)}>Close Drawer</Button>
      </ZDrawer>
    </div>
  );
};

export default DrawerFile;
