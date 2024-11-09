import PropTypes from "prop-types";

export function HostDashboardList({name, price, imageUrl}) {
    return (
        <div className="dashboard-details host-dashboard-list-container">
            <div style={{
                display:"flex"
            }}>
                <img style={{
                    width: "70px",
                    height: "70px",
                    borderRadius: "3px",
                    marginRight: "10px"
                }} src={imageUrl} alt={name}/>
                <div className="host-dashboard-list-items">
                    <h3>{name}</h3>
                    <p>${price}</p>
                </div>
            </div>
            <a href="#">Edit</a>
        </div>
    )
}

HostDashboardList.propTypes = {
    key: PropTypes.string,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired
}