import React, { Fragment } from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
// import Form from "./contactForm"

const SplitsHero = props => {
  const data = useStaticQuery(getImages)
  console.log(data)
  return (
    <Fragment>
      <BackgroundImage id="hero-image" fluid={data.fluid.childImageSharp.fluid}>
        <div
          className="d-grid-- just-content-center pb-2"
          style={{ backgroundColor: `rgba(0, 117, 201, 0)` }}
        >
          <div className="hidden-form"></div>
        </div>
      </BackgroundImage>
    </Fragment>
  )
}

const getImages = graphql`
  {
    fluid: file(relativePath: { eq: "hero-4.jpg" }) {
      childImageSharp {
        fluid {
          src
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default SplitsHero
