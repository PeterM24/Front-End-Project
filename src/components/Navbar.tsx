import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useContext, useRef, useState } from "react";
import "../styles/Navbar.css";
import "../styles/App.css";
import { UserContext } from "../contexts/UserContext";

const Navbar = (): JSX.Element => {
  const { signedInUser, signOut } = useContext(UserContext);
  const [menuVisible, setMenuVisible] = useState<boolean>(true);
  const navRef = useRef<HTMLElement>(null);

  const showNavBar = () => {
    navRef.current?.classList.toggle("responsive_nav");
    setMenuVisible((current: boolean) => !current);
  };

  return (
    <header>
      <Link to={`/reviews`}>
        <h3 className="main-header">HOUSE OF GAMES</h3>
      </Link>
      <nav ref={navRef}>
        <Link to={`/reviews`}>
          <a>Reviews</a>
        </Link>
        <Link to={`/users`}>
          <a>About</a>
        </Link>
        <Link to={`/users`}>
          <a>Users</a>
        </Link>
        {!menuVisible && (
          <button className="nav-btn nav-close-btn" onClick={showNavBar}>
            <FaTimes />
          </button>
        )}
        <button className="navbar-user">
          <img
            src={signedInUser.avatar_url}
            alt="user-img"
            className="rounded-user-img"
          />
        </button>
      </nav>
      {menuVisible && (
        <button className="nav-btn" onClick={showNavBar}>
          <FaBars />
        </button>
      )}
    </header>
  );
};

export default Navbar;
