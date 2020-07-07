import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import { Link } from "gatsby"

import Layout from "../components/ui/Layouts/layout"
// import CSS from "../components/ui/Layouts/layout.css"

import SEO from "../components/seo"
import Hero from "../components/hero"
import MyForm from "../components/form"

const getImage = graphql`
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

const IndexPage = () => {
  const data = useStaticQuery(getImage)
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <section className="section">
        <h2 className="text-center">Solutions for your home</h2>
        <div className="grid-300">
          <div className="card">
            <div className="card-top">
              <Image fluid={data.fluid.childImageSharp.fluid} alt="" />
            </div>
            <div className="card-heading">
              <h3>Split Systems A/C</h3>
            </div>
            <div className="card-body">
              <p className="card-text lead">
                Cool or heat a single room space.
              </p>
            </div>
            <div className="card-action">Learn more</div>
          </div>

          <div className="card">
            <div className="card-top">
              <Image fluid={data.fluid.childImageSharp.fluid} alt="" />
            </div>
            <div className="card-heading">
              <h3>Ducted Systems A/C</h3>
            </div>
            <div className="card-body">
              <p className="card-text lead">Cool or heat your entire home</p>
            </div>
            <div className="card-action">Learn more</div>
          </div>

          <div className="card">
            <div className="card-top">
              <Image fluid={data.fluid.childImageSharp.fluid} alt="" />
            </div>
            <div className="card-heading">
              <h3>Multi Systems A/C</h3>
            </div>
            <div className="card-body">
              <p className="card-text lead">
                Cool or heat multiple rooms with a single outdoor unit
              </p>
            </div>
            <div className="card-action">Learn more</div>
          </div>

          <div className="card">
            <div className="card-top">
              <Image fluid={data.fluid.childImageSharp.fluid} alt="" />
            </div>
            <div className="card-heading">
              <h3>A/C Breakdowns</h3>
            </div>
            <div className="card-body">
              <p className="card-text lead">
                Fast service for refrigeration and air conditioners
              </p>
            </div>
            <div className="card-action">Learn more</div>
          </div>
        </div>
      </section>
      <section className="section">
        <div class="grid-2">
          <div class="span-col-3">
            <h4>Gold Coast Air Conditioning Service</h4>
            <Image
              fluid={data.fluid.childImageSharp.fluid}
              alt=""
              style={{ height: "350px", width: "auto", borderRadius: "10px" }}
            />
            <p class="h6 cap">Beat the heat</p>
            <p className="mt-20">
              If you're finding the heat a little to hot to handle and you're
              looking for a cooler solution, your in the right place. With our
              experience and fast service, we can fully install and supply you
              the right air conditioning system to suit your requirements.
              Whether you're looking for a single room or the entire home, we've
              got you covered. We can help you over the phone, by email, and
              even face to face with a free consultation to better understand
              your needs. We've got years of experience, talk to us to find out
              more about all the options, and we can provide a cost comparison
              to help you determine the best way to go. Call{" "}
              <a href="tel:0404602657">0404 602 657</a>
            </p>
          </div>
          <div className="form-quote">
            <h4>Get a quick quote</h4>
            <MyForm />
          </div>
        </div>
      </section>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
      <Link to="/page-2/">Go to page 2</Link> <br />
    </Layout>
  )
}

export default IndexPage
