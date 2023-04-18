import { useEffect } from "react";
import { fetchReviews } from "../api";
import { Review } from "../interfaces/review.interface";
import ReviewCard from "./ReviewCard";

interface Props {
  reviewList: Review[];
  setReviewList: React.Dispatch<React.SetStateAction<Array<Review>>>;
}

const ListOfReviews = ({ reviewList, setReviewList }: Props): JSX.Element => {
  useEffect(() => {
    fetchReviews().then((data: Review[]) => {
      setReviewList(data);
    });
  }, []);

  return (
    <div>
      <h2 className="page-title">List of Reviews</h2>
      <ul className="list-container">
        {reviewList.map((review: Review) => {
          return <ReviewCard review={review} />;
        })}
      </ul>
    </div>
  );
};

export default ListOfReviews;
