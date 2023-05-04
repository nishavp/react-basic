//single restaurant card component as we will resuse it
const CardShimmer = () => {
  return (
    <div className="loading-cards">
      <div className="loading-cards-grid">
        <div className="single-card"></div>
        <div className="single-card"></div>
        <div className="single-card"></div>
        <div className="single-card"></div>
        <div className="single-card"></div>
        <div className="single-card"></div>
      </div>
    </div>
  );
};

export default CardShimmer;
