const LoadingSingleReviewCard = (): JSX.Element => {
  return (
    <div className="loading-single-review-container">
      <div className="loading-single-review-card">
        <div className="loading-single-review-title"/>
        <div className="loading-single-review-body">
          <div className="lds-ellipsis-single">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSingleReviewCard;
