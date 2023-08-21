function NoteImage({ src, ...props }) {
  return (
    <div className="note-image">
      {src ? <img {...props} src={src} alt="image-not-loaded" /> : null}
    </div>
  );
}
export default NoteImage;
