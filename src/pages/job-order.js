// Display the list of products
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/ui/Layouts/layout"
import Background from "../components/Background"

import SEO from "../components/seo"

const JobOrder = () => (
  <Layout>
    <div className="job-order-wrapper py-3">
      <SEO title="Job order" />
      <div style={{ textAlign: "center" }}>
        <code>Using job order</code>
        <h1 className="heading-box-color p-3">Book your job</h1>
        <p className="font-italic">
          We'll contact you, to confirm the date and time.
        </p>
      </div>
      <div className="grid-300">
        <Background />
      </div>

      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default JobOrder
