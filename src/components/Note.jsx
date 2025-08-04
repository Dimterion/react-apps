const Note = ({ note, editNote, deleteNote }) => {
  return (
    <div
      className={`rounded-lg border-l-4 bg-white p-4 shadow-md`}
      style={{
        borderLeftColor:
          note.priority === "High"
            ? "red"
            : note.priority === "Medium"
              ? "orange"
              : "green",
      }}
    >
      <h3 className="text-lg font-bold">{note.title}</h3>
      <p className="to-gray-600 text-sm">
        <strong>Category: </strong>
        {note.category}
      </p>
      <p className="to-gray-600 text-sm">
        <strong>Priority: </strong>
        {note.priority}
      </p>
      <p className="mt-3">{note.description}</p>

      <div className="flex justify-between">
        <button
          onClick={() => deleteNote(note.id)}
          className="mt-3 cursor-pointer text-red-500 transition hover:text-red-700"
        >
          🗑 Delete
        </button>
        <button
          onClick={() => editNote(note)}
          className="mt-3 cursor-pointer text-green-500 transition hover:text-green-700"
        >
          ✏️ Edit
        </button>
      </div>
    </div>
  );
};

export default Note;
