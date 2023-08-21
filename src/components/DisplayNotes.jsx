import Heading from "../elements/Heading";
import Note from "./Note";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function DisplayNotes({ notes, headingContent }) {
  return (
    <>
      {notes.length > 0 ? <Heading>{headingContent}</Heading> : null}
      <div className="notes-display-area">
        <ResponsiveMasonry
          columnsCountBreakPoints={{
            275: 1,
            560: 2,
            850: 3,
            1150: 4,
            1350: 5,
            1650: 6,
          }}
        >
          <Masonry gutter="1rem">
            {notes.map((note) => (
              <Note key={note.id} note={note} />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </>
  );
}
