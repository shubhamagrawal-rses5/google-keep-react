import React from "react";
import DisplayNotes from "./DisplayNotes";

function DisplayAllNotes({ notes }) {
  const pinnedNotes = notes.filter((note) => note.isPinned);
  const otherNotes = notes.filter((note) => !note.isPinned);
  return (
    <div className="notes-area">
      <DisplayNotes notes={pinnedNotes} headingContent={"Pinned"} />
      <DisplayNotes notes={otherNotes} headingContent={"Others"} />
    </div>
  );
}

export default DisplayAllNotes;
