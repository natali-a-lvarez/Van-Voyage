import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Van from "../components/Van";
import "./root.css";

export default function Root() {
  const [vans, setVans] = useState([]);
  const [filter, setFilter] = useState("");
  const [filteredVans, setFilteredVans] = useState([]);
  const [spinner, setSpinner] = useState(true);

  async function fetchVans() {
    fetch("https://van-voyage-server-pwa5.onrender.com/vans")
      .then((res) => res.json())
      .then((data) => {
        setSpinner(false);
        setVans(data.vans);
      });
  }

  useEffect(() => {
    fetchVans();
  }, []);

  function filterVans(e) {
    setFilter(e.target.value);
    const result = vans.filter((van) => van.location === e.target.value);
    setFilteredVans(result);
  }

  return (
    <>
      <Navigation />
      <div className="van-list">
        <form className="filter-container">
          <select onChange={(e) => filterVans(e)}>
            <option value="" disabled selected>
              Filter by
            </option>
            <option value="">All</option>
            <option value="Seattle, Washington">Seattle, Washington</option>
            <option value="San Francisco, California">
              San Francisco, California
            </option>
            <option value="Denver, Colorado">Denver, Colorado</option>
          </select>
        </form>
        {spinner && <p className="error-message">loading...</p>}
        {/* {vans.length === 0 && !spinner && (
          <p className="error-message">No vans to rent.</p>
        )} */}
        {filter === "" &&
          vans.map((van) => (
            <Van key={van.id} van={van} fetchVans={fetchVans} />
          ))}
        {filter != "" &&
          filteredVans.length > 0 &&
          filteredVans.map((van) => (
            <Van key={van.id} van={van} fetchVans={fetchVans} />
          ))}
        {/* {filter != "" && filteredVans.length === 0 && (
          <p className="error-message">No vans for this location.</p>
        )} */}
      </div>
    </>
  );
}
