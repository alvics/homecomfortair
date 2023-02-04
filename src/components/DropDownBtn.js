// Display the dropdown button in Mobile Nav Menu
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
        Our Services
      </button>
      <ul
        class="dropdown-menu px-3"
        aria-labelledby="dropdownMenuButton"
        style={{ whiteSpace: `nowrap` }}
      >
        <li>
          <Link to="/split-systems">Split Systems</Link>
        </li>
        <div class="dropdown-divider"></div>
        <li>
          <Link to="/ducted-systems">Ducted Systems</Link>
        </li>
        <div class="dropdown-divider"></div>
        <li>
          <Link to="/multi-head-systems">Multi-Head Systems </Link>
        </li>
        <div class="dropdown-divider"></div>
       <li>
        <Link to="/installation-warranty">Installation Warranty</Link>
        </li>
        <div class="dropdown-divider"></div>
        <li>
        <Link to="/split-ac-installation-cost">Split A/C Installation Cost</Link>
        </li>
        <div class="dropdown-divider"></div>
        <li>
        <Link to="/split-system-replacement">Split System Replacement</Link>
        </li>
      </ul>
    </div>
  )
}

export default DropdownBtn
