import React from "react";

function IconButton({
  icon,
  onClick,
  className,
  size = "24px",
  styles,
  disabled,
}) {
  const actualClassName = `icon-button ${className ?? ""}`;
  return (
    <button
      className={actualClassName}
      style={{
        height: size,
        width: size,
        ...styles,
      }}
      onClick={onClick}
      disabled={disabled}
    >
      {icon}
    </button>
  );
}

export default IconButton;
