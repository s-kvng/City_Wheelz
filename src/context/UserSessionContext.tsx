"use client";

import supabase from "@/config/superBaseClient";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { User, Session } from "@supabase/supabase-js";
import React, { useEffect, useState, createContext, useContext } from "react";

interface IUserSessionContext {
  user?: User;
  session?: Session;
}

export const UserSessionContext = createContext<IUserSessionContext>(
  null as any
);
export const UserSessionContextProvider = ({ children }) => {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [session, setSession] = useState<Session | undefined>(undefined);

  // subscribing to auth state changes
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        setSession(session);
        setUser(session?.user);
      }
    );

    return () => {
      authListener?.subscription.unsubscribe();
    }; // This effect will run only once when the component is mounted.
  }, [supabase.auth]);
  return (
    <UserSessionContext.Provider value={{ user, session }}>
      {children}
    </UserSessionContext.Provider>
  );
};

export const useUserSessionContext = () => {
  const context = useContext(UserSessionContext);
  return context;
};
