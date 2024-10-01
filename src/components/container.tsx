import React from "react";

const container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-[1100px] mx-auto bg-white min-h-screen flex flex-col border-l border-r">
      {children}
    </div>
  );
};

export default container;
