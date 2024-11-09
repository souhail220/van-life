import { Outlet } from "react-router-dom";
//import Host from "../screens/Host/Host.jsx";
import HostNavbar from "../screens/Host/HostNavbar.jsx";

export function HostLayout() {
    return (
        <>
            <HostNavbar />
            <Outlet />
        </>
    )
}