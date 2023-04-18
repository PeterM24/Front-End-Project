import { useEffect, useState } from "react";
import { fetchReviews } from "../utils/api";
import { Review } from "../interfaces/review.interface";
import ReviewCard from "./ReviewCard";
import LoadingReviewCard from "./LoadingReview";

// interface Props {
//   reviewList: Review[];
//   setReviewList: React.Dispatch<React.SetStateAction<Array<Review>>>;
//   isLoading: boolean;
//   setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
// }

const ListOfReviews = (): JSX.Element => {
  useEffect(() => {
    setIsLoading(true);
    fetchReviews().then((data: Review[]) => {
      setReviewList(data);
      setIsLoading(false);
    });
  }, []);

  const [reviewList, setReviewList] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <div>
      <h2 className="page-title">List of Reviews</h2>
      {isLoading ? (
        <LoadingReviewCard />
      ) : (
        <ul className="list-container">
          {reviewList.map((review: Review) => {
            return <ReviewCard review={review} />;
          })}
        </ul>
      )}
    </div>
  );
};

export default ListOfReviews;
