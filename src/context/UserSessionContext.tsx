"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { User, Session } from "@supabase/supabase-js";
import React, { useEffect, useState, createContext, useContext } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

interface IUserSessionContext {
  user?: User;
  session?: Session;
  loading?: boolean;
  isLoggedIn?: boolean;
}

export const UserSessionContext = createContext<IUserSessionContext>(
  null as any
);
export const UserSessionContextProvider = ({ children }) => {
  const router = useRouter();
  const path = usePathname();
  const [user, setUser] = useState<User | undefined>(undefined);
  const [session, setSession] = useState<Session | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const supabase = createClientComponentClient();

  // subscribing to auth state changes
  useEffect(() => {
    setLoading(true);
    try {
      const { data: authListener } = supabase.auth.onAuthStateChange(
        async (event, session) => {
          if (event === "INITIAL_SESSION") {
            // handle initial session
            console.log("initial session -> ", session);
            if (session) {
              setIsLoggedIn(true);
              setUser(session?.user);
              setSession(session);
              if (!path.startsWith("/admin")) {
                router.replace("/admin/dashboard");
              }
            } else {
              setIsLoggedIn(false);
              setUser(null);
              setSession(null);
              router.replace("/login");
            }
          } else if (event === "SIGNED_IN") {
            // handle sign in event
            console.log("event => ", event);
            console.log("session -> ", session);

            setSession(session);
            if (session) {
              setIsLoggedIn(true);
            }
            console.log("user -> ", session?.user);
            setUser(session?.user);

            if (!path.startsWith("/admin")) {
              router.replace("/admin/dashboard");
            }
          }
        }
      );

      return () => {
        authListener?.subscription.unsubscribe();
      }; // This effect will run only once when the component is mounted.
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  }, [supabase.auth]);

  // useEffect(() => {
  //   const getUser = async () => {
  //     const {
  //       data: { session },
  //     } = await supabase.auth.getSession();
  //     console.log("session -> ", session);
  //   };

  //   getUser();
  // }, []);

  return (
    <UserSessionContext.Provider value={{ user, session, loading, isLoggedIn }}>
      {children}
    </UserSessionContext.Provider>
  );
};

export const useUserSessionContext = () => {
  const context = useContext(UserSessionContext);
  return context;
};
