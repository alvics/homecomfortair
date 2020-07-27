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
            <Link to="/">Home m</Link>
            <Link to="/">About</Link>
            <Link to="/">Blog</Link>
            <Link to="/">Service</Link>
            <Link to="/">Contact</Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
