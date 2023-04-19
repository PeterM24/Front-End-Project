import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Comment } from "../interfaces/comment.interface";
import { fetchComments } from "../utils/api";

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
      <ul className="comments-ul">
        {
            commentList.map((comment) => {
                return <li key={comment.comment_id}>
                    <h3>{comment.author}</h3>
                    <p>{comment.body}</p>
                    <p>{comment.created_at}</p>
                    <p>{comment.votes}</p>
                </li>
            })
        }
      </ul>
  );
};

export default CommentsSingleReview;