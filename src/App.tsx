import "./App.css";
import Header from "./components/Header";
import ListOfReviews from "./components/ListReviews";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SingleReview from "./components/SingleReview";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/reviews" element={<ListOfReviews />} />
          <Route path="/reviews/:review_id" element={<SingleReview />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
