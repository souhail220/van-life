import { NavLink } from "react-router-dom";
import "../screens/Home/Home.css";

function Header() {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };
  return (
    <header
      className="home-layout"
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <NavLink
        to="/"
        style={{
          fontSize: "36px",
          fontWeight: "900",
          lineHeight: "40.27px",
          textAlign: "left",
          color: "black",
          textDecoration: "none",
        }}
      >
        #VANLIFE
      </NavLink>
      <nav className="header-nav">
        <NavLink
          style={({ isActive }) => (isActive ? activeStyles : null)}
          to="/host"
        >
          Host
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyles : null)}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyles : null)}
          to="/vans"
        >
          Vans
        </NavLink>
      </nav>
    </header>
  );
}
export default Header;
