export function getSearchFilterData(data, filterString) {
  const filteredData = data.filter(
    (item) =>
      item.title?.includes(filterString) ||
      item.description?.includes(filterString)
  );
  return filteredData;
}

export function getTargetNote(notes, noteId) {
  return notes.find((note) => note.id === noteId);
}

export function createNote(notes, noteContent) {
  const notesCopy = JSON.parse(JSON.stringify(notes));
  notesCopy.push({ ...noteContent, id: Date.now() });
  return notesCopy;
}

export function updateNote(notes, noteId, updates) {
  const notesCopy = JSON.parse(JSON.stringify(notes));
  const noteToBeUpdated = getTargetNote(notesCopy, noteId);
  if (noteToBeUpdated) {
    Object.assign(noteToBeUpdated, { ...updates });
  }
  return notesCopy;
}

export function deleteNote(notes, noteId) {
  const filteredNotes = notes.filter((note) => note.id !== noteId);
  const notesCopy = JSON.parse(JSON.stringify(filteredNotes));
  return notesCopy;
}

export function duplicateNote(notes, noteId) {
  const noteToBeDuplicated = getTargetNote(notes, noteId);
  if (noteToBeDuplicated) {
    const notesCopy = createNote(notes, {
      ...noteToBeDuplicated,
      id: Date.now(),
    });
    return notesCopy;
  }

  return notes;
}

export function toggleNote(notes, noteId) {
  const noteToBeToggled = getTargetNote(notes, noteId);
  const notesCopy = updateNote(notes, noteId, {
    ...noteToBeToggled,
    isPinned: !noteToBeToggled.isPinned,
  });
  return notesCopy;
}
