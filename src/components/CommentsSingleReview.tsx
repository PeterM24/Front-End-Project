import "../styles/LoadingDotsDark.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Comment } from "../interfaces/comment.interface";
import { fetchComments } from "../utils/api";
import LoadingDotsDark from "./LoadingDotsDark";
import IndividualComment from "./IndividualComment";
import CommentForm from "./CommentForm";

const CommentsSingleReview = (): JSX.Element => {
  const { review_id } = useParams();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [commentList, setCommentList] = useState<Comment[]>([]);

  useEffect(() => {
    setIsLoading(true);
    fetchComments(review_id).then((response) => {
      setIsLoading(false);
      setCommentList(response);
    });
  }, []);

  return (
    <>
      <h3 className="comments-header">Comments:</h3>
      {isLoading ? (
        <LoadingDotsDark />
        ) : (
          <>
          {commentList.length === 0 ? (
            <>
            <p>No comments yet...</p>
            <CommentForm setCommentList={setCommentList} commentList={commentList} />
            </>
            ) : (
              <ul className="comments-ul">
              <CommentForm setCommentList={setCommentList} commentList={commentList} />
              {commentList.map((comment) => (
                <IndividualComment key={comment.comment_id} comment={comment} />
              ))}
            </ul>
          )}
        </>
      )}
    </>
  );
};

export default CommentsSingleReview;
