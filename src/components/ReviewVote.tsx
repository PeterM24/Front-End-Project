import "../styles/VoteButtons.css";
import { useEffect, useState } from "react";
import { fetchSingleReview, patchVotes } from "../utils/api";
import { ReviewVotesProps } from "../interfaces/review.interface";

const ReviewVote = ({ votes, review_id }: ReviewVotesProps): JSX.Element => {
  const [vote, setVotes] = useState<number>(votes || 0);
  const [hasVotedUp, setHasVotedUp] = useState<boolean>(false);
  const [hasVotedDown, setHasVotedDown] = useState<boolean>(false);
  const [errorVotingUp, setErrorVotingUp] = useState("");
  const [errorVotingDown, setErrorVotingDown] = useState("");

  const handleVoteUp = async () => {
    setVotes((prevVotes) => prevVotes + 1);
    setHasVotedUp(true);
    try {
      await patchVotes(review_id, 1);
      setErrorVotingUp("");
    } catch {
      setErrorVotingUp("Something went wrong...");
      setVotes((prevVotes) => prevVotes - 1);
    }
  };

  const handleVoteDown = async () => {
    setVotes((prevVotes) => prevVotes - 1);
    setHasVotedDown(true);
    try {
      await patchVotes(review_id, -1);
      setErrorVotingDown("");
    } catch {
      setErrorVotingDown("Something went wrong...");
      setVotes((prevVotes) => prevVotes + 1);
    }
  };

  const handleUndo = async () => {
    if (!errorVotingUp && hasVotedUp) {
      setVotes((prevVotes) => prevVotes - 1);
      setHasVotedUp(false);
      setErrorVotingUp("");
    }
    if (!errorVotingDown && hasVotedDown) {
      setVotes((prevVotes) => prevVotes + 1);
      setHasVotedDown(false);
      setErrorVotingDown("");
    }
    if (errorVotingUp) {
      setHasVotedUp(false);
      setErrorVotingUp("");
    }
    if (errorVotingDown) {
      setHasVotedDown(false);
      setErrorVotingDown("");
    }
  };

  return (
    <div className="vote-buttons">
      <p className="vote-header">
        {errorVotingUp || errorVotingDown
          ? errorVotingUp || errorVotingDown
          : hasVotedUp || hasVotedDown
          ? "Vote registered!"
          : "Was this article interesting?"}
      </p>
      <button
        className="vote-up"
        onClick={hasVotedUp ? handleUndo : handleVoteUp}
        disabled={hasVotedDown}
      >
        {errorVotingUp ? "Try again" : hasVotedUp ? "↩️ Undo" : "👍 Vote up!"}
      </button>
      <button
        className="vote-down"
        onClick={hasVotedDown ? handleUndo : handleVoteDown}
        disabled={hasVotedUp}
      >
        {errorVotingDown
          ? "Try again"
          : hasVotedDown
          ? "↩️ Undo"
          : "👎 Vote down!"}
      </button>
      <h4 className="vote-count">Votes: {vote}</h4>
    </div>
  );
};

export default ReviewVote;
