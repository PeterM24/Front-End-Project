import { Review } from "../interfaces/review.interface";
import { Link } from "react-router-dom";
import { User } from "../interfaces/user.interface";
import { useEffect, useState } from "react";
import { fetchAllUsers } from "../utils/api";

const ReviewCard = ({ review }: { review: Review }): JSX.Element => {
  const date = new Date(review.created_at).toLocaleString().split(",");

  const [userList, setUserList] = useState<User[]>([]);
  useEffect(() => {
    fetchAllUsers().then((response) => {
      setUserList(response);
    });
  }, []);

  const thisReviewUser = userList.find(
    (user) => user.username === review.owner
  );

  return (
    <li className="list-item">
      <Link className="liste-item-link" to={`/reviews/${review.review_id}`}>
        <img
          src={review.review_img_url}
          alt={`image for ${review.title}`}
          className="list-item-image"
        />
      </Link>
      <Link className="liste-item-link" to={`/reviews/${review.review_id}`}>
        <h3 className="list-item-header">
          {review.title.length > 40
            ? review.title.slice(0, 37) + "..."
            : review.title}
        </h3>
      </Link>
      <div className="user-info">
        <img
          src={thisReviewUser?.avatar_url}
          alt="user-icon"
          className="list-item-avatar"
        />
        <p className="list-item-owner">
          <b>{review.owner}</b> {date[0]}
        </p>
      </div>

      <p className="list-item-body">
        {review.review_body.slice(0, 120)} ...
        <Link className="read-more" to={`/reviews/${review.review_id}`}>
          see more
        </Link>
      </p>
    </li>
  );
};

export default ReviewCard;
