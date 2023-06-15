import "../styles/SingleReview.css";
import "../styles/LoadingDots.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleReview } from "../utils/api";
import { Review } from "../interfaces/review.interface";
import LoadingSingleReviewCard from "./LoadingSingleReview";
import CommentsSingleReview from "./CommentsSingleReview";
import ReviewVote from "./ReviewVote";
import React from "react";

const SingleReview = (): JSX.Element => {
  const { review_id } = useParams();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [singleReview, setSingleReview] = useState<Review>();
  const [date, setDate] = useState<string>("");
  const [reviewBody, setReviewBody] = useState<string[]>([]);

  useEffect(() => {
    setIsLoading(true);
    fetchSingleReview(review_id).then((response) => {
      setReviewBody(response.review_body.split("\n"));
      console.log(reviewBody);

      setIsLoading(false);
      setSingleReview(response);
      setDate(new Date(response.created_at).toLocaleString());
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
              <h3>Category: {singleReview?.category}</h3>
              <h3>Game designer: {singleReview?.designer}</h3>
              <br />
              <p>Reviewed by: {singleReview?.owner}</p>
              <p>Date posted: {date}</p>
              <br />
            </div>
            <ReviewVote
              votes={singleReview?.votes}
              review_id={singleReview?.review_id}
            />

            <img
              src={singleReview?.review_img_url}
              alt={`image for ${singleReview?.title}`}
              className="single-review-image"
            />

            <p className="single-review-body">
              {reviewBody?.map((paragraph: string, index: number) => (
                <React.Fragment key={index}>
                  {paragraph}
                  <br />
                </React.Fragment>
              ))}
            </p>
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
