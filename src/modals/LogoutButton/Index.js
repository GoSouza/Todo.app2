import React from "react";
import useAuth from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  const handleSignout = () => {
    signout();
    navigate("/");
  };

  return (
    <button className="btn btn-primary mt-2" onClick= {handleSignout}>
    Sair
  </button>
  );
};

export default LogoutButton;
