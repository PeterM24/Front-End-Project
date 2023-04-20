import { createContext, useState } from "react";
import {
  User,
  UserContextProps,
  UserContextType,
} from "../interfaces/user.interface";
import { fetchUserByUsername } from "../utils/api";

const GuestUser = {
  username: "",
  name: "",
  avatar_url: "https://stbannandale.syd.catholic.edu.au/wp-content/uploads/sites/19/2019/09/Person-Icon.jpg",
};

export const UserContext = createContext<UserContextType>({
  signedInUser: GuestUser,
  signOut: () => {},
  signIn: () => {},
});


export const UserProvider = ({ children }: UserContextProps): JSX.Element => {
  const [signedInUser, setSignedInUser] = useState<User>(GuestUser);

  const signOut = () => {
    setSignedInUser(GuestUser);
  };

  const signIn = (username: string) => {
    fetchUserByUsername(username).then((response) => setSignedInUser(response));
  };

  const value = {
    signedInUser,
    signOut,
    signIn,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
