import { createBrowserRouter } from 'react-router-dom';
import ProtectedRoutes from '../utils/ProtectedRoutes';
import LoginPage from '../features/auth/pages/LoginPage';
import RegisterPage from '../features/auth/pages/RegisterPage';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <ProtectedRoutes><h1 className="bg-red-400">Home</h1></ProtectedRoutes>
    },
    {
        path: '/login',
        element: <LoginPage />
    },
    {
        path: '/register',
        element: <RegisterPage />
    }
])