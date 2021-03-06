import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Form from "./OrderForm"

const BookService = props => {
  const data = useStaticQuery(getImages)
  console.log(data)
  return (
    <>
      <BackgroundImage id="hero-image" fluid={data.fluid.childImageSharp.fluid}>
        <div
          className="book-service-form-a"
          style={{ backgroundColor: `rgba(255, 255, 255, 0.9)` }}
        >
          <Form />
        </div>
      </BackgroundImage>
    </>
  )
}

const getImages = graphql`
  {
    fluid: file(relativePath: { eq: "homecomfort-2.jpg" }) {
      childImageSharp {
        fluid {
          src
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default BookService
