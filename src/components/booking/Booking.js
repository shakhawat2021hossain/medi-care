import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./Booking.css";

const Booking = () => {
  const { id } = useParams();

  const [serviceDetails, setServiceDetails] = useState([]);
  const [singleService, setSingleService] = useState([]);

  useEffect(() => {
    fetch("/servicedata.json")
      .then((res) => res.json())
      .then((data) => setServiceDetails(data));
  }, []);
  //   useEffect(() => {
  //     const findService = serviceDetails.find((service) => service.id === id);
  //     setSingleService(findService);
  //     console.log(findService);
  //   }, [serviceDetails]);

  console.log(serviceDetails);
  const findService = serviceDetails.find(
    (service) => service.id.toString() === id
  );
  console.log(findService);
  return (
    <div>
      <h1 className="text-center">{findService?.name}</h1>
      <div className="description">
        <img className="image-fluid" src={findService?.img} alt="" />
        <p>{findService?.description}</p>
      </div>
    </div>
  );
};

export default Booking;
