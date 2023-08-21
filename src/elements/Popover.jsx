import React from "react";

function Popover({
  open,
  popoverContent,
  children,
  arrow = false,
  popoverContentStyles,
  ...props
}) {
  return (
    <div className="popover">
      <div>{children}</div>
      <span
        className="popover-content"
        style={{ display: open ? "inherit" : "none", ...popoverContentStyles }}
      >
        {popoverContent}
      </span>
    </div>
  );
}

export default Popover;
