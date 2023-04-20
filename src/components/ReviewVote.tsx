import "../styles/VoteButtons.css";
import { useEffect, useState } from "react";
import { fetchSingleReview, patchVotes } from "../utils/api";
import { ReviewVotesProps } from "../interfaces/review.interface";

const ReviewVote = ({ votes, review_id }: ReviewVotesProps): JSX.Element => {
  const [vote, setVotes] = useState<number>(votes || 0);
  const [hasVotedUp, setHasVotedUp] = useState<boolean>(false);
  const [hasVotedDown, setHasVotedDown] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleVoteUp = async () => {
    setVotes((prevVotes) => prevVotes + 1);
    setHasVotedUp(true);
    try {
      await patchVotes(review_id, 1);
      setErrorMsg("");
    } catch {
      setErrorMsg("Something went wrong...");
    }
  };

  const handleVoteDown = async () => {
    setVotes((prevVotes) => prevVotes - 1);
    setHasVotedDown(true);
    try {
      await patchVotes(review_id, -1);
      setErrorMsg("");
    } catch {
      setErrorMsg("Something went wrong...");
    }
  };

  const handleUndo = async () => {
    if (hasVotedUp) {
      setVotes((prevVotes) => prevVotes - 1);
      setHasVotedUp(false);
      setErrorMsg("");
    }
    if (hasVotedDown) {
      setVotes((prevVotes) => prevVotes + 1);
      setHasVotedDown(false);
      setErrorMsg("");
    }
  };

  return (
    <div className="vote-buttons">
      <p className="vote-header">
        {errorMsg
          ? errorMsg
          : hasVotedUp || hasVotedDown
          ? "Vote registered!"
          : "Was this article interesting?"}
      </p>
      <button
        className="vote-up"
        onClick={hasVotedUp ? handleUndo : handleVoteUp}
        disabled={hasVotedDown}
      >
        {errorMsg ? "Try again" : hasVotedUp ? "↩️ Undo" : "👍 Vote up!"}
      </button>
      <button
        className="vote-down"
        onClick={hasVotedDown ? handleUndo : handleVoteDown}
        disabled={hasVotedUp}
      >
        {hasVotedDown ? "↩️ Undo" : "👎 Vote down!"}
      </button>
      <h4 className="vote-count">Votes: {vote}</h4>
    </div>
  );
};

export default ReviewVote;
