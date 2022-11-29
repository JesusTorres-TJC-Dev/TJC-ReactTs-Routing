import { lazy } from "react"
import { Navigate, Route } from "react-router-dom"
import { PrivateRoutes } from "../../models"
import { RoutesWithNotFount } from "../../utilities"
// import { Dashboard } from "./Dashboard"
// import { Home } from "./Home"

const Dashboard = lazy(() => import('./Dashboard/Dashboard'))
const Home = lazy(() => import('./Home/Home'))

const Private = () => {
  return (
    <RoutesWithNotFount>
        <Route path="/" element={<Navigate to={PrivateRoutes.DASHBOARD}/>}/>
        <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard/>}/>
        <Route path={PrivateRoutes.HOME} element={<Home/>}/>
    </RoutesWithNotFount>
  )
}

export default Private