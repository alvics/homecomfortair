// Display the list of products
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/ui/Layouts/layout"
import Background from "../components/Background"

import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <div className="job-order-wrapper py-3 contact">
      <SEO title="Job order" />
      <div style={{ textAlign: "center" }}>
        <h1 className="heading-box-color p-3 rounded">Contact Us</h1>

        <p className="font-italic">
          Any questions? we'll get back to you ASAP.
        </p>
      </div>
      <div className="grid-300">
        <Background />
      </div>
      <div
        style={{ backgroundColor: `#5096dc2b` }}
        className="py-3 text-center mt-5"
      >
        <a
          className="d-flex justify-content-start text-shadow-1 py-2"
          href="https://www.google.com/maps/place/22+Beitz+Ave,+Labrador+QLD+4215/@-27.9403803,153.396257,17z/data=!3m1!4b1!4m5!3m4!1s0x6b910fd0d0af69d3:0x9dd8867748231113!8m2!3d-27.9403803!4d153.3984457"
        >
          <span style={{ fontSize: 32 }} class="material-icons">
            location_on
          </span>
          <span style={{ color: `#333` }}>
            Location: 22 Beitz Ave Labrador, QLD 4215
          </span>
        </a>

        <a
          className="d-flex justify-content-start text-shadow-1 py-2"
          href="mailto:homecomfortair.gc@gmail.com"
        >
          <span style={{ fontSize: 32 }} class="material-icons">
            email
          </span>
          <span style={{ color: `#333`, marginLeft: 5 }}>
            Email: homecomfortair.gc@gmail.com
          </span>
        </a>
        <a
          className="d-flex justify-content-start text-shadow-1 py-2"
          href="tel:0404602657"
        >
          <span style={{ fontSize: 32 }} class="material-icons">
            local_phone
          </span>
          <span style={{ color: `#333`, marginLeft: 5 }}>
            Phone: 0404 602 657
          </span>
        </a>
        <a
          className="d-flex justify-content-start text-shadow-1 py-2"
          href="tel:0404602657"
        >
          <span style={{ fontSize: 32, marginLeft: 5 }} class="material-icons">
            schedule
          </span>
          <span style={{ color: `#333` }}>Hours: 8.00am to 5.00pm</span>
        </a>
      </div>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default Contact
