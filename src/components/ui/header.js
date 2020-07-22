import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

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

const Header = () => {
  const data = useStaticQuery(getImage)
  return (
    <header
      style={{
        background: `#fff`,
        border: `solid 1px #eee`,
      }}
    >
      <div
        className="grid-col-2"
        style={{
          margin: `0 auto`,
          maxWidth: 1440,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <div>
          <Link id="logo-header" to="/">
            <Image fluid={data.fluid.childImageSharp.fluid} alt="logo" />
          </Link>
        </div>

        <div>
          <ul className="grid-20">
            <li className="nav-link">Services</li>
            <li className="nav-link">Services</li>
            <li className="nav-link">Services</li>
          </ul>
        </div>
      </div>
    </header>
  )
}

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header
