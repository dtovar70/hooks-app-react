import { useEffect, useState, type PropsWithChildren } from "react"
import { users, type User } from "../user-mock.data";
import { createContext } from "react";

type AuthStatus = 'checking' | 'authenticated' | 'not-authenticated';

interface UserContextProps{
    //state
    authStatus: AuthStatus;
    isAuthenticated: boolean;
    user: User | null;

    //Methods
    login: (userId: number) => boolean;
    logout: () => void;
}

export const UserContext = createContext({} as UserContextProps);

export const UserContextProvider = ({children}: PropsWithChildren) => {

  const [authStatus, setAuthStatus] = useState<AuthStatus>('checking');
  const [user, setUser] = useState<User|null>(null);

  const handleLogin = (userId: number) =>{

    const user = users.find((user) => user.id === userId);

    if(!user){
        console.log(`User Not Found ${userId} `);
        setUser(null);
        setAuthStatus('not-authenticated');
        return false;
    }

    setUser(user);
    setAuthStatus('authenticated');
    localStorage.setItem('userId', userId.toString());
    return true;
  }

   const handleLogout = () =>{
    console.log('logout');
    setAuthStatus('not-authenticated');
    setUser(null);
    localStorage.removeItem('userId');
   }

   useEffect(() =>{
    const storeUserId = localStorage.getItem('userId');
    if(storeUserId){
        handleLogin(+storeUserId);
        return;
    }else{
        handleLogout();
    }
   },[]);

  return <UserContext value={{
        authStatus: authStatus,
        isAuthenticated: authStatus === 'authenticated',
        user: user,
        login: handleLogin,
        logout: handleLogout
    }}>
        {children}
    </UserContext>
}
