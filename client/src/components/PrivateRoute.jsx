import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute() {
  const { currentUser } = useSelector((state) => state.user);

  // If user is NOT logged in → redirect to /signin
  return currentUser ? <Outlet /> : <Navigate to="/signin" />;
}
