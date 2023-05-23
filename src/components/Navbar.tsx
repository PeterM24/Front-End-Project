import { Link } from "react-router-dom";
import { FaBars, FaTimes} from "react-icons/fa";

const Navbar = (): JSX.Element => {
  return (
    <header>
      <Link to={`/reviews`}>
        <h3>House of Games</h3>
      </Link>
      <Link to={`/reviews`}>
        <a>Reviews</a>
      </Link>
      <Link to={`/users`}>
        <a>Users</a>
      </Link>
      <button>
        <FaTimes/>
      </button>
      <button>
        <FaBars />
      </button>
    </header>
  );
};

export default Navbar;