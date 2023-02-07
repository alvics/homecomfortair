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
                   className="material-icons"
                 >
                   keyboard_arrow_down
                 </span>
               </span>
               <div className="dropdown-content">
                  
               </div>
             </span>
      </Link>
  </Fragment>
  )
}

export default AboutNavMenu
