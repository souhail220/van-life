import PropTypes from "prop-types";
import {NavLink} from "react-router-dom"

export default function VanBox({id, name, price, imageUrl, type}) {
    return (
        <NavLink style={{textDecoration: "none", color:"black"}} to={`${id}`}>
            <div className="van-box">
                <img className="van-box-img" src={imageUrl} alt={name}/>
                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                    <h3 className="van-box-title">{name}</h3>
                    <p className="van-box-price"><strong>${price}</strong>/day</p>
                </div>
                <p className={`van-type ${type}`}>{type}</p>
            </div>
        </NavLink>
    )
}

VanBox.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}