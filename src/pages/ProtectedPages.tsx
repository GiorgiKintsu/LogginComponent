import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedPages() {
  const permission = JSON.parse(localStorage.getItem("token") || "{}");
  console.log(permission);
  
  return (
    permission.data?.token ? <Outlet /> : <Navigate to='/autorization' />
  )
}
