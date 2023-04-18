import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { Review } from "./interfaces/review.interface";
import ListOfReviews from "./components/ListReviews";
import Background from "./components/Background";

function App(): JSX.Element {
  const [reviewList, setReviewList] = useState<Review[]>([]);

  return (
    <div className="App">
      <Background />
      <Header />
      <ListOfReviews reviewList={reviewList} setReviewList={setReviewList} />
    </div>
  );
}

export default App;
