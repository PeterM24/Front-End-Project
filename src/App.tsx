import "./styles/App.css";
import "./index.css"
import ListOfReviews from "./components/ListReviews";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SingleReview from "./components/SingleReview";
import UsersPage from "./components/UsersPage";
import Navbar from "./components/Navbar";
import Background from "./components/Background";
import LandingPage from "./components/LandingPage";
import About from "./components/About";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <div className="App">
        <Background />
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/reviews" element={<ListOfReviews />} />
          <Route
            path="/reviews/category/:category"
            element={<ListOfReviews />}
          />
          <Route path="/reviews/:review_id" element={<SingleReview />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
