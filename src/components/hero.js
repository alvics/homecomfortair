import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import MyForm from "./quoteForm"

const Hero = props => {
  const data = useStaticQuery(getImages)
  console.log(data)
  return (
    <>
      <BackgroundImage id="hero-image" fluid={data.fluid.childImageSharp.fluid}>
        <div className="white-overlay">
          <div className="container">
            <div className="row hero-row">
              <div className="col-lg-8 d-flex align-items-center">
                {" "}
                <div className="hero-box py-3">
                  <h1 className="text-center hero-heading">
                    <span className="hero-heading-primary">
                      Home Comfort Air
                    </span>
                  </h1>
                  <h2 className="hero-heading-h2">
                    <span
                      className="hero-heading-secondary"
                      style={{ fontFamily: `'Caveat', cursive` }}
                    >
                      The smart choice in air conditioning
                    </span>
                  </h2>
                  <p className="px-5">
                    Are you looking for air conditioning or need your air
                    conditioner installed? We install all the major brands
                    throughout south east Queensland, from Ipswich, Brisbane to
                    the Gold Coast.
                  </p>
                  <div className="pb-3">
                    <Link to="/job-order">
                      <button className="btn-- btn-primary--">
                        Book a Service
                      </button>
                    </Link>

                    <Link to="/split-systems">
                      <button className="btn-- btn-primary-- ml-2">
                        Split Systems
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="form-overlay p-4">
                  <span
                    className="h3 fw-600 d-flex justify-content-center"
                    style={{ color: `#2d3136` }}
                  >
                    Request a quote
                  </span>
                  <i className="text-center text-blue">
                    We install all major brands
                  </i>
                  <MyForm />
                </div>
              </div>
            </div>
          </div>
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

export default Hero
