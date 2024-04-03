import Navigation from "../components/Navigation";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./AddVan.css";

export default function AddVan() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [miles, setMiles] = useState("");
  const [kitchen, setKitchen] = useState("");
  const [bathroom, setBathroom] = useState("");
  const [sleeps, setSleeps] = useState("");
  const [seats, setSeats] = useState("");
  const [water, setWater] = useState("");
  const [length, setLength] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  function toBool(str) {
    if (str == "true") {
      return true;
    } else {
      return false;
    }
  }

  const reqBody = {
    name: name,
    price: Number(price),
    location: location,
    miles: Number(miles),
    kitchen: toBool(kitchen),
    bathroom: toBool(bathroom),
    sleeps: Number(sleeps),
    seats: Number(seats),
    water: toBool(water),
    length: Number(length),
    imgUrl: imgUrl,
    description: description,
    available: true,
  };

  async function handleSubmit(e) {
    fetch("https://van-voyage-server-pwa5.onrender.com/vans", {
      method: "POST",
      headers: {
        Accept: "aaplication/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reqBody),
    }).then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Something went wrong ...");
      }
    });

    // returns to home and refreshes
    navigate("..");
    navigate(0);

    // sets all back to initial values
    setName("");
    setPrice("");
    setLocation("");
    setMiles("");
    setKitchen("");
    setBathroom("");
    setSeats("");
    setSleeps("");
    setWater("");
    setLength("");
    setImgUrl("");
    setDescription("");
  }

  return (
    <>
      <Navigation />
      <h2 className="form-title">List your own van</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Name of van *</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
          />
        </div>

        <div className="form-field">
          <label>Photo of van (url) *</label>
          <input
            type="text"
            name="imgUrl"
            value={imgUrl}
            onChange={(e) => {
              setImgUrl(e.target.value);
            }}
            required
          />
        </div>

        {imgUrl && (
          <div className="preview-img-container">
            <p>Image Preview:</p>
            <img className="form-img" src={imgUrl} alt="van image" />
          </div>
        )}

        <div className="inside-form-container">
          <div className="form-field">
            <label>Price per night *</label>
            <input
              type="number"
              name="price"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              required
            />
          </div>

          <div className="form-field">
            <label>Number of miles included per night *</label>
            <input
              type="number"
              name="miles"
              value={miles}
              onChange={(e) => setMiles(e.target.value)}
              required
            />
          </div>

          <div className="form-field">
            <label>Location for pickup and dropoff *</label>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            >
              <option value="" disabled selected>
                --Make a selection--
              </option>

              <option value="Seattle, Washington">Seattle, Washington</option>
              <option value="San Francisco, California">
                San Francisco, California
              </option>
              <option value="Denver, Colorado">Denver, Colorado</option>
            </select>
          </div>

          <div className="form-field">
            <label>Seats *</label>
            <input
              type="number"
              name="seats"
              value={seats}
              onChange={(e) => setSeats(e.target.value)}
              required
            />
          </div>

          <div className="form-field">
            <label>Sleeps *</label>
            <input
              type="number"
              name="sleeps"
              value={sleeps}
              onChange={(e) => setSleeps(e.target.value)}
              required
            />
          </div>

          <div className="form-field">
            <label>Kitchen *</label>
            <select
              value={kitchen}
              onChange={(e) => setKitchen(e.target.value)}
              required
            >
              <option value="" disabled selected>
                --Make a selection--
              </option>

              <option value="true">yes</option>
              <option value="false">no</option>
            </select>
          </div>

          <div className="form-field">
            <label>Bathroom *</label>
            <select
              value={bathroom}
              onChange={(e) => setBathroom(e.target.value)}
              required
            >
              <option value="" disabled selected>
                --Make a selection--
              </option>
              <option value="true">yes</option>
              <option value="false">no</option>
            </select>
          </div>

          <div className="form-field">
            <label>Hot water *</label>
            <select
              value={water}
              onChange={(e) => setWater(e.target.value)}
              required
            >
              <option value="" disabled selected>
                --Make a selection--
              </option>
              <option value="true">yes</option>
              <option value="false">no</option>
            </select>
          </div>

          <div className="form-field">
            <label>Van Length *</label>
            <select
              value={length}
              onChange={(e) => setLength(e.target.value)}
              required
            >
              <option value="" disabled selected>
                --Make a selection--
              </option>

              <option value="10">10</option>
              <option value="11.5">11.5</option>
              <option value="15">15</option>
            </select>
          </div>
        </div>

        <div className="form-field">
          <label>Van Description *</label>
          <input
            height="200"
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <button className="form-btn" type="submit">
          List my van!
        </button>
      </form>
    </>
  );
}
