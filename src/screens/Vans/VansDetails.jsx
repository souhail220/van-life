import { useParams } from "react-router-dom";
import {useEffect, useState} from "react";

function VansDetails() {
  const vanId = useParams().id;

  const [van, setVan] = useState({});

  useEffect(() => {
    fetch("/api/vans/" + vanId)
        .then(res => res.json())
        .then(data => setVan(data.vans));
  }, [vanId]);

  console.log(van);
  return (
      <div>
        <a className="backToVans" href="/vans"><i style={{
            paddingRight: "7px",
        }} className="fa-solid fa-arrow-left"></i>Back to all vans</a>
          <div className="van-details">
          <img src={van.imageUrl} alt={van.name}/>
          <div className="van-details-content">
            <p className={`van-type ${van.type}`}>{van.type}</p>
            <h1>{van.name}</h1>
            <p className="price"><strong>${van.price}</strong>/day </p>
            <p className="description">{van.description}</p>
            <button>Rent this van</button>
          </div>
        </div>
      </div>
  );
}

export default VansDetails;
