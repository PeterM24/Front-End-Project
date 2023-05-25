import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import "../styles/Navbar.css"

const Navbar = (): JSX.Element => {
  const navRef = useRef<HTMLElement>(null);

  const showNavBar = () => {
    navRef.current?.classList.toggle("responsive_nav");
  };

  const hideNavbar =()=>{
    navRef.current?.classList.remove("responsive_nav")
  };

  return (
    <header>
      <Link to={`/reviews`}>
        <h3>House of Games</h3>
      </Link>
      <nav ref={navRef}>
        <Link to={`/reviews`}>
          <a>Reviews</a>
        </Link>
        <Link to={`/users`}>
          <a>Users</a>
        </Link>
        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavBar}>
        <FaBars />
      </button>
    </header>
  );
};

export default Navbar;
