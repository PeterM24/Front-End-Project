import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import {
  Comment,
  CommentToPost,
  SetCommentType,
} from "../interfaces/comment.interface";
import { postComment } from "../utils/api";
import { ReviewParams } from "../interfaces/review.interface";

const CommentForm = ({
  setCommentList,
  commentList,
}: SetCommentType): JSX.Element => {
  const { review_id } = useParams<ReviewParams>();
  const parsedReviewId = review_id ? parseInt(review_id) : 1000;

  const { signedInUser } = useContext(UserContext);

  const [comment, setComment] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const commentsCopyIfError = [...commentList];

  const commentToPost: CommentToPost = {
    username: signedInUser.username,
    body: comment,
  };

  const submitButtonText: string = isLoading ? "Submitting" : "Submit";

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      setIsLoading(true);
      const newComment: Comment = {
        comment_id: Date.now(),
        body: commentToPost.body,
        review_id: parsedReviewId,
        author: commentToPost.username,
        votes: 0,
        created_at: new Date().toISOString(),
      };
      setCommentList([newComment, ...commentList]);
      await postComment(commentToPost, review_id);
      setIsLoading(false);
      setError(false);
      setComment("");
    } catch {
      setCommentList(commentsCopyIfError);
      setIsLoading(false);
      setError(true);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="comment-form">
        <input
          className="input-comment"
          placeholder="Type your comment here..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          disabled={isLoading}
        />
        <button disabled={isLoading || !comment.length} className="comment-submit">{submitButtonText}</button>
      {error ? <p>Something went wrong! Please try again later...</p> : null}
      </form>
    </>
  );
};

export default CommentForm;
