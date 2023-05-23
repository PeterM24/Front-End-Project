import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";

const Navbar = (): JSX.Element => {
  const navRef = useRef<HTMLElement>(null);

  const showNavBar = () => {
    navRef.current?.classList.toggle("responsive_nav");
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
        <button onClick={showNavBar}>
          <FaTimes />
        </button>
      </nav>
      <button onClick={showNavBar}>
        <FaBars />
      </button>
    </header>
  );
};

export default Navbar;
