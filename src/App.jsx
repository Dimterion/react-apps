import { Routes, Route } from "react-router";
import HomePage from "./pages/home";
import ShoppingCartPage from "./pages/shopping-cart";
import NotFoundPage from "./pages/not-found"

// <<< RATING COMPONENT >>>
// import Rating from "./components/Rating";
// <<< RATING COMPONENT >>>

// <<< NOTES APP >>>
// import { useEffect, useState } from "react";
// import NoteForm from "./components/NoteForm";
// import NoteList from "./components/NoteList";
// <<< NOTES APP >>>

// <<< TIMER COMPONENT >>>
// import Timer from "./components/Timer";
// <<< TIMER COMPONENT >>>

const App = () => {
  // <<< NOTES APP >>>
  // const [notes, setNotes] = useState(() => {
  //   const notes = JSON.parse(localStorage.getItem("notes"));

  //   return notes || [];
  // });

  // useEffect(() => {
  //   localStorage.setItem("notes", JSON.stringify(notes));
  // }, [notes]);

  // const deleteNote = (id) => {
  //   const confirmDelete = window.confirm(
  //     "Are you sure you want to delete this note?",
  //   );

  //   if (confirmDelete) {
  //     setNotes(notes.filter((note) => note.id !== id));
  //   }
  // };
  // <<< NOTES APP >>>

  // <<< SHOPPING CART >>>

  // <<< SHOPPING CART >>>

  return (
    // <<< RATING COMPONENT >>>
    // <div className="rating-container">
    //   <Rating
    //     heading="How do you feel?"
    //     feedbackMessages={[
    //       "Meh",
    //       "Oh, well",
    //       "Ok",
    //       "Peachy",
    //       "Top of the world",
    //     ]}
    //   />
    // </div>
    // <<< RATING COMPONENT >>>

    // <<< NOTES APP >>>
    // <div className="mx-auto mt-10 max-w-lg rounded-lg bg-gray-100 p-6">
    //   <h2 className="mb-4 text-center text-2xl font-bold">📝 Notes App</h2>

    //   <NoteForm notes={notes} setNotes={setNotes} />
    //   <NoteList notes={notes} deleteNote={deleteNote} />
    // </div>
    // <<< NOTES APP >>>

    // <<< TIMER COMPONENT >>>
    // <div className="mx-auto mt-10 max-w-md rounded-lg bg-gray-100 p-6 text-center shadow-lg">
    //   <Timer />
    // </div>
    // <<< TIMER COMPONENT >>>

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shopping-cart" element={<ShoppingCartPage />} />
        <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
