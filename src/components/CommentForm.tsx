import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { CommentToPost } from "../interfaces/comment.interface";
import { postComment } from "../utils/api";

type ReviewParams = {
  review_id: string
}

const CommentForm = (): JSX.Element => {
  const { review_id } = useParams<ReviewParams>();
  const [comment, setComment] = useState<string>("");
  const [newComment, setNewcomment] = useState<Comment>();
  const { signedInUser } = useContext(UserContext);

  const commentToPost: CommentToPost = {
    username: signedInUser.username,
    body: comment,
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(review_id);
    
    try {
      await postComment(commentToPost, review_id);
      setComment("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={comment} onChange={(e) => setComment(e.target.value)} />
      <button>Submit</button>
    </form>
  );
};

export default CommentForm;
