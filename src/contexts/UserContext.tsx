import { createContext, useState } from "react";
import {
  User,
  UserContextProps,
  UserContextType,
} from "../interfaces/user.interface";
import { fetchAllUsers, fetchUserByUsername } from "../utils/api";

export const UserContext = createContext<UserContextType>({
  signedInUser: null,
  users: null,
  signOut: () => {},
  signIn: () => {},
});

const UserProvider = ({ children }: UserContextProps) => {
  const [signedInUser, setSignedInUser] = useState<User | null>(null);
  const [userList, setUserList] = useState<User[]>([]);

  const signOut = () => {
    setSignedInUser(null);
  };

  const signIn = (username: string) => {
    fetchUserByUsername(username).then((response) => setSignedInUser(response));
  };

  const getUsers = () => {
    fetchAllUsers().then((response) => setUserList(response));
  };

  const value = {
    signedInUser,
    users: userList,
    signOut,
    signIn,
    getUsers
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
