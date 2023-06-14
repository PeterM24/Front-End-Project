import "../styles/ListReviews.css";
import "../styles/LoadingDots.css";
import { useEffect, useState } from "react";
import { fetchReviews } from "../utils/api";
import { Review } from "../interfaces/review.interface";
import ReviewCard from "./ReviewCard";
import LoadingReviewCard from "./LoadingReview";
import CategoryDropdown from "./CategoryDropdown";
import { useParams } from "react-router-dom";
import { HiOutlinePuzzlePiece } from "react-icons/hi2";

const ListOfReviews = (): JSX.Element => {
  const [reviewList, setReviewList] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const { category } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetchReviews(selectedCategory || category).then((data: Review[]) => {
      setReviewList(data);
      setIsLoading(false);
    });
  }, [selectedCategory]);

  return (
    <div className="list-reviews-page">
      <h2 className="page-title">
        <HiOutlinePuzzlePiece className="subhead-icon" />
        {selectedCategory === "all"
          ? "Latest reviews"
          : "Latest " + selectedCategory + " reviews"}
      </h2>
      {isLoading ? (
        <>
          <CategoryDropdown setSelectedCategory={setSelectedCategory} />
          <LoadingReviewCard />
        </>
      ) : (
        <>
          <CategoryDropdown setSelectedCategory={setSelectedCategory} />
          <div className="list-div">
            <ul className="list-container">
              {reviewList.map((review: Review) => {
                return <ReviewCard review={review} key={review.review_id} />;
              })}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default ListOfReviews;
