import LoginPage from '../pages/auth/Login';
import HeaderOnlyLayout from '../layouts/HeaderOnly';

export const publicRoutes = [{ path: '/', component: LoginPage, layout: HeaderOnlyLayout }];
