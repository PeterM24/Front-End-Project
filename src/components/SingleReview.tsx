import "../styles/SingleReview.css";
import "../styles/LoadingDots.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleReview } from "../utils/api";
import { Review } from "../interfaces/review.interface";
import LoadingSingleReviewCard from "./LoadingSingleReview";
import CommentsSingleReview from "./CommentsSingleReview";
import ReviewVote from "./ReviewVote";

const SingleReview = (): JSX.Element => {
  const { review_id } = useParams();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [singleReview, setSingleReview] = useState<Review>();
  const [date, setDate] = useState<string>("");

  useEffect(() => {
    setIsLoading(true);
    fetchSingleReview(review_id).then((response) => {
      setIsLoading(false);
      setSingleReview(response);
    });
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingSingleReviewCard />
      ) : (
        <div className="single-review-container">
          <div key={singleReview?.review_id} className="single-review">
            <h1 className="single-review-header">{singleReview?.title}</h1>

            <div className="single-review-info">
              <h3>CATEGORY: {singleReview?.category.toUpperCase()}</h3>
              <h3>GAME DESIGNER: {singleReview?.designer.toUpperCase()}</h3>
              <br />
              <p>Reviewed by: {singleReview?.owner}</p>
              <p>Date posted: {singleReview?.created_at}</p>
              <h5>Comments: {singleReview?.comment_count}</h5>
              <ReviewVote votes={singleReview?.votes} review_id={singleReview?.review_id} />
            </div>

            <img
              src={singleReview?.review_img_url}
              alt={`image for ${singleReview?.title}`}
              className="single-review-image"
            />

            <p className="single-review-body">{singleReview?.review_body}</p>
            <div className="comments-single-review">
              <CommentsSingleReview />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleReview;
