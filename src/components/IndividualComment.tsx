import { useState } from "react";
import { Comment } from "../interfaces/comment.interface";

const IndividualComment = ({ comment }: { comment: Comment }): JSX.Element => {
  const date = new Date(comment.created_at).toLocaleString();

  return (
    <>
      <li className="individual-comment">
        <h3 className="comment-heading">{comment.author}</h3>
        <p className="comment-date">Posted: {date}</p>
        <p className="comment-body">{comment.body}</p>
        <p className="comment-votes">Votes: {comment.votes}</p>
      </li>
    </>
  );
};

export default IndividualComment;
