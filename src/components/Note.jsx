import React, { useContext } from "react";
import IconButton from "../elements/IconButton";
import { NotesContext } from "../Contexts";
import NoteImage from "../elements/Note/NoteImage";
import NoteOptions from "../elements/Note/NoteOptions";
import NoteTitle from "../elements/Note/NoteTitle";
import NoteDescription from "../elements/Note/NoteDescription";
import Tooltip from "../elements/Tooltip";

function Note({ note }) {
  const { dispatchNoteEvent, setModalState } = useContext(NotesContext);
  const { title, description, color, isPinned, imageSRC, id } = note;

  function handleToggle() {
    dispatchNoteEvent("TOGGLE_NOTE", { id: note.id });
  }
  function handleNoteClick() {
    setModalState({ open: true, note: note });
  }

  return (
    <div className="note" id={`note-${id}`} style={{ backgroundColor: color }}>
      <div className="toggle-pin">
        <Tooltip tooltipContent={isPinned ? "Unpin note" : "Pin note"}>
          <IconButton
            icon={
              isPinned ? (
                <span className="material-icons" style={{ fontSize: "18px" }}>
                  turned_in
                </span>
              ) : (
                <span className="material-icons" style={{ fontSize: "18px" }}>
                  turned_in_not
                </span>
              )
            }
            styles={{ fontSize: "15px" }}
            onClick={handleToggle}
          />
        </Tooltip>{" "}
      </div>
      <div onClick={handleNoteClick}>
        <NoteImage src={imageSRC} />
        <NoteTitle title={title} />
        <NoteDescription description={description} />
      </div>
      <NoteOptions note={note} />
    </div>
  );
}

export default Note;
