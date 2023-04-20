import { Link } from "react-router-dom";

const Header = (): JSX.Element => {
  return (
    <div className="Header">
      <Link to={`/reviews`}>
      <h1>House of Games</h1>
      </Link>
    </div>
  );
};

export default Header;
