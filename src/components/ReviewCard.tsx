import { Review } from "../interfaces/review.interface";
import { Link } from "react-router-dom";

const ReviewCard = ({ review }: { review: Review }): JSX.Element => {
  const date = new Date(review.created_at).toLocaleString();

  return (
    <li className="list-item">
      <img
        src={review.review_img_url}
        alt={`image for ${review.title}`}
        className="list-item-image"
      />
      <Link to={`/reviews/${review.review_id}`}>
        <h3 className="list-item-header">{review.title.length > 40 ? review.title.slice(0, 37) + "..." : review.title}</h3>
      </Link>
      <h5 className="list-item-owner">{review.owner}</h5>
      <p className="list-item-body">
        {review.review_body.slice(0, 200)} ...
        <Link className="read-more" to={`/reviews/${review.review_id}`}>read more</Link>
      </p>
      <p className="list-item-date">Date posted: {date}</p>
    </li>
  );
};

export default ReviewCard;
