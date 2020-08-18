// Display the list of products
import React from "react"

import Layout from "../components/ui/Layouts/layout"
import Background from "../components/Background"
import StaticImage from "../components/StaticQueryImages"

import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <div className="job-order-wrapper body-wrapper py-3 contact">
      <SEO
        title="Contact Page"
        description={`Contact HOME COMFORT AIR for split system air conditioning installations, throughout Ipswich, Brisbane and the Gold Coast area's. Book your installation through our website today.`}
        keywords={[
          `Gold,Coast,Air,Conditioning,
Split,systems,Ipswich,Brisbane,Specials`,
        ]}
      />
      <div style={{ textAlign: "center" }}>
        <StaticImage
          filename="Home-Comfort-Air-COL-03-650.png"
          alt="home comfort air image"
        />
        <h1 className="p-3 text-dark cap fw-600 h4">Contact Us</h1>

        <p className="font-italic">
          Submit your request and we'll get back to you ASAP.
        </p>
      </div>
      <div className="grid-300">
        <Background />
      </div>
      <div
        itemprop="address"
        itemscope
        itemtype="http://schema.org/PostalAddress"
        style={{ backgroundColor: `#5096dc2b` }}
        className="py-3 px-2 text-center mt-5 contact-details"
      >
        <a
          className="d-flex justify-content-start text-shadow-1 py-2"
          href="https://www.google.com/maps/place/22+Beitz+Ave,+Labrador+QLD+4215/@-27.9403803,153.396257,17z/data=!3m1!4b1!4m5!3m4!1s0x6b910fd0d0af69d3:0x9dd8867748231113!8m2!3d-27.9403803!4d153.3984457"
        >
          <span style={{ fontSize: 32 }} className="material-icons">
            location_on
          </span>

          <span
            style={{ color: `#333`, fontSize: 14 }}
            className="d-flex align-items-center"
          >
            Location: <span itemprop="streetAddress">22 Beitz Ave, </span>{" "}
            <span itemprop="addressLocality"> Labrador</span>,{" "}
            <span itemprop="addressRegion"> Queensland</span>{" "}
            <span itemprop="postalCode" style={{ paddingLeft: 4 }}>
              4215
            </span>
          </span>
        </a>

        <a
          className="d-flex justify-content-start text-shadow-1 py-2"
          href="mailto:homecomfortair.gc@gmail.com"
        >
          <span style={{ fontSize: 32 }} className="material-icons">
            email
          </span>

          <span
            style={{ color: `#333`, marginLeft: 5, fontSize: 14 }}
            className="d-flex align-items-center"
          >
            Email: homecomfortair.gc@gmail.com
          </span>
        </a>
        <a
          className="d-flex justify-content-start text-shadow-1 py-2"
          href="tel:0404602657"
        >
          <span style={{ fontSize: 32 }} className="material-icons">
            local_phone
          </span>

          <span
            style={{ color: `#333`, marginLeft: 5, fontSize: 14 }}
            className="d-flex align-items-center"
          >
            Phone: <span itemprop="telephone">0404 602 657</span>
          </span>
        </a>
        <a
          className="d-flex justify-content-start text-shadow-1 py-2"
          href="tel:0404602657"
        >
          <span
            style={{ fontSize: 32, marginLeft: 5 }}
            className="material-icons d-flex"
          >
            schedule
          </span>

          <span
            style={{ color: `#333`, fontSize: 14 }}
            className="d-flex align-items-center"
          >
            Hours: 8.00am to 5.00pm
          </span>
        </a>
      </div>
    </div>
  </Layout>
)

export default Contact
