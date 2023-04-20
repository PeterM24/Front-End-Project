import { ReactNode } from "react";

export interface User {
  username: string;
  name: string;
  avatar_url: string;
}

export interface UserContextType {
    signedInUser: User | null;
    users: User[] | null;
    signOut: () => void;
    signIn: (username: string) => void;
  }
  
  
export interface UserContextProps {
    children: ReactNode;
  }