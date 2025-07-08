import React from 'react'

import { Link } from "react-router-dom";
import img2 from '../assets/nail/nail-img.jpg';
import './Nail.scss'

function Nail() {
  return (
     <div className="service-hair-page">
        <div className="text">
            <div className="heder-text">
               <h1>Nail Art & Care</h1>
      <p>
        Elevate your style with stunning nail art designs, professional manicures, 
        and pampering treatments tailored just for you.
      </p> </div>
            <div className="tritment-div">
                <div className="tritment">
                    <h1>01</h1>
        <h2>Classic Manicure</h2>
        <p>Clean, trim, and shape your nails with care and precision.</p>
                </div>

                <div className="tritment">
                    <h1>02</h1>
        <h2>Gel Polish</h2>
        <p>Enjoy vibrant colors with long-lasting gel polish shine.</p>
                </div>

                <div className="tritment">
                    <h1>03</h1>
        <h2>Nail Art Design</h2>
        <p>Express your creativity with elegant or bold custom designs.</p>
                </div>

                <div className="tritment">
                    <h1>04</h1>
        <h2>French Tips</h2>
        <p>Timeless style with elegant white-tipped nail finish.</p>
                </div>

                <div className="tritment">
                    <h1>05</h1>
        <h2>Pedicure</h2>
        <p>Pamper your feet with soothing treatments and polish.</p>
                </div>

                <div className="tritment">
                    <h1>06</h1>
        <h2>Nail Repair</h2>
        <p>Restore damaged nails to their natural beauty and health.</p>
                </div>
                <Link to="/contact">
                    <button>BOOK NOW</button>
                </Link>
            </div>
        </div>
      <div className="hair-img">
        <div className="hair-img-1">
            <div className="hair-img-1">
                <img src={img2} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Nail