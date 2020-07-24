import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import MyForm from "./form"

const Hero = props => {
  const data = useStaticQuery(getImages)
  console.log(data)
  return (
    <>
      <BackgroundImage id="hero-image" fluid={data.fluid.childImageSharp.fluid}>
        <div className="white-overlay">
          <div className="container">
            <div className="row hero-row">
              <div className="col-lg-8">
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
                    If you're looking for air conditioning and/or need to get
                    your air conditioner installed? We install all brands,
                    simply submit your details to receive an instant quote for
                    your <i>home comfort air</i>.
                  </p>

                  <button className="btn-- btn-primary--">Buy Now</button>

                  <button className="btn-- btn-orange-- ml-2">
                    View Deals
                  </button>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="form-overlay py-4">
                  <span
                    className="h3 fw-600 d-flex justify-content-center"
                    style={{ opacity: `0.8` }}
                  >
                    Get instant quote
                  </span>
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
