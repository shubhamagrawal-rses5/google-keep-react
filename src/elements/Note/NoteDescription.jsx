function NoteDescription({ description, ...props }) {
  return (
    <div className="note-content note-description" {...props}>
      {description}
    </div>
  );
}

export default NoteDescription;
