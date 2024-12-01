import React from "react";
import { ZAvatar } from "./index";

const AvatarFile: React.FC = () => {
  return (
    <div>
      <h1>Avatar Component</h1>
      <div style={{ display: "flex", gap: "10px" }}>
        <ZAvatar
          name="Team Members"
          users={[
            { name: "John Doe", status: "available" },
            { name: "Jane Smith", status: "away" },
            { name: "Alice Johnson", status: "offline" },
          ]}
          status="available"
          isAvatar={true}
          rightAvatar={false}
          isVisible={true}
          disabled={false}
          isName={true}
        />
        <ZAvatar
          name="Team Members"
          users={[
            { name: "John Doe", status: "available" },
            { name: "Jane Smith", status: "away" },
            { name: "Alice Johnson", status: "offline" },
          ]}
          status="available"
          isAvatar={true}
          rightAvatar={true}
          isVisible={true}
          disabled={false}
          isName={true}
        />
        <ZAvatar
          name="Team Members"
          users={[
            { name: "John Doe", status: "available" },
            { name: "Jane Smith", status: "away" },
            { name: "Alice Johnson", status: "offline" },
          ]}
          status="available"
          isAvatar={false}
          rightAvatar={false}
          isVisible={true}
          disabled={false}
          isName={true}
        />
      </div>
    </div>
  );
};

export default AvatarFile;
