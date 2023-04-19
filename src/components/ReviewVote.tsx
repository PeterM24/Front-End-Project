const ReviewVote = ({
  votes,
  review_id,
}: {
  votes?: number;
  review_id?: number;
}): JSX.Element => {
    
  return (
    <div className="vote-buttons">
      <button>Vote up</button>
      <button>Vote down</button>
      <h4>Total votes: {votes}</h4>
    </div>
  );
};

export default ReviewVote;
