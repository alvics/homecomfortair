import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
// import FacebookIcon from "@material-ui/icons/Facebook"

const getImage = graphql`
  {
    fluid: file(relativePath: { eq: "Home-Comfort-Air-logo-650.png" }) {
      childImageSharp {
        fluid(maxWidth: 240, quality: 100) {
          src
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
  }
`

// function openNav() {
//   document.getElementById("mySidenav").style.width = "250px"
// }

// function closeNav() {
//   document.getElementById("mySidenav").style.width = "0"
// }

const Header = () => {
  const data = useStaticQuery(getImage)
  return (
    <>
      <div
        style={{ zIndex: 99999 }}
        className="container-fluid backGroundColor-topNav fixed-top "
      >
        <div className="container text-white">
          <div className="row">
            <div className="col d-flex-justify-content-start align-items-center service-area text-shadow-1 pt-1">
              Ipswich | Brisbane | Gold Coast
            </div>

            <div
              style={{ PaddingBottom: 5 }}
              className="col-4 d-flex justify-content-end phone-nav"
            >
              <a
                style={{ fontSize: 14 }}
                className="call-icon d-flex align-items-center text-shadow-1 btn-- btn-green-- my-1 px-3 "
                href="tel:0404602657"
              >
                <span style={{ fontSize: 22 }} class="material-icons">
                  local_phone
                </span>{" "}
                <span
                  className="phone-num fw-600"
                  style={{ whiteSpace: `nowrap` }}
                >
                  Call 0404 602 657
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <nav id="desktop-nav" className="fixed-top ">
        <div className="container" id="navbar">
          <div id="logo" className="reverse">
            <div className="logo">
              <Link id="logo-header" to="/">
                <Image fluid={data.fluid.childImageSharp.fluid} alt="logo" />
              </Link>
            </div>
          </div>
          <div className="desktop-links" id="links">
            <Link to="/">Home</Link>
            <Link to="/about-us">About</Link>

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
                   <Link to="/products/specials">Specials Deals</Link>
                   <Link to="/products">Split System Packages</Link>
                   <Link to="/products/#midea" >Midea Air Conditioning</Link>
                   <Link to="/products/#carrier" >Carrier Air Conditioning</Link>
                   <Link to="/products/#haier" >Haier Air Conditioning</Link>
                   <Link to="/products/#samsung" >Samsung Air Conditioning</Link>
                   <Link to="/products/#toshiba" >Toshiba Air Conditioning</Link>
                   <Link to="/products/#daikin">Daikin Air Conditioning</Link>
                  </div>
              </span>
        </Link>
           
            <Link to="/split-systems">
              <span className="dropdown--">
                <span className="dropbtn">
                  <Link to="/products">Air Conditioning Services</Link>
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
                  <Link to="/products">Split System Prices</Link>
                </div>
              </span>
            </Link>
            <Link  to="/contact">Contact</Link>
            <Link to="https://www.facebook.com/Home-Comfort-Air-1713459065551004/?ref=bookmarks"
              target="blank"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook mb-1" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
</svg></Link>      
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
