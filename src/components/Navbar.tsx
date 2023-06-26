import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useContext, useRef, useState } from "react";
import "../styles/Navbar.css";
import "../styles/App.css";
import { UserContext } from "../contexts/UserContext";
import { IoDiceSharp } from "react-icons/io5";

const Navbar = (): JSX.Element => {
  const { signedInUser, signOut } = useContext(UserContext);
  const [menuVisible, setMenuVisible] = useState<boolean>(true);
  const navRef = useRef<HTMLElement>(null);

  const showMenu = () => {
    navRef.current?.classList.toggle("responsive_nav");
    setMenuVisible((current: boolean) => !current);
  };

  return (
    <header>
      <Link to={`/reviews`}>
        <h3 className="main-header">
          <IoDiceSharp className="logo-icon" />
          HOUSE OF GAMES
        </h3>
      </Link>
      <nav ref={navRef}>
        <Link to={`/reviews`}>
          <a onClick={() => !menuVisible && showMenu()}>Reviews</a>
        </Link>
        <Link to={`/about`}>
          <a onClick={() => !menuVisible && showMenu()}>About</a>
        </Link>
        <Link to={`/users`}>
          <a onClick={() => !menuVisible && showMenu()}>Users</a>
        </Link>
        {!menuVisible && (
          <button className="nav-btn nav-close-btn" onClick={showMenu}>
            <FaTimes />
          </button>
        )}
        <Link to={`/users`}>
          <a className="navbar-username" onClick={showMenu}>{signedInUser.username}</a>
        </Link>
        <Link to={`/users`} style={{background: "none"}}>
        <button className="navbar-user" onClick={showMenu}>
          <img
            src={signedInUser.avatar_url}
            alt="user-img"
            className="rounded-user-img"
          />
        </button>
        </Link>
        <Link to={`/users`}>
          <a className="menu-username">Signed in as <b>{signedInUser.username}</b></a>
        </Link>
        <Link to={`/users`}>
        <button className="switch-user" onClick={showMenu}>
          Switch user
        </button>
        </Link>
      </nav>
      {menuVisible && (
        <button className="nav-btn" onClick={showMenu}>
          <FaBars />
        </button>
      )}
    </header>
  );
};

export default Navbar;
