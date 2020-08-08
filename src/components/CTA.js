import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import MyForm from "./quoteForm"
import QuoteModal from "../components/QuoteModal"
// import StaticImage from "../components/StaticQueryImages"

const Hero = props => {
  const data = useStaticQuery(getImages)
  console.log(data)
  return (
    <>
      <div className="col d-flex align-items-center">
        <div className="pb-3 m-auto">
          <Link to="/job-order">
            <button
              style={{ fontSize: `0.8rem` }}
              className="btn-- btn-green--"
            >
              Book a Service
            </button>
          </Link>

          <button
            type="button"
            data-toggle="modal"
            data-target="#quoteModal"
            style={{ fontSize: `0.8rem` }}
            className="btn-- btn-primary-- ml-2"
          >
            Instant Quote
          </button>

          <QuoteModal />
        </div>
      </div>
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

export default Hero
