import { useEffect, useState } from "react";
import "./Vans.css";
import VanBox from "./VanBox.jsx";

function Vans() {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans))
        .catch(error => console.log(error))
  }, []);

  const vansList = vans.map((van) => <VanBox key={van.id} id={van.id} name={van.name} price={van.price} imageUrl={van.imageUrl} description={van.description} type={van.type}/>)

  return (
    <div className="van-container">
      <h1>Explore our van options</h1>
      <header>
        <button className="van-filter">Simple</button>
        <button className="van-filter">Luxury</button>
        <button className="van-filter">Rugged</button>
        <button
          style={{
            cursor: "pointer",
            border: "none",
            fontSize: "21px",
            fontWeight: "500",
            lineHeight: "33.65px",
            textAlign: "left",
            backgroundColor: "transparent",
            textDecoration: "underline",
          }}
        >
          Clear Filters
        </button>
      </header>
        <div className="vans-list">
            {vansList}
        </div>
    </div>
  );
}

export default Vans;
