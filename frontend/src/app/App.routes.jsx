import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <h1 className="bg-red-400">Hello, World!</h1>
    },
    {
        path: '/login',
        element: <h1 className="bg-blue-400">Login</h1>
    },
    {
        path: '/register',
        element: <h1 className="bg-green-400">Register</h1>
    }
])