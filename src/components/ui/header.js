import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
// import FacebookIcon from "@material-ui/icons/Facebook"

const getImage = graphql`
  {
    fluid: file(relativePath: { eq: "logo.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 140, quality: 100) {
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
        className="container-fluid bg-primary fixed-top "
      >
        <div className="container text-white">
          <div className="row">
            <div className="col d-flex-justify-content-start service-area text-shadow-1">
              Ipswich | Brisbane | Gold Coast
            </div>
            <div
              style={{ PaddingBottom: 5 }}
              className="col d-flex justify-content-end phone-nav"
            >
              <a
                className="d-flex align-items-center text-shadow-1"
                href="tel:0404602657"
              >
                <span style={{ fontSize: 22 }} class="material-icons">
                  local_phone
                </span>{" "}
                Call today 0404 602 657
              </a>
            </div>
          </div>
        </div>
      </div>

      <nav id="desktop-nav" className="fixed-top ">
        <div className="container" id="navbar">
          <div id="logo" className="reverse">
            <div class="logo">
              <Link id="logo-header" to="/">
                <Image fluid={data.fluid.childImageSharp.fluid} alt="logo" />
              </Link>
            </div>
          </div>
          <div id="links">
            <Link to="/">Home</Link>
            <Link to="/">About</Link>
            <Link to="/specials">Specials</Link>
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
                  <Link to="/products">Supply & Install </Link>
                </div>
              </span>
            </Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
