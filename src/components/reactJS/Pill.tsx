import React from "react";
import type { ReactNode } from "react";

interface PillProps {
  children: ReactNode;
}

const Pill: React.FC<PillProps> = ({ children }) => {
  return (
    <div className="flex px-4 py-2 gap-2 text-white border border-pink-500 bg-pink-500 rounded-full text-md leading-tight whitespace-nowrap">
      {children}
    </div>
  );
};

export default Pill;