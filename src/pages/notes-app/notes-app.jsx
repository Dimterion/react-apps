import { useEffect, useState } from "react";
import NoteForm from "../../components/NoteForm";
import NoteList from "../../components/NoteList";
import "./notes-app.css";

const NotesAppPage = () => {
  const [notes, setNotes] = useState(() => {
    const notes = JSON.parse(localStorage.getItem("notes"));

    return notes || [];
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const deleteNote = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this note?",
    );

    if (confirmDelete) {
      setNotes(notes.filter((note) => note.id !== id));
    }
  };

  return (
    <div className="mx-auto mt-10 w-md max-w-[90vw] rounded-lg bg-gray-100 p-6 shadow-md">
      <h2 className="mb-4 text-center text-2xl font-bold">📝 Notes App</h2>

      <NoteForm notes={notes} setNotes={setNotes} />
      <NoteList notes={notes} deleteNote={deleteNote} />
    </div>
  );
};

export default NotesAppPage;
