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
      <nav className="fixed-top">
        <div className="container" id="navbar">
          <div id="logo" className="reverse">
            <div
              class="mobile-btn"
              style={{
                fontSize: `30px`,
                cursor: `pointer`,
                fontWeight: `bold`,
              }}
            >
              &#9776;
            </div>
            <div class="logo">
              <Link id="logo-header" to="/">
                <Image fluid={data.fluid.childImageSharp.fluid} alt="logo" />
              </Link>
            </div>
          </div>
          <div id="links">
            <Link to="/">Home</Link>
            <Link to="/">About</Link>
            <Link to="/">Blog</Link>
            <Link to="/">Service</Link>
            <Link to="/">Contact</Link>
          </div>
        </div>
      </nav>

      <div id="mySidenav" className="sidenav">
        <div style={{ cursor: `pointer` }} className="closebtn">
          &times;
        </div>
        <Link to="/">Home</Link>
        <Link to="/">Gallery</Link>
        <Link to="/">Blog</Link>
        <Link to="/">Portfolio</Link>
        <Link to="/">Contact</Link>
      </div>
    </>
  )
}

export default Header
