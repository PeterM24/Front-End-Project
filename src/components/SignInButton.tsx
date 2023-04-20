import { Link } from "react-router-dom";

const SignInButton = (): JSX.Element => {
  return (
    <Link to="/users">
      <button className="sign-in-header">Sign in</button>
    </Link>
  );
};

export default SignInButton;
