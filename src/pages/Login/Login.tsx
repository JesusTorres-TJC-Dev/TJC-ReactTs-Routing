import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PrivateRoutes, PublicRoutes, Roles } from "../../models";
import { createUser, resetUser } from "../../redux/states/user";
import { getMorty } from "../../services"

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(resetUser())
        navigate(`/${PublicRoutes.LOGIN}`, {replace: true})
    }, [])

    // Login function
    const login = async () => {
        try {
            const result = await getMorty();
            dispatch(createUser({ ...result, rol: Roles.ADMIN }))
            navigate(`/${PrivateRoutes.PRIVATE}`, {replace: true})
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <div>
            <h2>HOLA ESTE ES EL LOGIN</h2>
            <button onClick={login}>LOGIN</button>
        </div>
    )
}

export default Login