import React from "react";
import { AuthError } from "../pages";

interface AuthGuardProps {
  children: React.ReactNode;
}

function AuthGuard({ children }: AuthGuardProps) {
  localStorage.setItem("token", "jahfkjabkhdbfkahfkah");
  const token = localStorage.getItem("token");

  console.log(token);

  return <div>AuthGuard</div>;
}

export default AuthGuard;
