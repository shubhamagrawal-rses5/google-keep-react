import React from "react";
import Tooltip from "../elements/Tooltip";

const noteBackgroundColors = {
  white: "default",
  "#faafa8": "Coral",
  "#fff8b8": "Sand",
  "#e2f6d3": "Mint",
  "#b4ddd3": "Sage",
  "#aeccdc": "Storm",
  "#f6e2dd": "Blossom",
  "#efeff1": "Chalk",
};

function ColorPalette({ selectedColor, handleSelectColor }) {
  function handleClick(bgcolor) {
    handleSelectColor(bgcolor);
  }

  return (
    <div className="background-color-palette-container">
      {Object.keys(noteBackgroundColors).map((color) => {
        return (
          <Tooltip key={color} tooltipContent={noteBackgroundColors[color]}>
            <button
              className="background-color-button"
              style={{
                backgroundColor: color,
                border: color === selectedColor ? "2px solid blue" : null,
              }}
              onClick={() => handleClick(color)}
            >
              {color === "white" && color !== selectedColor ? (
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: "14px", color: "rgba(1, 1, 1, 0.7)" }}
                >
                  format_color_reset
                </span>
              ) : (
                ""
              )}
              {color === selectedColor ? (
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: "18px" }}
                >
                  done
                </span>
              ) : (
                ""
              )}
            </button>
          </Tooltip>
        );
      })}
    </div>
  );
}

export default ColorPalette;
