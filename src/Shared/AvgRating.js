const calculateAvgRating = (reviews) => {
  if (!reviews || reviews.length === 0) {
    return { totalRating: 0 }; // Return 0 if no reviews
  }

  const totalRating = reviews.reduce(
    (accumulator, review) => accumulator + review.rating,
    0
  );

  const avgRating = (totalRating / reviews.length).toFixed(1);

  return { totalRating, avgRating };
};

export default calculateAvgRating;
