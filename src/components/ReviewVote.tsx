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
  const [voteType, setVoteType] = useState<"up" | "down" | undefined>();
  const [hasVoted, setHasVoted] = useState<boolean>(false);

  const handleVoteUp = async () => {
    if (!hasVoted || voteType === "down") {
      setVotes((prevVotes) => prevVotes + 1);
      setVoteType("up");
      setHasVoted(true);
      await patchVotes(review_id, 1);
    }
  };

  const handleVoteDown = async () => {
    if (!hasVoted || voteType === "up") {
      setVotes((prevVotes) => prevVotes - 1);
      setVoteType("down");
      setHasVoted(true);
      await patchVotes(review_id, -1);
    }
  };

  return (
    <div className="vote-buttons">
      <button onClick={handleVoteUp} disabled={hasVoted && voteType === "up"}>
        Vote up
      </button>
      <button
        onClick={handleVoteDown}
        disabled={hasVoted && voteType === "down"}
      >
        Vote down
      </button>
      <h4>Total votes: {votes}</h4>
      {hasVoted && <p>Thank you for your vote!</p>}
    </div>
  );
};

export default ReviewVote;
