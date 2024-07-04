import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode";
import { getUser } from "../services/httpService";
import { getToken, removeToken } from "../slices/authSlice";
import Navbar from "../components/Navbar";

function AppLayout() {

    const [user, setUser] = useState({});

    const token = useSelector( getToken );
    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch( removeToken() );
    }

    useEffect( () => {

        const currentUser = async () => {
            if (token) {
                try {
                    const { id: userId } = jwtDecode(token);
                    const response = await getUser(userId);
                    setUser(response.data);
                }
                catch(e) {
                    onLogout();
                }
            }
        }

        currentUser();
    }, [token]);

    if(!token) {
        return <Navigate to="/login" />
    }

    return (
        <>
            <Navbar user={user} onLogout={onLogout} />
            <div className="container">
                <Outlet />
            </div>
        </>
    )
}

export default AppLayout;