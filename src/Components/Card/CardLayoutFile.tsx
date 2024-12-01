import React from "react";
import { ZCard, ZDefaultCard } from "./index"; 

const CardLayoutFile: React.FC = () => {
  return (
    <div style={{ padding: "20px" }}>

      <h2>ZCard Component</h2>
      <ZCard />

      <h2>ZDefaultCard Component </h2>
      <ZDefaultCard>
        <div style={{ padding: "10px" }}>
          <h3>Custom Content</h3>
          <p>This is a customizable card using the `ZDefaultCard` component.</p>
        </div>
      </ZDefaultCard>
    </div>
  );
};

export default CardLayoutFile;
