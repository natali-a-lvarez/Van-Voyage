import "./Van.css";
import { render } from "react-dom";
import { Speedometer, Location } from "react-ionicons";
import { Link, NavLink } from "react-router-dom";

export default function Van({ van }) {
  return (
    <div className="van-card">
      <img className="card-img" src={van.imgUrl} alt={van.name} />
      <div className="card-body">
        <div className="card-titles">
          <h3 className="card-title">{van.name}</h3>
          <h3 className="card-title">
            ${van.price.toFixed(2)}
            <span className="light-text"> /night</span>
          </h3>
        </div>
        <p className="card-features">
          Sleeps {van.sleeps} • Seats {van.seats} • Length: {van.length}" •
          Kitchen: {van.kitchen ? "yes" : "no"} • Bathroom:{" "}
          {van.bathroom ? "yes" : "no"}
        </p>
        <div className="card-miles">
          <Speedometer color="#3e3e3e" />
          <p className="card-icon_text">
            {" "}
            {van.miles} miles included per night
          </p>
        </div>
        <div className="card-location">
          <Location color="#3e3e3e" />
          <p className="card-icon_text"> {van.location}</p>
        </div>
        <NavLink
          to={`/van/${van.id}`}
          className={!van.available ? "align-end unavailable-btn" : "card-btn "}
        >
          {!van.available ? "Not available" : "Book now!"}
        </NavLink>
      </div>
    </div>
  );
}
