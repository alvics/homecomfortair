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
            <Link to="/products/specials">Specials</Link>
            <Link to="/split-systems">
              <span className="dropdown--">
                <span className="dropbtn">
                  <Link to="/products">Air Conditioning</Link>
                  <span
                    style={{ fontSize: `inherit`, fontWeight: `bold` }}
                    class="material-icons"
                  >
                    keyboard_arrow_down
                  </span>
                </span>
                <div className="dropdown-content">
                  <Link to="/split-systems">Split Systems</Link>
                  <Link to="/ducted-systems">Ducted Systems</Link>
                  <Link to="/multi-head-systems">Multi-Head Systems </Link>
                  <Link to="/products">Supply & Install Price</Link>
                </div>
              </span>
            </Link>
            <Link to="/contact">Contact</Link>
            <a
              style={{ marginTop: `-3px` }}
              id="facebook-svg"
              href="https://www.facebook.com/Home-Comfort-Air-1713459065551004/"
              target="blank"
            >
              <svg
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
                style={{
                  background: `new 0 0 512 512`,
                  maxWidth: 25,
                }}
              >
                <g>
                  <g>
                    <path
                      d="M448,0H64C28.704,0,0,28.704,0,64v384c0,35.296,28.704,64,64,64h192V336h-64v-80h64v-64c0-53.024,42.976-96,96-96h64v80
			h-32c-17.664,0-32-1.664-32,16v64h80l-32,80h-48v176h96c35.296,0,64-28.704,64-64V64C512,28.704,483.296,0,448,0z"
                    />
                  </g>
                </g>
              </svg>
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
