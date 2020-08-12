import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import { Link } from "gatsby"

import Layout from "../components/ui/Layouts/layout"
// import CSS from "../components/ui/Layouts/layout.css"

import SEO from "../components/seo"
import Hero from "../components/hero"
import MyForm from "../components/form"
import StaticImage from "../components/StaticQueryImages"

// import SimpleSlider from "../components/HeroCarousel"

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
    <>
      <Layout>
        <SEO
          title="Home Page"
          description={`HOMECOMFORTAIR installs split system air conditioning from $300 dollars, throughout Ipswich, Brisbane and the Gold Coast area's. Book your installation through our website today.`}
          keywords={[
            `Gold,Coast,Air,Conditioning,
Split,systems,Ipswich,Brisbane,Specials`,
          ]}
        />
        <meta name="pinterest" content="nopin" />
        <section className="specials-section">
          <div className="text-center body-wrapper">
            <h5
              className="top-heading pt-3 px-2"
              style={{ fontSize: `64px`, fontWeight: `700` }}
            >
              Air Conditioning
            </h5>
            <p className="lead-400 top-text px-4">
              Check our air conditioning <strong>specials</strong> at the start
              of each month, and save hundreds!
            </p>
            <div className="text-center">
              <Link to="/products/specials">
                <button className="btn-- btn-orange-- ">VIEW SPECIALS</button>
              </Link>
            </div>
          </div>
        </section>

        <Hero />

        <SEO title="Home" />
        <div className="body-wrapper">
          <section className="section-1">
            <div className="heading-box-color heading-avatar heading-avatar rounded row p-2 d-flex align-items-center mb-2">
              <div className="col-sm-3 col-lg-2 pt-2 px-4 m-auto">
                <StaticImage
                  filename="HCA-avatar-WHITE-1400.png"
                  alt="home comfort air image"
                />
              </div>
              <div className="col">
                <h3 className="h2 fw-600 mt-2">
                  Air Conditioning Solutions For Your Home
                </h3>
              </div>
            </div>
            <div className="grid-300 mb-2">
              <div className="card">
                <Link to="/split-systems">
                  <div className="card-top">
                    <Image
                      fluid={data.fluid.childImageSharp.fluid}
                      alt="split system air conditioning"
                      data-pin-nopin="true"
                    />
                  </div>
                  <div className="card-heading">
                    <h3 className="fw-600 text-dark">Split Systems A/C</h3>
                  </div>
                  <div className="card-body--">
                    <p className="card-text lead">
                      Cool or heat a single room space, free quotes on
                      installation.
                    </p>
                  </div>
                  <div className="text-blue text-shadow-2 mt-2">
                    Learn more >>
                  </div>
                </Link>
              </div>

              <div className="card">
                <Link to="/ducted-systems">
                  <div className="card-top">
                    <StaticImage
                      filename="cas.jpg"
                      alt="ducted air image"
                      data-pin-nopin="true"
                    />
                  </div>
                  <div className="card-heading">
                    <h3 className="fw-600 text-dark">Ducted Systems A/C</h3>
                  </div>
                  <div className="card-body--">
                    <p className="card-text lead">
                      Cool or heat your entire home, with Ducted air
                      conditioners.
                    </p>
                  </div>
                  <div className="text-blue text-shadow-2 mt-2">
                    Learn more >>
                  </div>
                </Link>
              </div>

              <div className="card">
                <Link to="/multi-head-systems">
                  <div className="card-top">
                    <StaticImage
                      filename="ac-2.jpg"
                      alt="multi head air con systems"
                      data-pin-nopin="true"
                    />
                  </div>
                  <div className="card-heading">
                    <h3 className="fw-600 text-dark">Multi Systems A/C</h3>
                  </div>
                  <div className="card-body--">
                    <p className="card-text lead">
                      Cool or heat multiple rooms with a single outdoor unit
                    </p>
                  </div>
                  <div className="text-blue text-shadow-2 mt-2">
                    Learn more >>
                  </div>
                </Link>
              </div>

              <div className="card">
                <Link to="/service">
                  <div className="card-top">
                    <StaticImage
                      filename="ducted-2.jpg"
                      alt="ducted air image"
                    />
                  </div>
                  <div className="card-heading">
                    <h3 className="fw-600 text-dark">A/C Service</h3>
                  </div>
                  <div className="card-body--">
                    <p className="card-text lead">
                      Fast service for split systems air conditioners
                    </p>
                  </div>
                  <div className="text-blue text-shadow-2 mt-2">
                    Learn more >>
                  </div>
                </Link>
              </div>
            </div>
          </section>
          <section className="section-2">
            <div className="heading-box-color heading-avatar rounded row p-2 d-flex align-items-center mb-2">
              <div className="col-sm-3 col-lg-2 pt-2 px-4">
                <StaticImage
                  filename="HCA-avatar-WHITE-1400.png"
                  alt="home comfort air image"
                />
              </div>
              <div className="col">
                <h3 className="h2 fw-600 mt-2 ">
                  Split Systems Air Conditioning
                </h3>
              </div>
            </div>
            <div className="grid-2">
              <div className="span-col-3">
                <h4 className="text-dark fw-400">
                  Gold Coast Air Conditioning Service
                </h4>
                <Image
                  fluid={data.fluid.childImageSharp.fluid}
                  data-pin-nopin="true"
                  alt=""
                  style={{
                    height: "350px",
                    width: "auto",
                    borderRadius: "10px",
                  }}
                />
                <p className="cap text-dark">Beat the heat</p>
                <p className="mt-20 lead">
                  Split system air conditioners are the most popular and most
                  affordable option for cooling and heating your home or office
                  space. With its sleek and modern design, easy to use
                  functionality and advanced technology's, it's the perfect
                  solution for single room or space. If you're looking for an
                  air conditioning systems to help with your comfort you're in
                  the right place! With our expertise, experience and fast
                  service, we can supply and fully install the right air
                  conditioning system to suit your interior. Whether you're
                  looking for a single room or the entire home, we've got you
                  covered. We can help you over the phone, by{" "}
                  <a href="mailto:alvicair@hotmail.com"> email</a>
                  , and even face to face with a free consultation to better
                  understand your needs. We've got over 10 years experience,
                  talk to us to find out more about all the options, and we can
                  provide a cost comparison to help you determine the best way
                  to go. <br />
                  Call <a href="tel:0404602657">0404 602 657</a>
                </p>
              </div>
              <div className="form-quote mt-5">
                <h4 className="heading-box-color p-20 rounded cam">
                  Free in home appraisal
                </h4>
                <i></i>
                <MyForm />
              </div>
            </div>
          </section>
          <section className="section-3">
            <div className="heading-box-color  heading-avatar rounded row p-2 d-flex align-items-center mb-2">
              <div className="col-sm-3 col-lg-2 pt-2 px-4">
                <StaticImage
                  filename="HCA-avatar-WHITE-1400.png"
                  alt="home comfort air image"
                />
              </div>
              <div className="col">
                <h3 className="h2 fw-600 mt-2 ">
                  Residential Air Conditioning Professionals
                </h3>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-7">
                {" "}
                <div>
                  <p className="lead mt-3 px-3">
                    We've been installing domestic air conditioners for family's
                    and major builders around Brisbane, Ipswich, Gold Coast and
                    Tweed Heads area's for over a decade. Everything from high
                    wall and <Link to="/multi-head-systems">multi head </Link>
                    split systems including major brands, Kelvinator, Acrton,
                    Daikin, Braemar, LG, Haier, Mitsubishi and Samsung as well
                    as <Link to="/ducted-systems">ducted</Link> residential and
                    commercial systems with Daikin and Actron air conditioners.
                    Furthermore, we're experienced working in Queensland schools
                    installing cassette units and wall mounted{" "}
                    <Link to="/split-systems">split systems</Link> air
                    conditioners.
                  </p>
                  <p className="mt-20 lead px-3">
                    We service the Gold Coast, Ipswich and Brisbane areas. Our
                    staff are licensed experts when it comes to installations or
                    <Link to="/service"> split system service</Link>, and we
                    offer a 5 year warranty on the workmanship of new
                    installation. We pride ourselves on 100% customer
                    satisfaction, so you know you're in the right hands when
                    choosing Home Comfort Air. We operate 6 days a week and can
                    be contacted between the hours of 8am and 5pm.
                  </p>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="home-comfort-air-img">
                  {" "}
                  <StaticImage
                    filename="homecomfort.jpg"
                    alt="home comfort air image"
                  />
                </div>
                HOME COMFORT AIR
                <span
                  style={{ fontFamily: `'Caveat', cursive`, marginLeft: `6px` }}
                >
                  the smart choice in air conditioning
                </span>
              </div>
              <p className="mt-20 lead px-3">
                If your looking to get the job done right by professionals, then
                give us a call on <a href="tel:0404602657">0404 602 657</a> your
                satisfaction, is our guarantee!{" "}
              </p>
            </div>
            <div className="why-us">
              <ul className="bg-light p-20 mr-4">
                <li className="text-blue fw-600 text-shadow-2">
                  <span className="green">✓</span> Experienced in Commercial &
                  Residential Installations{" "}
                </li>
                <li className="text-blue fw-600 text-shadow-2">
                  <span className="green">✓</span> Quality workmanship
                  guaranteed
                </li>
                <li className="text-blue fw-600 text-shadow-2">
                  <span className="green">✓</span> Experts and licensed to
                  Install Air Conditioners
                </li>
                <li className="text-blue fw-600 text-shadow-2">
                  <span className="green">✓</span> Professional fast and
                  efficient service
                </li>
                <li className="text-blue fw-600 text-shadow-2">
                  <span className="green">✓</span> 5 to 7 Year Manufacture
                  Warranty's
                </li>
                <li className="text-blue fw-600 text-shadow-2">
                  <span className="green">✓</span> 5 Year Installation Warranty
                </li>
                <li className="text-blue fw-600 text-shadow-2">
                  <span className="green">✓</span> We'll beat any written quote!
                </li>
              </ul>
            </div>
          </section>
          <div
            style={{
              maxWidth: `640px`,
              marginBottom: `1.45rem`,
              border: `none`,
              overflow: `hidden`,
            }}
          >
            {" "}
            <StaticImage
              filename="split-systems-add.png"
              alt="home comfort air image"
            />
          </div>

          <Link to="/products" className="btn-- btn-primary-- text-white">
            Supply & Install Split Systems
          </Link>
          <br />
        </div>
      </Layout>
    </>
  )
}

export default IndexPage
