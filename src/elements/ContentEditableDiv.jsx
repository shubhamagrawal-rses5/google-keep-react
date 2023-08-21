export default function ContentEditableDiv({ ...props }) {
  return (
    <div contentEditable suppressContentEditableWarning={true} {...props}></div>
  );
}
