//*************************************/
// OUR SERVICES MEGA MENU NAVIGATION
//************************************/

import React, { Fragment } from "react"
import { Link } from "gatsby"



const Header = () => {

  return (

   
  <Fragment>
            <Link to="/split-systems">
              <span className="dropdown--">
                <span className="dropbtn">
                  <Link to="/products">Our Services</Link>
                  <span
                    style={{ fontSize: `inherit`, fontWeight: `bold` }}
                    class="material-icons"
                  >
                    keyboard_arrow_down
                  </span>
                </span>
                <div className="dropdown-content">
                   <Link to="/service-areas">Service area's</Link>
                  <Link to="/split-systems">Split Systems</Link>
                  <Link to="/ducted-systems">Ducted Systems</Link>
                  <Link to="/multi-head-systems">Multi-Head Systems </Link>
                  <Link to="/installation-warranty">Installation Warranty</Link>
                  <Link to="/split-ac-installation-cost">Split A/C Installation Cost</Link>
                  <Link to="/split-system-replacement">Split System Replacement</Link>
                   
                </div>
              </span>
            </Link>
  </Fragment>
  )
}

export default Header
