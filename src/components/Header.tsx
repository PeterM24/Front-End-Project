import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import SignInButton from "./SignInButton";
import "../styles/App.css";

const Header = (): JSX.Element => {
  const { signedInUser, signOut } = useContext(UserContext);
  return (
    <div className="Header">
      <Link to={'/users'}>
      <button className="header-user-button">
        <img
          src={signedInUser.avatar_url}
          alt="user-img"
          className="rounded-user-img"
        />
      </button>
      </Link>
      <Link to={`/reviews`}>
        <h1>House of Games</h1>
      </Link>
    </div>
  );
};

export default Header;
