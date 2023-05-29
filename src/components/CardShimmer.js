// single restaurant card component as we will resuse it
// created array of empty boxes
const CardShimmer = () => {
  return (
    <div className="loading-cards">
      <div className="loading-cards-grid" data-testid="shimmer-ui">
        {Array(6)
          .fill("")
          .map((e, index) => (
            <div key={index} className="single-card"></div>
          ))}
      </div>
    </div>
  );
};

export default CardShimmer;
