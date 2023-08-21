import React, { useState } from "react";

function Tooltip({
  tooltipContent,
  children,
  arrow = false,
  tooltipContentStyles,
  ...props
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="tooltip ">
      <div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        {children}
      </div>
      <span
        className="tooltip-content"
        style={{ display: open ? "inherit" : "none", ...tooltipContentStyles }}
      >
        {tooltipContent}
      </span>
    </div>
  );
}

export default Tooltip;
