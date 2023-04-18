import { Review } from "../interfaces/review.interface";

const ReviewCard = ({ review }: { review: Review }): JSX.Element => {
  return (
    <li key={review.review_id} className="list-item">
      <h3 className="list-item-header">{review.title}</h3>
      <h5 className="list-item-designer">{review.designer}</h5>
      <h5 className="list-item-owner">{review.owner}</h5>
      <img src={review.review_img_url} alt={`image for ${review.title}`} className="list-item-image"/>
      <p className="list-item-body">{review.review_body.slice(1, 300)} ... read more</p>
      <p className="list-item-date">Date posted: {review.created_at}</p>
    </li>
  );
};

export default ReviewCard;
