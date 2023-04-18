const LoadingReviewCard = (): JSX.Element => {
  return (
    <ul className="loading-review-container">
      <li className="loading-review-card">
        <div className="loading-review-title"></div>
        <div className="loading-review-body">
        <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </li>
      <li className="loading-review-card">
        <div className="loading-review-title"></div>
        <div className="loading-review-body">
          <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default LoadingReviewCard;
