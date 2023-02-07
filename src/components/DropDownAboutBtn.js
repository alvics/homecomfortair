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
        
      </ul>

</div>
  )
}

export default DropdownBtn
