import { useState, useEffect } from "react";
import "./App.css";
import DisplayAllNotes from "./components/DisplayAllNotes";
import CreateNoteArea from "./components/CreateNote";
import Header from "./components/Header";
import {
  createNote,
  deleteNote,
  duplicateNote,
  getSearchFilterData,
  toggleNote,
  updateNote,
} from "./utils";
import { NotesContext } from "./Contexts";
import NoteModal from "./components/NoteModal";

function useLocalStorage(key, initialValue) {
  function fetchData() {
    const data = JSON.parse(localStorage.getItem(key));
    if (data) return data;
    return initialValue;
  }

  const [data, setData] = useState(fetchData);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
    setData(data);
  }, [data, key]);

  return [data, setData];
}

function App() {
  const [searchString, setSearchString] = useState("");
  const [notes, setNotes] = useLocalStorage("notes", []);
  const [modalState, setModalState] = useState({
    open: false,
    note: null,
  });

  const [isCreateAreaExpanded, setIsCreateAreaExpanded] = useState(false);

  const filteredNotes = getSearchFilterData(notes, searchString);

  const dispatchNoteEvent = (actionType, payload) => {
    let newNotes;
    switch (actionType) {
      case "CREATE_NOTE":
        newNotes = createNote(notes, payload);
        setNotes(newNotes);
        return;
      case "DELETE_NOTE":
        newNotes = deleteNote(notes, payload.id);
        setNotes(newNotes);
        return;
      case "DUPLICATE_NOTE":
        newNotes = duplicateNote(notes, payload.id);
        setNotes(newNotes);
        return;
      case "TOGGLE_NOTE":
        newNotes = toggleNote(notes, payload.id);
        setNotes(newNotes);
        return;
      case "UPDATE_NOTE":
        newNotes = updateNote(notes, payload.id, payload.updates);
        setNotes(newNotes);
        return;
      default:
        return;
    }
  };

  useEffect(() => {
    const createNoteArea = document.querySelector(".create-note-area");
    const createNoteOptions = document.querySelector(".create-note-options");

    const outsideNoteAreaClickHandler = (event) => {
      if (
        document.contains(event.target) &&
        !createNoteArea.contains(event.target)
      ) {
        createNoteOptions.querySelector(".save-button").click();
        setIsCreateAreaExpanded(false);
      }
    };
    window.addEventListener("click", outsideNoteAreaClickHandler);
    return () => {
      window.removeEventListener("click", outsideNoteAreaClickHandler);
    };
  }, []);

  return (
    <div className="App">
      <Header searchString={searchString} setSearchString={setSearchString} />
      <NotesContext.Provider
        value={{
          notes,
          dispatchNoteEvent,
          modalState,
          setModalState,
          isCreateAreaExpanded,
          setIsCreateAreaExpanded,
        }}
      >
        <CreateNoteArea />
        <DisplayAllNotes notes={filteredNotes} />
        {modalState.open ? <NoteModal /> : null}
      </NotesContext.Provider>
    </div>
  );
}

export default App;
