import React from 'react'
import './HapCust.css';
import girl from "../assets/girl.png";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const HpyCust = () => {
  return (
    <div className='hpycust'>
      <div className='hpy'>
        <p className='top'> Making a customer happy is our <br /> <span > #1 Priority</span></p>
        <p className='par'> Hear what they had to say about our products... </p>
      </div>

      <div className='div2'>
       <div>
       <img src={girl} alt="girl" className="girl" />
       </div>

      <div className='inDiv'>
         <p className='para , cent'>Duis lacinia mauris a ante ultrices, ac acutor mauris pretium. Etiam vulputate aliquam lacinia. Ut ornare massa et odio ultrices.</p>
         <p className='para1 , cent'> Marissa Sweeney</p>
         <p className='para2 , cent'>Food critic for the NY Times </p>
         <div className="arr">
        <button type="button" className="lft">
          <FaArrowLeft />
        </button>
        <button type="button" className="rgt">
          <FaArrowRight />
        </button>
      </div>
      </ div>
      </ div>
    </ div>


  )
}

export default HpyCust