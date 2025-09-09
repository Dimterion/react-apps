import { Routes, Route } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/home";
import ShoppingCartPage from "./pages/shopping-cart";
import NotesAppPage from "./pages/notes-app/notes-app";
import RatingPage from "./pages/rating";
import TimerPage from "./pages/timer";
import NodeInterfacePage from "./pages/node-interface/node-interface";
import QuizPage from "./pages/quiz";
import NotFoundPage from "./pages/not-found";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shopping-cart" element={<ShoppingCartPage />} />
        <Route path="/notes-app" element={<NotesAppPage />} />
        <Route path="/rating" element={<RatingPage />} />
        <Route path="/timer" element={<TimerPage />} />
        <Route path="/node-interface" element={<NodeInterfacePage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
