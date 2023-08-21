function NoteTitle({ title, ...props }) {
  return (
    <div className="note-content note-title" {...props}>
      {title}
    </div>
  );
}

export default NoteTitle;
