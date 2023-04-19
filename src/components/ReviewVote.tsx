import { useEffect, useState } from "react";

const ReviewVote = ({
    votes,
    review_id,
  }: {
    votes?: number;
    review_id?: number;
  }): JSX.Element => {
    const [vote, setVote] = useState<number>();
    const [hasVoted, setHasVoted] = useState<boolean>(false);
  
    const handleVoteUp = () => {
      if (!hasVoted) {
        setVote((prevVote) => (prevVote || 0) + 1);
        setHasVoted(true);
        // make API call to upvote review
      }
    };
  
    const handleVoteDown = () => {
      if (!hasVoted) {
        setVote((prevVote) => (prevVote || 0) - 1);
        setHasVoted(true);
        // make API call to downvote review
      }
    };
  
    useEffect(() => {
      // make API call to get current votes
      setVote(votes);
    }, [votes]);
  
    return (
      <div className="vote-buttons">
        <button onClick={handleVoteUp} disabled={hasVoted}>
          Vote up
        </button>
        <button onClick={handleVoteDown} disabled={hasVoted}>
          Vote down
        </button>
        <h4>Total votes: {vote || votes}</h4>
        {hasVoted && <p>Thank you for your vote!</p>}
      </div>
    );
  };

export default ReviewVote;
