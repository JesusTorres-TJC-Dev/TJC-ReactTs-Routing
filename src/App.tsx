import { lazy, Suspense } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Navigate, Route } from 'react-router-dom'
import './App.css'
import { Logout } from './components'
import { AuthGuard, RolGuard } from './guards'
import { PrivateRoutes, PublicRoutes, Roles } from './models'
import { Dashboard, Home } from './pages'
// import { Login } from './pages'
// import Private from './pages/Private/Private'
import store from './redux/store'
import { RoutesWithNotFount } from './utilities'

const Login = lazy(() => import('./pages/Login/Login'))
const Private = lazy(() => import('./pages/Private/Private'))

function App() {
  return (
    <div className="App">
      <Suspense fallback={<>Cargando...</>}>
        <Provider store={store}>
          <BrowserRouter>
            <Logout />
            <RoutesWithNotFount>
              <Route path='/' element={<Navigate to={PrivateRoutes.PRIVATE}/>}/>
              <Route path={PublicRoutes.LOGIN} element={<Login />}/>
              <Route element={<AuthGuard privateValidation={true}/>}>
                <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private />}/>
              </Route>
              <Route element={<RolGuard rol={Roles.ADMIN}/>}>
                <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard/>}/>
              </Route>
              <Route element={<RolGuard rol={Roles.USER}/>}>
              <Route path={PrivateRoutes.HOME} element={<Home/>}/>
              </Route>
            </RoutesWithNotFount>
          </BrowserRouter>
        </Provider>
      </Suspense>
    </div>
  )
}

export default App
