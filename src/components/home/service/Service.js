import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = (props) => {
  const { id, name, img, description } = props.service;

  return (
    <div className="service shadow p-3 rounded">
      <img src={img} alt="" />
      <h3>{name}</h3>
      <p>{description.slice(0, 150)}</p>
      <Link to={`/booking/${id}`}>
        <button>Details</button>
      </Link>
    </div>
  );
};

export default Service;
