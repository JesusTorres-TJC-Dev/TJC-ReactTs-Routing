import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"
import { PublicRoutes } from "../../models";
import { resetUser } from "../../redux/states/user";

const Logout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const logOut = () => {
        dispatch(resetUser())
        navigate(`/${PublicRoutes.LOGIN}`, {replace: true})
    }
    return (
        <button onClick={() => logOut()}>Logout</button>
    )
}

export default Logout