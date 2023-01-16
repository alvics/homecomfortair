//  ********************************
//  ********** MOBILE MENU *********
//  ********************************
// Display the dropdown button in Mobile Nav Menu
//------------------------------------------------

import React from "react"
import { Link } from "gatsby"

const DropdownBtn = () => {
  return (
    <div class="dropdown">
      <button
        style={{ fontFamily: `Open Sans, sans-serif`, fontSize: 24 }}
        class="fw-400 px-0 dropdown-toggle"
        type="button"
        id="dropdownMenuButton1 "
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        About
      </button>
      <ul
        class="dropdown-menu px-3"
        aria-labelledby="dropdownMenuButton"
        style={{ whiteSpace: `nowrap` }}
      >
        <li>
          <Link to="/about-us">Home Comfort Air</Link>
        </li>
        <div class="dropdown-divider"></div>
        <li>
           <Link to="/products/midea-air-conditioning">Midea Air Conditioning</Link>
        </li>
        <div class="dropdown-divider"></div>
        <li>
           <Link to="/products/haier-air-conditioning">Haier Air Conditioning</Link>
        </li>
        <div class="dropdown-divider"></div>
        <li>
          <Link to="/products/carrier-air-conditioning">Carrier Air Conditioning</Link>
        </li>
        <div class="dropdown-divider"></div>
        <li>
           <Link to="/products/samsung-air-conditioning" >Samsung Air Conditioning</Link>
        </li>
        <div class="dropdown-divider"></div>
        <li>
         <Link to="/products/toshiba-air-conditioning" >Toshiba Air Conditioning</Link>
        </li>
         <li>
         <Link to="/products/daikin-air-conditioning">Daikin Air Conditioning</Link>
        </li>
      </ul>

</div>
  )
}

export default DropdownBtn
