import { useContext, useEffect, useState } from "react";
import IconButton from "../IconButton";
import { NotesContext } from "../../Contexts";
import Tooltip from "../Tooltip";
import Popover from "../Popover";
import ColorPalette from "../../components/ColorPalette";

export default function NoteOptions({ note }) {
  const { dispatchNoteEvent, modalState, setModalState } =
    useContext(NotesContext);

  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  function handleDelete() {
    dispatchNoteEvent("DELETE_NOTE", { id: note.id });
    setModalState({ open: false, note: null });
  }

  function handleDuplicate() {
    dispatchNoteEvent("DUPLICATE_NOTE", { id: note.id });
  }

  function handleUpdate(updates) {
    dispatchNoteEvent("UPDATE_NOTE", {
      id: note.id,
      updates,
    });
    setModalState({ ...modalState, note: { ...modalState.note, ...updates } });
  }

  function handleFileChange(event) {
    const imageFile = event.target.files[0];
    const fileReader = new FileReader();

    fileReader.readAsDataURL(imageFile);

    fileReader.addEventListener("load", function (e) {
      handleUpdate({ imageSRC: e.target.result });
    });
  }

  function handleColorPaletteClick(event) {
    setIsPopoverOpen((prev) => !prev);
  }

  function handleSelectColor(bgcolor) {
    dispatchNoteEvent("UPDATE_NOTE", {
      id: note.id,
      updates: { color: bgcolor },
    });
    if (modalState.open) {
      setModalState({
        ...modalState,
        note: { ...modalState.note, color: bgcolor },
      });
    }
  }

  // useEffect(() => {
  //   const noteArea = document.querySelector(`#note-${note.id}`);
  //   const outsideNoteAreaClickHandler = (event) => {
  //     if (document.contains(event.target) && !noteArea.contains(event.target)) {
  //       if (isPopoverOpen) setIsPopoverOpen((prev) => !prev);
  //     }
  //   };

  //   window.addEventListener("click", outsideNoteAreaClickHandler);
  //   return () => {
  //     window.removeEventListener("click", outsideNoteAreaClickHandler);
  //   };
  // }, [isPopoverOpen]);

  return (
    <div
      className="notes-options-container"
      style={{ visibility: isPopoverOpen ? "visible" : "" }}
    >
      <div className="note-options">
        <Tooltip tooltipContent={"Delete note"}>
          <IconButton
            icon={
              <span
                className="material-symbols-outlined"
                style={{ fontSize: "18px" }}
              >
                delete
              </span>
            }
            styles={{ fontSize: "15px" }}
            onClick={handleDelete}
          />
        </Tooltip>
        <input
          type="file"
          accept="image/*"
          className="note-image-file"
          id={`note-image-file-${note.id}`}
          onChange={handleFileChange}
          hidden
        ></input>
        <label htmlFor={`note-image-file-${note.id}`}>
          <Tooltip tooltipContent={"Add image"}>
            <IconButton
              icon={
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: "18px" }}
                >
                  image
                </span>
              }
              styles={{ fontSize: "15px" }}
              onClick={(e) => {
                e.target.parentElement.click();
              }}
            />{" "}
          </Tooltip>
        </label>
        <Tooltip tooltipContent={"Duplicate note"}>
          <IconButton
            icon={
              <span
                className="material-symbols-outlined"
                style={{ fontSize: "20px" }}
              >
                file_copy
              </span>
            }
            styles={{ fontSize: "15px" }}
            onClick={handleDuplicate}
          />{" "}
        </Tooltip>
        <Popover
          popoverContent={
            <ColorPalette
              selectedColor={note.color}
              handleSelectColor={handleSelectColor}
            />
          }
          open={isPopoverOpen}
        >
          <Tooltip tooltipContent={"Background color"}>
            <IconButton
              icon={
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: "18px" }}
                >
                  palette
                </span>
              }
              styles={{ fontSize: "15px" }}
              onClick={handleColorPaletteClick}
            />
          </Tooltip>
        </Popover>
      </div>
    </div>
  );
}

const obj = { a: 1, b: 2 };

const { a: c, b } = obj;
