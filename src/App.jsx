import { Routes, Route } from "react-router";
import HomePage from "./pages/home";
import ShoppingCartPage from "./pages/shopping-cart";
import NotesAppPage from "./pages/notes-app";
import NotFoundPage from "./pages/not-found";
import RatingPage from "./pages/rating";

// <<< TIMER COMPONENT >>>
// import Timer from "./components/Timer";
// <<< TIMER COMPONENT >>>

const App = () => {
  return (
    // <<< TIMER COMPONENT >>>
    // <div className="mx-auto mt-10 max-w-md rounded-lg bg-gray-100 p-6 text-center shadow-lg">
    //   <Timer />
    // </div>
    // <<< TIMER COMPONENT >>>

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shopping-cart" element={<ShoppingCartPage />} />
      <Route path="/notes-app" element={<NotesAppPage />} />
      <Route path="/rating" element={<RatingPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
