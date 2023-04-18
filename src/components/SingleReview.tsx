import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleReview } from "../utils/api";
import { Review } from "../interfaces/review.interface";

const SingleReview = (): JSX.Element => {
  const { review_id } = useParams();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [singleReview, setSingleReview] = useState<Review>();

  useEffect(() => {
    setIsLoading(true);
    fetchSingleReview(review_id).then((response) => {
      setIsLoading(false);
      setSingleReview(response);
    });
  }, []);

  console.log(singleReview)

  return <></>
//   return (
//     <div key={review.review_id} className="individual-review">
//       <h3 className="list-item-header">{review.title}</h3>
//       <h5 className="list-item-designer">{review.designer}</h5>
//       <h5 className="list-item-owner">{review.owner}</h5>
//       <img
//         src={review.review_img_url}
//         alt={`image for ${review.title}`}
//         className="list-item-image"
//       />
//       <p className="list-item-body">
//         {review.review_body.slice(1, 300)} ... read more
//       </p>
//       <p className="list-item-date">Date posted: {date}</p>
//     </div>
//   );
};

export default SingleReview;
