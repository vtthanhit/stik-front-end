import HeaderOnly from '../layouts/HeaderOnly';
import LoginPage from '../pages/auth/Login/LoginPage';

const publicRoutes = [
    { path: '/login', component: LoginPage, layout: HeaderOnly }
]

export { publicRoutes };