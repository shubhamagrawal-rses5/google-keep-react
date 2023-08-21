import React from "react";

function ContentEditableDiv({ ...props }, ref) {
  return (
    <div
      ref={ref}
      contentEditable
      suppressContentEditableWarning={true}
      {...props}
    ></div>
  );
}

export default React.forwardRef(ContentEditableDiv);
