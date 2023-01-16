//***************************/
// SHOP MEGA MENU NAVIGATION
//***************************/

import React, { Fragment } from "react"
import { Link } from "gatsby"

import { AnchorLink } from 'gatsby-plugin-anchor-links';

const Header = () => {

  return (

   
  <Fragment>
  <Link to="/products/#midea">
             <span className="dropdown-- ">
               <span className="dropbtn">
                 <Link to="/products">Shop</Link>
                 <span
                   style={{ fontSize: `inherit`, fontWeight: `bold` }}
                   class="material-icons"
                 >
                   keyboard_arrow_down
                 </span>
               </span>
               <div className="dropdown-content">
                  <Link to="/products/specials">Monthly Specials</Link>
                  <AnchorLink to="/products">Split System Packages</AnchorLink>
                  <AnchorLink  to="/products/#midea" >Midea Split Systems</AnchorLink>
                  <AnchorLink  to="/products/#carrier" >Carrier Split Systems</AnchorLink>
                  <AnchorLink  to="/products/#haier" >Haier Split Systems</AnchorLink>
                  <AnchorLink  to="/products/#samsung" >Samsung Split Systems</AnchorLink>
                  <AnchorLink  to="/products/#toshiba" >Toshiba Split Systems</AnchorLink>
                  <AnchorLink  to="/products/#daikin">Daikin Split Systems</AnchorLink>
                 </div>
             </span>
       </Link>
  </Fragment>
  )
}

export default Header
