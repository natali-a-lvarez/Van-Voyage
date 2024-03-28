import { useParams } from "react-router-dom";
import Navigation from "../components/Navigation";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./VanDetail.css";

export default function VanDetail() {
  const [van, setVan] = useState({});
  const [nights, setNights] = useState(1);
  const [insurance, setInsurance] = useState(100.0);
  const { vanId } = useParams();

  useEffect(() => {
    fetch(`http://127.0.0.1:5000/vans/${vanId}`)
      .then((res) => res.json())
      .then((data) => setVan(data));
  }, []);

  function calculateTotal(nightsTotal, insurancePrice, taxes) {
    return (
      Number(nightsTotal) +
      Number(insurancePrice) +
      Number(taxes)
    ).toFixed(2);
  }

  console.log(van.available);

  async function handleRent() {
    const response = await fetch(`http://127.0.0.1:5000/vans/${vanId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        available: false,
      }),
    });
    const data = await response.json();
  }

  return (
    <>
      <Navigation />
      <div className="van-detail-container">
        <Link className="van-detail_back-link" to="..">
          &larr; Back to all pages
        </Link>
        <img className="van-detail-img" src={van.imgUrl} alt={van.name} />
        <div className="van-detail-body">
          <div className="van-info">
            <h2>{van.name}</h2>
            <ul>
              <li>Sleeps {van.sleeps}</li>
              <li>Seats {van.seats}</li>
              <li>Kitchen: {van.kitchen ? "yes" : "no"}</li>
              <li>Bathroom: {van.bathroom ? "yes" : "no"}</li>
              <li>Hot water: {van.water ? "yes" : "no"}</li>
              <li>Length: {van.length}"</li>
            </ul>

            <h3>Vehicle Description</h3>
            <p>{van.description}</p>
          </div>
          <div className="van-pricing-container">
            <ul>
              <li className="calculator-row">
                <p className="calculator-left-col">
                  ${van.price} X {"  "}
                  <input onChange={(e) => setNights(e.target.value)} /> nights
                </p>
                <p className="calculator-right-col">
                  ${(nights ? van.price * nights : van.price).toFixed(2)}
                </p>
              </li>
              <li className="calculator-row">
                <p className="calculator-left-col">Insurace Fee</p>
                <p className="calculator-right-col">${insurance.toFixed(2)}</p>
              </li>
              <li className="calculator-row">
                <p className="calculator-left-col">Taxes</p>
                <p className="calculator-right-col">
                  ${(van.price * nights * 0.2).toFixed(2)}
                </p>
              </li>
              <li className="line"></li>
              <li className="calculator-row">
                <p className="calculator-left-col total">Total</p>
                <p className="calculator-right-col total">
                  $
                  {calculateTotal(
                    (nights ? van.price * nights : van.price).toFixed(2),
                    insurance,
                    van.price * nights * 0.2
                  )}
                </p>
              </li>
            </ul>
            {van.available && (
              <Link to=".." onClick={handleRent} className="btn detail-btn">
                {van.available ? "Rent now!" : "Not available"}
              </Link>
            )}
            {!van.available && (
              <Link className=" detail-btn unavailable-btn" disabled>
                Not available!
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
