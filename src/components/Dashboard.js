import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Dashboard() {
  const { state } = useLocation();
  const { email } = state;
  return <div>Dashboard ${email} </div>;
}
