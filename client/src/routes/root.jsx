import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Van from "../components/Van";
import "./root.css";

export default function Root() {
  const [vans, setVans] = useState([]);
  const [filter, setFilter] = useState("");

  async function fetchVans() {
    fetch("http://127.0.0.1:5000/vans")
      .then((res) => res.json())
      .then((data) => {
        setVans(data.vans);
      });
  }

  useEffect(() => {
    fetchVans();
  }, []);

  function filterVans(van) {}

  return (
    <>
      <Navigation />
      <div className="van-list">
        {vans.length === 0 && <p className="error-message">No vans to rent.</p>}
        <div className="filter-container">
          <form>
            <label>Filter by</label>
            <select onChange={(e) => setFilter(e.target.value)}>
              <option value="">All</option>
              <option value="Seattle, Washington">Seattle, Washington</option>
              <option value="San Francisco, California">
                San Francisco, California
              </option>
              <option value="Denver, Colorado">Denver, Colorado</option>
            </select>
          </form>
        </div>
        {vans.map((van) => (
          <Van key={van.id} van={van} fetchVans={fetchVans} />
        ))}
      </div>
    </>
  );
}
