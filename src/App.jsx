import { Routes, Route } from "react-router";
import HomePage from "./pages/home";
import ShoppingCartPage from "./pages/shopping-cart";
import NotesAppPage from "./pages/notes-app";
import NotFoundPage from "./pages/not-found";
import RatingPage from "./pages/rating";
import TimerPage from "./pages/timer";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shopping-cart" element={<ShoppingCartPage />} />
      <Route path="/notes-app" element={<NotesAppPage />} />
      <Route path="/rating" element={<RatingPage />} />
      <Route path="/timer" element={<TimerPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
