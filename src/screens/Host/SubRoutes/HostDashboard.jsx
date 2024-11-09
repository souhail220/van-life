import "../Host.css"
import { BsStarFill } from "react-icons/bs"
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {HostDashboardList} from "../components/HostDashboardList.jsx";

export default function HostDashboard() {

    const [vans, setVans] = useState([]);

    useEffect(() => {
       fetch("/api/vans")
           .then(res => res.json())
           .then(data => setVans(data.vans))
    }, []);

    const vansList = vans.map((van) => <HostDashboardList
        key={van.id}
        name={van.name}
        price={van.price}
        imageUrl={van.imageUrl}
    />);

    //console.log(vans)
    return (
        <div className="host-container">

            <div className="welcome-dashboard">
                <div className="dashboard-details">
                    <div className="dashboard-content">
                        <h2 >Welcome!</h2>
                        <p>Income in last <u>30 days</u></p>
                        <strong>$2.260</strong>
                    </div>
                    <Link to="/details">Details</Link>
                </div>
            </div>
            <div className="reviewScore-dashboard">
                <div className="dashboard-details">
                    <div className="dashboard-review">
                        <h2>Review score</h2>
                        <div>
                            <BsStarFill className="star"/>
                            <p>
                                <strong>5.0</strong>/5
                            </p>
                        </div>
                    </div>
                    <Link to="/details">Details</Link>
                </div>
            </div>
            <div className="listedVans-dashboard">
                <div className="dashboard-details welcome-dashboard">
                    <h2>Your listed vans</h2>
                    <a href="#">View All</a>
                </div>
                <div className="host-dashboard-list welcome-dashboard" >
                    {vansList}
                </div>
            </div>
        </div>
    )
}