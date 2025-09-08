import Note from "./Note";

const NoteList = ({ notes, setEditNote, deleteNote }) => {
  if (notes.length === 0) {
    return <p className="text-center text-gray-500">No Notes Yet</p>;
  }

  return (
    <section className="space-y-4">
      {notes.map((note) => (
        <Note
          key={note.id}
          note={note}
          editNote={setEditNote}
          deleteNote={deleteNote}
        />
      ))}
    </section>
  );
};

export default NoteList;
