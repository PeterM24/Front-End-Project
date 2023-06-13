import { Link } from "react-router-dom";
import "../styles/LandingPage.css";

const LandingPage = (): JSX.Element => {
  return (
    <div className="landing-page">
      <h1>
        welcome to <br /> HOUSE OF GAMES <br />
        <Link to={`/reviews`}>
        <button>browse reviews</button>
        </Link>
      </h1>
    </div>
  );
};

export default LandingPage;
