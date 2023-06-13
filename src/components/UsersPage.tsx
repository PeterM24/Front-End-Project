import { useContext, useEffect, useState } from "react";
import { fetchAllUsers } from "../utils/api";
import { User } from "../interfaces/user.interface";
import "../styles/Users.css";
import { UserContext } from "../contexts/UserContext";
import { FiUsers } from "react-icons/fi"

const UsersPage = (): JSX.Element => {
  const [userList, setUserList] = useState<User[]>([]);
  const {signIn, signedInUser} = useContext(UserContext)

  useEffect(() => {
    fetchAllUsers().then((response) => {
      setUserList(response);
    });
  }, []);

  return (
    <div>
      <h2 className="page-title"><FiUsers className="subhead-icon"/>Select your user below</h2>
      <p className="user-signed-in-msg">You are currently signed in as <b>{signedInUser.name}</b></p>
      <ul className="user-list-container">
        {userList.map((user) => {
          return (
            <button onClick={() => {signIn(user.username)}} key={user.username} className="user-box">
              <div className="user-button">
                <li key={user.username} className="user-list-item">
                  <img
                    src={user.avatar_url}
                    alt={user.name}
                    className="rounded"
                  />
                </li>
              </div>
              <p className="username">{user.name}</p>
            </button>
          );
        })}
      </ul>
    </div>
  );
};
export default UsersPage;
