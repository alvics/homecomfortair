// Display the dropdown button in Mobile Nav Menu
import React from "react"
import { Link } from "gatsby"

const DropdownShopBtn = () => {
  return (
    <div class="dropdown shop-mobile-menu">
      <button
        style={{ fontFamily: `Open Sans, sans-serif`, fontSize: 24 }}
        class="fw-400 px-0 dropdown-toggle"
        type="button"
        id="dropdownMenuButton1 "
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Shop
      </button>
      <ul
        class="dropdown-menu px-3 shop-mobile-menu-list"
        aria-labelledby="dropdownMenuButton"
        style={{ whiteSpace: `nowrap` }}
      >
        <li>
          <Link to="/products/specials">Special Deals</Link>
        </li>
        <div class="dropdown-divider"></div>
        <li>
          <Link to="/products">Split System Packages</Link>
        </li>
        <div class="dropdown-divider"></div>
        <li>
          <Link to="/products/#midea">Midea Air Conditioning</Link>
        </li>
        <div class="dropdown-divider"></div>
        <li>
          <Link to="/products/#carrier">Carrier Air Conditioning</Link>
        </li>
        <div class="dropdown-divider"></div>
        <li>
          <Link to="/products/#haier">Haier Air Conditioning</Link>
        </li>
        <div class="dropdown-divider"></div>
        <li>
          <Link to="/products/#samsung">Samsung Air Conditioning</Link>
        </li>
        <div class="dropdown-divider"></div>
        <li>
          <Link to="/products/#toshiba">Toshiba Air Conditioning</Link>
        </li>
        <div class="dropdown-divider"></div>
        <li>
          <Link to="/products/#daikin">Daikin Air Conditioning</Link>
        </li>
       
      </ul>
    </div>
  )
}

export default DropdownShopBtn
