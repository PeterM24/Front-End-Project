import "../styles/LoadingDotsDark.css"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Comment } from "../interfaces/comment.interface";
import { fetchComments } from "../utils/api";

const CommentsSingleReview = (): JSX.Element => {
  const { review_id } = useParams();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [commentList, setCommentList] = useState<Comment[]>([]);
  const [date, setDate] = useState<string>("");

  useEffect(() => {
    setIsLoading(true);
    fetchComments(review_id).then((response) => {
      setIsLoading(false);
      setCommentList(response);
    });
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="lds-ellipsis-dark">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        <ul className="comments-ul">
          <h3>Comments:</h3>
          {commentList.map((comment) => {
            const date = new Date(comment.created_at).toLocaleString();
            return (
              <li key={comment.comment_id} className="individual-comment">
                <h3 className="comment-heading">{comment.author}</h3>
                <p className="comment-date">Posted: {date}</p>
                <p className="comment-body">{comment.body}</p>
                <p className="comment-votes">Votes: {comment.votes}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default CommentsSingleReview;
