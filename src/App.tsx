import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { Review } from "./interfaces/review.interface";
import ListOfReviews from "./components/ListReviews";
import Background from "./components/Background";

function App(): JSX.Element {
  const [reviewList, setReviewList] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <div className="App">
      <Header />
      <ListOfReviews
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        reviewList={reviewList}
        setReviewList={setReviewList}
      />
    </div>
  );
}

export default App;
