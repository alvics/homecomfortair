// Display the list of products
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/ui/Layouts/layout"

import SEO from "../components/seo"
import BookService from "../components/BookServiceForm"

const JobOrder = () => (
  <Layout>
    <div className="job-order-wrapper py-3">
      <SEO title="Job order" />
      <div style={{ textAlign: "center" }}>
        <code className="px-2">Does your air conditioner need attention?</code>
        <h1 className="h2 heading-box-color fw-600 p-3 rounded">
          Book in your job
        </h1>
        <p className="font-italic">
          For breakdowns, repairs and service. <br />
          We'll contact you, to confirm the date and time.
        </p>
      </div>
      <div className="grid-300">
        <BookService />
      </div>
    </div>
  </Layout>
)

export default JobOrder
