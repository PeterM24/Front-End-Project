import { createContext, useState } from "react";
import {
  User,
  UserContextProps,
  UserContextType,
} from "../interfaces/user.interface";
import { fetchUserByUsername } from "../utils/api";

const DefaultUser = {
  username: "jessjelly",
  name: "Jess Jelly",
  avatar_url: "https://vignette.wikia.nocookie.net/mrmen/images/4/4f/MR_JELLY_4A.jpg/revision/latest?cb=20180104121141",
};

export const UserContext = createContext<UserContextType>({
  signedInUser: DefaultUser,
  signOut: () => {},
  signIn: () => {},
});


export const UserProvider = ({ children }: UserContextProps): JSX.Element => {
  const [signedInUser, setSignedInUser] = useState<User>(DefaultUser);

  const signOut = () => {
    setSignedInUser(DefaultUser);
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
