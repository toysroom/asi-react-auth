import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { getToken } from "../slices/authSlice";
import Language from "../components/Language";

function GuestLayout() {

    const token = useSelector( getToken );

    if (token) {
        return <Navigate to="/" />
    }

    return (
        <>
            <div style={
                {height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
                }
            }>     
                <div style={ { width: '500px' }}>   
                    <Language />
                    <Outlet />
                </div>
            </div> 
        </>
    )
}

export default GuestLayout;