import React from 'react'
import './Socio.css'
import {FaFacebookF} from "react-icons/fa"
import {BsTwitter} from "react-icons/bs"
import {FaLinkedinIn} from "react-icons/fa"
import {BsPinterest} from "react-icons/bs"


const Socio = () => {
  return (
    <div className='outDiv'>
        <div className='bt'>
            <button></button>
        </div>
        <div className='oDiv'>
        <div className='pa'>
            <p className='pa1'>SHAKE HEAVEN</p>
            <p>About Us</p>
            <p>FAQs</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Delivery & Condtions</p>
            <p>Contact Us</p>
        </div>
        <div className='pa'>
            <p className='pa1'>FOLLOW US ON </p>
            <div className='ico'>
               <a href="#"><FaFacebookF /></a>
               <a href="#"><BsTwitter /></a>
               <a href="#"><FaLinkedinIn /></a>
               <a href="#"><BsPinterest /></a>
            </div>
            <p className='pa1 , op'>OPENING HRS</p>
            <p>Mon - Sat: 11am - 7pm</p>
            <p>Sundays: 12pm - 6pm</p>
            
        </div>
        <div className='pa'>
            <p className='pa1'>FIND US</p>
            <p>1 Kingly Court</p>
            <p>London</p>
            <p>W1B 5PW</p>
            <p className='find'>Find Us On Google Maps</p>
            <p className='mail'>info@bakerybee.com</p>
        </div>
        </div>
    </div>
  )
}

export default Socio