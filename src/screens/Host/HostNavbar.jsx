import "./Host.css"
import {NavLink} from "react-router-dom";

export default function HostNavbar() {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616",
    };

    return (
        <nav className="host-header">
            <NavLink end
                style={
                    ({isActive}) => (isActive ? activeStyles : null)
                }
                to="/host">Dashboard</NavLink>
            <NavLink
                style={
                    ({isActive}) => (isActive ? activeStyles : null)
                }
                to="income">Income</NavLink>
            <NavLink
                style={
                    ({isActive}) => (isActive ? activeStyles : null)
                }
                to="vans">Vans</NavLink>
            <NavLink
                style={
                    ({isActive}) => (isActive ? activeStyles : null)
                }
                to="reviews">Reviews</NavLink>
        </nav>
    )
}