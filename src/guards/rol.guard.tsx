import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom";
import { PrivateRoutes, Roles } from "../models";
import { AppStore } from "../redux/store"

interface Props {
    rol: Roles
}

const rolGuard = ({ rol }: Props) => {
    const userState = useSelector((store: AppStore) => store.user);
    return userState.rol === rol ? <Outlet /> : <Navigate replace to={PrivateRoutes.PRIVATE}/>
}

export default rolGuard