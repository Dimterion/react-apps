import Rating from "../components/Rating/Rating";

const RatingPage = () => {
  return (
    <main className="rating-container">
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
    </main>
  );
};

export default RatingPage;
