//***************************/
// ABOUT MEGA MENU NAVIGATION
//***************************/

import React, { Fragment } from "react"
import { Link } from "gatsby"



const AboutNavMenu = () => {

  return (

   
  <Fragment>
      <Link to="/about-us">
             <span className="dropdown-- ">
               <span className="dropbtn">
                 <Link to="/about-us">About</Link>
                 <span
                   style={{ fontSize: `inherit`, fontWeight: `bold` }}
                   class="material-icons"
                 >
                   keyboard_arrow_down
                 </span>
               </span>
               <div className="dropdown-content">
                  <Link to="/about-us">Home Comfort Air</Link>
                  <Link to="/products/midea-air-conditioning">Midea Air Conditioning</Link>
                  <Link to="/products/haier-air-conditioning">Haier Air Conditioning</Link>
                  <Link to="/products/carrier-air-conditioning">Carrier Air Conditioning</Link>
                  <Link to="/products/samsung-air-conditioning" >Samsung Air Conditioning</Link>
                  <Link to="/products/toshiba-air-conditioning" >Toshiba Air Conditioning</Link>
                  <Link to="/products/daikin-air-conditioning">Daikin Air Conditioning</Link>
                  <Link to="/products/mitsubishi-air-conditioning">Mitsubishi Air Conditioning</Link>
                 </div>
             </span>
      </Link>
  </Fragment>
  )
}

export default AboutNavMenu
