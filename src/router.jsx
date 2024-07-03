import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import GuestLayout from "./layouts/GuestLayout";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

const router = createBrowserRouter([
    // rotte da loggato (da proteggere)
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <DashboardPage />
            }
        ]
    },
    // rotte pubbliche
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: 'login',
                element: <LoginPage />
            },
            {
                path: 'register',
                element: <RegisterPage />
            },
        ]
    },
])

export default router;