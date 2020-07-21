import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const Hero = props => {
  const data = useStaticQuery(getImages)
  console.log(data)
  return (
    <>
      <BackgroundImage id="hero-image" fluid={data.fluid.childImageSharp.fluid}>
        <div className="white-overlay">
          <div className="hero-box">
            <h1 className="text-center hero-heading">
              <span className="hero-heading-primary">Home Comfort Air</span>
            </h1>
            <h2 className="hero-heading-h2">
              <span className="hero-heading-secondary">
                Gold Coast's Split System Installations Specialists
              </span>
            </h2>
          </div>
        </div>
      </BackgroundImage>
    </>
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

export default Hero
