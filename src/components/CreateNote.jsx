import React, { useContext, useState } from "react";

import IconButton from "../elements/IconButton";
import NoteImage from "../elements/Note/NoteImage";
import { NotesContext } from "../Contexts";
import ContentEditableDiv from "../elements/ContentEditableDiv";
import CreateNoteOptions from "./CreateNoteOptions";
import Tooltip from "../elements/Tooltip";
import NoteContentContainer from "../elements/Note/NoteContentContainer";

export const initialNote = {
  title: "",
  description: "",
  color: "white",
  imageSRC: null,
  isPinned: false,
};

function CreateNoteArea() {
  const [creatingNote, setCreatingNote] = useState(initialNote);
  const { isCreateAreaExpanded, setIsCreateAreaExpanded } =
    useContext(NotesContext);

  function handleTogglePin() {
    setCreatingNote({ ...creatingNote, isPinned: !creatingNote.isPinned });
  }

  return (
    <div
      className="create-note-area"
      onClick={() => setIsCreateAreaExpanded(true)}
      style={{ backgroundColor: creatingNote.color }}
    >
      <div className="toggle-pin">
        <Tooltip
          tooltipContent={creatingNote.isPinned ? "Unpin note" : "Pin note"}
        >
          <IconButton
            icon={
              creatingNote.isPinned ? (
                <span className="material-icons" style={{ fontSize: "18px" }}>
                  turned_in
                </span>
              ) : (
                <span className="material-icons" style={{ fontSize: "18px" }}>
                  turned_in_not
                </span>
              )
            }
            styles={{
              fontSize: "15px",
            }}
            onClick={handleTogglePin}
          />
        </Tooltip>
      </div>
      <NoteContentContainer>
        <NoteImage />
        <ContentEditableDiv
          data-placeholder="Title"
          className="note-content note-title"
          onInput={(e) =>
            setCreatingNote({ ...creatingNote, title: e.target.outerText })
          }
          style={{ display: isCreateAreaExpanded ? "block" : "none" }}
        />
        <ContentEditableDiv
          data-placeholder="Take a note..."
          className="note-content note-description"
          onInput={(e) =>
            setCreatingNote({
              ...creatingNote,
              description: e.target.outerText,
            })
          }
        />
      </NoteContentContainer>
      <CreateNoteOptions
        className="create-note-options"
        creatingNote={creatingNote}
        setCreatingNote={setCreatingNote}
        style={{ display: isCreateAreaExpanded ? "flex" : "none" }}
      />
    </div>
  );
}

export default CreateNoteArea;
