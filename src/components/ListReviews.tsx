import "../styles/ListReviews.css";
import "../styles/LoadingDots.css"
import { useEffect, useState } from "react";
import { fetchReviews } from "../utils/api";
import { Review } from "../interfaces/review.interface";
import ReviewCard from "./ReviewCard";
import LoadingReviewCard from "./LoadingReview";
import CategoryDropdown from "./CategoryDropdown";
import { useParams } from "react-router-dom";

const ListOfReviews = (): JSX.Element => {
  const [reviewList, setReviewList] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {category} = useParams();
  
  useEffect(() => {
    setIsLoading(true);
    fetchReviews(category).then((data: Review[]) => {
      setReviewList(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="list-reviews-page">
      <h2 className="page-title">Latest reviews</h2>
      {isLoading ? (
        <LoadingReviewCard />
      ) : (
        <>
        <CategoryDropdown />
        <ul className="list-container">
          {reviewList.map((review: Review) => {
            return <ReviewCard review={review} key={review.review_id} />;
          })}
        </ul>
        </>
      )}
    </div>
  );
};

export default ListOfReviews;
