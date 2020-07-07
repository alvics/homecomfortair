import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

const Hero = () => {
  const data = useStaticQuery(getImages)
  console.log(data)
  return (
    <>
      <div>
        <Image fluid={data.fluid.childImageSharp.fluid} className="hero-box" />
        <div>
          <h1 class="text-center">Home Comfort Air</h1>
          <p class="h3 text-center">
            Gold Coast's Split System Installations Specialists
          </p>
        </div>
      </div>
    </>
  )
}

const getImages = graphql`
  {
    fluid: file(relativePath: { eq: "ac-hero-1.jpg" }) {
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
