import React from 'react'
import './Service.css'
import time from "../assets/time.png";
import star from "../assets/star.png";
import deliv from "../assets/deliv.png";

const Service = () => {
  return (
    <div className='serv'>
      <div>
      <img src={star} alt="star" className="img1" />
         <p>Always Fresh </p>
      </div>
      <div>
      <img src={time} alt="time" className="img1" />
        <p> 24h Service</p>
      </ div>
      <div>
      <img src={deliv} alt="deliv" className="img1" />
        <p>Fast Delivery</p>
      </ div>
    </ div>
  )
}

export default Service