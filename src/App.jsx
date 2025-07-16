import Rating from "./components/Rating";

const App = () => {
  return (
    <div className="rating-container">
      <Rating
        heading="How do you feel?"
        feedbackMessages={[
          "Meh",
          "Oh, well",
          "Ok",
          "Peachy",
          "Top of the world",
        ]}
      />
    </div>
  );
};

export default App;
