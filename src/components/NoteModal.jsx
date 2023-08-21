import React, { useContext, useRef, useState } from "react";
import ContentEditableDiv from "../elements/ContentEditableDiv";
import NoteImage from "../elements/Note/NoteImage";
import NoteOptions from "../elements/Note/NoteOptions";
import { NotesContext } from "../Contexts";
import IconButton from "../elements/IconButton";
import NoteContentContainer from "../elements/Note/NoteContentContainer";
import useAutosizeTextArea from "../hooks/useAutosizeTextArea";

function NoteModal() {
  const { modalState, setModalState, dispatchNoteEvent } =
    useContext(NotesContext);
  const { open, note } = modalState;

  const { id, title, description, isPinned } = note;

  const [editingNote, setEditingNote] = useState({
    id,
    title,
    description,
    isPinned,
  });

  const textAreaTitleRef = useRef(null);

  useAutosizeTextArea(textAreaTitleRef.current, editingNote.title);

  function handleModalClose() {
    dispatchNoteEvent("UPDATE_NOTE", {
      id: note.id,
      updates: editingNote,
    });
    setModalState({ open: false, note: null });
    setEditingNote(null);
  }

  function handleToggle() {
    setEditingNote({ ...editingNote, isPinned: !editingNote.isPinned });
  }

  return open ? (
    <div>
      <div className="note-modal-background" onClick={handleModalClose}></div>
      <div className="note-modal" style={{ backgroundColor: note.color }}>
        <IconButton
          icon={
            editingNote.isPinned ? (
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
          className="toggle-pin"
        />
        <NoteContentContainer>
          <NoteImage src={note.imageSRC} />
          {/* <textarea
            className="note-content note-title"
            placeholder="Title"
            value={editingNote.title}
            style={{ height: "50px" }}
            ref={textAreaTitleRef}
            onChange={(e) => {
              setEditingNote({ ...editingNote, title: e.target.value });
            }}
          ></textarea> */}
          <ContentEditableDiv
            data-placeholder="Title"
            className="note-content note-title"
            value={editingNote.title}
            children={<pre data-placeholder="Title">{note.title}</pre>}
            onInput={(e) => {
              setEditingNote({ ...editingNote, title: e.target.outerText });
            }}
          />
          <ContentEditableDiv
            data-placeholder="Note"
            className="note-content note-description"
            value={editingNote.description}
            children={<pre data-placeholder="Note">{note.description}</pre>}
            onInput={(e) =>
              setEditingNote({
                ...editingNote,
                description: e.target.outerText,
              })
            }
          />
        </NoteContentContainer>
        <NoteOptions note={editingNote} />
      </div>
    </div>
  ) : null;
}

export default NoteModal;
