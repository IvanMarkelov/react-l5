import React, { useContext } from "react";
import { Redirect } from "react-router";
import { AuthContext } from "../context/AuthContext";

export const Admin = () => {
  const { isLoggedIn } = useContext(AuthContext);

//   if (!isLoggedIn) {
//       return <Redirect to="/" />
//   }
  return (
    <div>
      <h1>Admin</h1>
    </div>
  );
};
