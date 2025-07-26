import { Routes, Route } from "react-router";
import HomePage from "./pages/home";
import ShoppingCartPage from "./pages/shopping-cart";
import NotesAppPage from "./pages/notes-app";
import NotFoundPage from "./pages/not-found";

// <<< RATING COMPONENT >>>
// import Rating from "./components/Rating";
// <<< RATING COMPONENT >>>

// <<< TIMER COMPONENT >>>
// import Timer from "./components/Timer";
// <<< TIMER COMPONENT >>>

const App = () => {
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

    // <<< TIMER COMPONENT >>>
    // <div className="mx-auto mt-10 max-w-md rounded-lg bg-gray-100 p-6 text-center shadow-lg">
    //   <Timer />
    // </div>
    // <<< TIMER COMPONENT >>>

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shopping-cart" element={<ShoppingCartPage />} />
      <Route path="/notes-app" element={<NotesAppPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
