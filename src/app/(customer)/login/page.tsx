import Login from "@/features/Auth/Login";
import React from "react";

import { UserSessionContextProvider } from "@/context/UserSessionContext";

const LoginPage = () => {
  return (
    <UserSessionContextProvider>
      <div>
        <Login />
      </div>
    </UserSessionContextProvider>
  );
};

export default LoginPage;
