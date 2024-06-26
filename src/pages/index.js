import React, { Fragment } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import { Link } from "gatsby"

import Layout from "../components/ui/Layouts/layout"
// import CSS from "../components/ui/Layouts/layout.css"

import SEO from "../components/seo"
import Hero from "../components/hero"
import MyForm from "../components/form"
import StaticImage from "../components/StaticQueryImages"
import BrandsBtn from "../components/BrandBtn"
// import SimpleSlider from "../components/HeroCarousel"
import GoogleReviews from "../components/GoogleReviews"
import ServiceArea from "../components/ServiceArea"
import MideaSplitSystems from "../components/Products/MideaProducts"
import DaikinSplitSystems from "../components/Products/Daikin"

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
  const schema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Air Conditioning", "Installation","Split Systems", "Website"],
  "name": "Home Comfort Air",
  "description":"Air Conditioning Gold Coast - Sales, Installation Service. Browse our affordable supplied and installation prices",
  "image": "https://homecomfortair.net.au/static/a480d1793c1eefd2201dfbfc149f4be9/e781a/HCA-2-avatar.png",
  "@id":  "https://homecomfortair.net.au/#website",
  "url": "https://homecomfortair.net.au/",
  "telephone": "0404602657",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "22 Beitz Ave",
    "addressLocality": "Labrador",
    "addressRegion": "QLD",
    "postalCode": "4215",
    "addressCountry": "AU"
  },
  "review": {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
      },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -27.9403803,
    "longitude": 153.3984457
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "08:00",
    "closes": "17:00"
  },
  "sameAs": "https://www.facebook.com/profile.php?id=100067867194837" 

  }
  return (
    <Fragment>
      <Layout>
        <SEO
          schemaMarkup={schema}
          title="Home Comfort Air Gold Coast Air Conditioning"
          description={`Home Comfort Air specialises in affordable air conditioning services on the Gold Coast. Find your new reverse cycle air conditioner browse our range. `}
          keywords={[
            `Gold,Coast,Air,Conditioning,
Split,systems,service,install,sales,replacement`,
          ]}
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/ewebdesigns/image/upload/v1597993348/facebook-cover-3_rzv8bs.png"
        ></meta>
        <meta name="pinterest" content="nopin" />
      
        {/*
        <section className="specials-section">
          <div className="text-center body-wrapper">
            <h5
              className="top-heading pt-3 px-2"
              style={{ fontSize: `64px`, fontWeight: `700` }}
            >
              Air Conditioning
            </h5>
            <p className="lead-400 top-text px-4">
              Check our monthly air conditioning and installation{" "}
              <strong>specials </strong>
              you can save hundreds!
            </p>
            <div className="text-center">
              <Link to="/products/specials">
                <button className="btn-- btn-orange-- ">VIEW SPECIALS</button>
              </Link>
            </div>
          </div>
        </section> */}
<section className="mb-3">
 <Hero /> 
</section>
        

        <div className="body-wrapper">
       
          <section className="section-1">
            <div className="heading-box-color heading-avatar heading-avatar rounded row d-flex align-items-center mb-2 mx-0">
              <div className="col-sm-3 col-lg-2 pt-2 px-4 m-auto">
                <StaticImage
                  filename="HCA-avatar-WHITE-1400.png"
                  alt="home comfort air logo image"
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
                      Cool or heat a single room or space, with split systems
                      air conditioning...
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
                      Cool or heat your entire home, with ducted air
                      conditioning...
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
                      Cool or heat multiple rooms with a single outdoor unit...
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
                      alt="service and preventive maintenance air image"
                    />
                  </div>
                  <div className="card-heading">
                    <h3 className="fw-600 text-dark">A/C Service</h3>
                  </div>
                  <div className="card-body--">
                    <p className="card-text lead">
                      Fast professional service and maintenance for split
                      systems air...
                    </p>
                  </div>
                  <div className="text-blue text-shadow-2 mt-2">
                    Learn more >>
                  </div>
                </Link>
              </div>
            </div>

            <div className="mt-5">
            <h3 className="h6 cam my-3 fw-600 pl-2">Recommended leading brands</h3>
             <BrandsBtn />
            </div>
            
          </section>

          <section className="section-2 split-system-cta">
            <div className="heading-box-color heading-avatar rounded row d-flex align-items-center mb-2 mx-0">
              <div className="col-sm-3 col-lg-2 pt-2 px-4">
                <StaticImage
                  filename="HCA-avatar-WHITE-1400.png"
                  alt="home comfort air logo image"
                />
              </div>
              <div className="col">
                <h3 className="h2 fw-600 mt-2 ">
                  Split System Air Conditioning
                </h3>
              </div>
            </div>

            <div className="px-3">

            <MideaSplitSystems />

            <div className="py-3">
             <Link to="/products" className="btn-- btn-primary-- text-white">
            View All Split Systems
          </Link>
            </div>
            </div>

            <div className="grid-2">
              <div className="span-col-3">
                <h4 className="text-dark fw-400">
                  Home Comfort Air
                </h4>
                <Image
                  fluid={data.fluid.childImageSharp.fluid}
                  data-pin-nopin="true"
                  alt="living room split system air conditioning"
                  style={{
                    height: "350px",
                    width: "auto",
                    borderRadius: "10px",
                  }}
                />
                <p className="cap text-dark">Beat the heat</p>


                <p className="mt-20 lead">
                  <Link to="/split-systems">Split system</Link> air conditioners  have come a long way in terms of technology and design, making them the most popular choice for homeowners and businesses looking for a cost-effective cooling and heating solution. With their sleek look and user-friendly features, they are perfect for single rooms or spaces, and are ideal for keeping you cool in the summer and warm in the winter.
                </p>
                <p className="mt-20 lead">
                  At Home Comfort Air, we understand that choosing the right air conditioning system can be overwhelming. That's why we're here to help. With our expertise and experience, we can guide you through the process and help you find the perfect unit for your home or office space. Whether you're looking for a single room solution or a system for your entire home, we've got you covered.
                </p>
                
                 <p className="mt-20 lead">
                  We offer a range of services to help you make an informed decision. We are happy to assist you over the phone, by <a href="mailto:homecomfortair.gc@gmail.com"> email</a>, and even with a free in-home consultation. Our team of experts has over 10 years of experience, and we can provide cost comparisons to help you determine the best option for your needs and budget
                </p>

                 <p className="mt-20 lead">
                  Don't hesitate to reach out to us at Home Comfort Air or call us at <a href="tel:0404602657">0404 602 657</a> to learn more about all the options available to you and to schedule your consultation today.
                </p>

              </div>
              <div className="form-quote home-page mt-5">
                <h4 className="h6 text-center text-white fw-600 heading-box-color p-20 rounded cap">
                  Free in home appraisal
                </h4>
                <i></i>

                <MyForm />
              </div>
            </div>
          </section>

          <section>
           <GoogleReviews />
          </section>

           <section>
           <ServiceArea />

           </section>

          <section className="section-3">
            <div className="heading-box-color  heading-avatar rounded row d-flex align-items-center mb-2 mx-0">
              <div className="col-sm-3 col-lg-2 pt-2 px-4">
                <StaticImage
                  filename="HCA-avatar-WHITE-1400.png"
                  alt="home comfort air logo image"
                />
              </div>
              <div className="col">
                <h3 className="h2 fw-600 mt-2 ">
                   Air Conditioning Installation Professionals
                </h3>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-7">
                <div className="mt-2 px-3">
                  <h4 className="h5 text-dark fw-400">
                    Local Air Conditioning Experts
                  </h4>
                </div>
                <div>

                   <p className="lead mt-3 px-3">
                   At HOME COMFORT AIR, we have been providing high-quality air conditioning installation services to families and major builders in the Brisbane, Ipswich, <Link to="/gold-coast-air-conditioning">Gold Coast</Link>, and <Link to="tweed-heads-air-conditioning">Tweed Heads</Link> regions for over a decade. We offer a wide range of options for high wall and <Link to="/multi-head-systems">multi head </Link> <Link to="/split-systems">split systems</Link>, including popular brands such as Kelvinator, Acrton, <Link to="/products/daikin-air-conditioning"> Daikin</Link>, Braemar, LG, Haier, Mitsubishi, and <Link to="/products/samsung-air-conditioning">Samsung</Link>, as well as ducted residential and commercial systems with Daikin and Actron air conditioners. Additionally, our team is experienced in installing cassette units and wall-mounted split systems in Queensland schools.
                   </p>


                   <p className="lead mt-3 px-3">
                   We are proud to service the Gold Coast, <Link to="/ipswich-air-conditioning"> Ipswich</Link>, and <Link to="/brisbane-conditioning">Brisbane</Link> areas and our staff are licensed experts in air conditioning. We stand behind our work and offer a <Link to="/installation-warranty">5-year warranty</Link> on all new installations. Customer satisfaction is our top priority, so you can trust that you are in good hands when choosing air conditioning for your home. We are available 6 days a week and can be reached between the hours of 8am and 5pm. Contact us today to schedule an installation or for more information.
                   </p>






                 {/* <p className="lead mt-3 px-3">
                    We've been installing domestic air conditioners for family's
                    and major builders around Brisbane, Ipswich, <Link to="/gold-coast-air-conditioning">Gold Coast</Link> and
                    Tweed Heads area's for over a decade. Everything from high
                    wall and <Link to="/multi-head-systems">multi head </Link>
                    split systems including major brands, Kelvinator, Acrton,
                    <Link to="/products/daikin-air-conditioning"> Daikin</Link>, Braemar, LG, <Link to="/products/haier-air-conditioning">Haier</Link>, Mitsubishi and <Link to="/products/samsung-air-conditioning">Samsung</Link> as well
                    as <Link to="/ducted-systems">ducted</Link> residential and
                    commercial systems with Daikin and Actron air conditioners.
                    Furthermore, we're experienced working in Queensland schools
                    installing cassette units and wall mounted{" "}
                    <Link to="/split-systems">split systems</Link> air
                    conditioners.
                  </p>
                  <p className="mt-20 lead px-3">
                    We <Link to="/service">service</Link> the Gold Coast,
                    <Link to="/ipswich-air-conditioning"> Ipswich</Link> and <Link to="/brisbane-conditioning">Brisbane</Link> areas. Our staff are licensed experts in air conditioning, and we offer a 5 year warranty on the
                    workmanship of new installation. HOME COMFORT AIR prides
                    itself on 100% customer satisfaction, so you know you're in
                    the right hands when choosing air conditioning for your
                    home. Furthermore, we operate 6 days a week and can be
                    contacted between the hours of 8am and 5pm.
                  </p>
                  */} 
                </div>
              </div>
              <div className="col-lg-5">
                <div className="home-comfort-air-img mt-3">
                  {" "}
                  <StaticImage
                    filename="homecomfort.jpg"
                    alt="home comfort air logo image"
                  />
                </div>
                HOME COMFORT AIR
                <span
                  style={{ fontFamily: `'Caveat', cursive`, marginLeft: `6px` }}
                >
                  The smart choice in air conditioning
                </span>
              </div>
            </div>
            <div className="my-4">
              {" "}
              <div className="mt-20 h5 text-center px-3">
                <span>Need air conditioning done right?</span>{" "}
                <div className="my-2">
                  <a className="btn btn-green--" href="tel:0404602657">
                    Call 0404 602 657
                  </a>{" "}
                </div>
                <span>your satisfaction, is our guarantee!</span>
              </div>
            </div>

            <section>
            <p className="px-20 mt-4">
             <small>At Home Comfort Air, we aim to exceed our customer's expectations by offering the finest air conditioning systems and services. Our dedication to providing top-notch, energy-efficient, and dependable solutions extends to the Gold Coast, Brisbane, Ipswich and <Link to="tweed-heads-air-conditioning">Tweed Heads</Link> regions. Reach out to us today to schedule an installation or to learn more about our offerings.</small>
          </p>
        </section> 

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
              alt="home comfort air logo image"
            />
          </div>

           <div className="heading-box-color heading-avatar rounded row d-flex align-items-center mb-2 mx-0">
              <div className="col-sm-3 col-lg-2 pt-2 px-4">
                <StaticImage
                  filename="HCA-avatar-WHITE-1400.png"
                  alt="home comfort air logo image"
                />
              </div>
              <div className="col">
                <h3 className="h2 fw-600 mt-2 ">
                  Daikin Air Conditioning
                </h3>
              </div>
            </div>

          <div className="px-3">
          <DaikinSplitSystems />
<div className="py-2">
 <Link to="/products" className="btn-- btn-primary-- text-white">
            View Split Systems
          </Link>
</div>
          
          
          </div>

         
          <br />

 <script async src="https://www.googletagmanager.com/gtag/js?id=G-XF1GKXN75R"></script> 

      <script> {` window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-XF1GKXN75R');`} </script>
        </div>
      </Layout>
    </Fragment>
  )
}

export default IndexPage
