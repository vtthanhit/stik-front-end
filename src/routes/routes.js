import HeaderOnly from '../layouts/HeaderOnly';
import LoginPage from '../pages/auth/Login/LoginPage';
import UserPage from '../pages/User/UserPage';

const publicRoutes = [
    { path: '/login', component: LoginPage, layout: HeaderOnly }
]

const privateRoutes = [
    { path: '/dashboard/user', component: UserPage }
]

export { publicRoutes, privateRoutes };