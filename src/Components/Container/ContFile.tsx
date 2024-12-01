import React from "react";
import { ZContainer, ZContainerFluid } from "./index"; 

const ContainerFile: React.FC = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Container Component </h1>

      <h2>Default Container</h2>
      <ZContainer
        className="custom-class"
        style={{
          backgroundColor: "#f0f0f0",
          padding: "20px",
          borderRadius: "8px",
          margin: "10px 0",
        }}
      >
        <p>This is content inside the Container component.</p>
        <p>It adapts to the default layout styling.</p>
      </ZContainer>

      <h2>Fluid Container</h2>
      <ZContainerFluid
        className="custom-fluid-class"
        style={{
          backgroundColor: "#d0f0ff",
          padding: "20px",
          borderRadius: "8px",
          margin: "10px 0",
        }}
      >
        <p>This is content inside the ContainerFluid component.</p>
        <p>It adapts to a fluid layout.</p>
      </ZContainerFluid>
    </div>
  );
};

export default ContainerFile;
