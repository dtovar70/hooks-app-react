import { useState, type PropsWithChildren } from "react"
import type { User } from "../user-mock.data";

type AuthStatus = 'checking' | 'authenticated' | 'not-authenticated';

interface UserContextProps{
    //state
    authStatus: AuthStatus;
    user: User | null;

    //Methods
    login: (userId: number) => boolean;
    logout: () => void;
}

//quede aqui colocando los método del login y del logout

export const UserContextProvider = ({children}: PropsWithChildren) => {

    const [name, setName] = useState('Dario')

  return (
    <>
        {children}
    </>
  )
}
