import { Link } from "react-router-dom";
import "../styles/LandingPage.css";

const About = (): JSX.Element => {
  return (
    <div className="landing-page">
      <h1 style={{fontSize: 28}}>
        oops... <br />
        this page isn't finished yet, please visit again soon <br />
        <Link to={`/reviews`}>
          <button>browse reviews</button>
        </Link>
      </h1>
    </div>
  );
};

export default About;
