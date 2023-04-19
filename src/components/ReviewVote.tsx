import "../styles/VoteButtons.css"
import { useEffect, useState } from "react";
import { fetchSingleReview, patchVotes } from "../utils/api";

const ReviewVote = ({
  votes: initialVotes,
  review_id,
}: {
  votes?: number;
  review_id?: any;
}): JSX.Element => {
  const [votes, setVotes] = useState<number>(initialVotes || 0);
  const [hasVotedUp, setHasVotedUp] = useState<boolean>(false);
  const [hasVotedDown, setHasVotedDown] = useState<boolean>(false);

  const handleVoteUp = async () => {
    setVotes((prevVotes) => prevVotes + 1);
    setHasVotedUp(true);
    await patchVotes(review_id, 1);
  };

  const handleVoteDown = async () => {
    setVotes((prevVotes) => prevVotes - 1);
    setHasVotedDown(true);
    await patchVotes(review_id, -1);
  };

  const handleUndo = async () => {
    if (hasVotedUp) {
      setVotes((prevVotes) => prevVotes - 1);
      setHasVotedUp(false);
    }
    if (hasVotedDown) {
      setVotes((prevVotes) => prevVotes + 1);
      setHasVotedDown(false);
    }
  };

  return (
    <div className="vote-buttons">
      {hasVotedUp || hasVotedDown ? (
        <p>Thank you for your vote!</p>
      ) : (
        <p className="vote-header">Was this article interesting?</p>
      )}
      {hasVotedUp ? (
        <button onClick={handleUndo}>Undo</button>
      ) : (
        <button className="vote-up" onClick={handleVoteUp} disabled={hasVotedDown}>
          👍 Vote up!
        </button>
      )}
      {hasVotedDown ? (
        <button onClick={handleUndo}>Undo</button>
      ) : (
        <button className="vote-down" onClick={handleVoteDown} disabled={hasVotedUp}>
          👎 Vote down!
        </button>
      )}
      <h4 className="vote-msg">Total votes: {votes}</h4>
    </div>
  );
};

export default ReviewVote;
