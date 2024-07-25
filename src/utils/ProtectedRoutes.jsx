import { Outlet, Navigate } from "react-router-dom";

const protectedRoutes = () => {
    const userLogged = true;
    return userLogged ? <Outlet /> : <Navigate to ="/" />
}

export default protectedRoutes;