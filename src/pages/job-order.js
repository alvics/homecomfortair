// Display the list of products
import React from "react"
import Layout from "../components/ui/Layouts/layout"
import SEO from "../components/seo"
import BookService from "../components/BookServiceForm"
import StaticImage from "../components/StaticQueryImages"

const JobOrder = () => (
  <Layout>
    <div className="job-order-wrapper py-3">
      <SEO
        title="Breakdown Service"
        description={`Does your air conditioner need repairing or attention? Book in your job with time and day for your air conditioning breakdown and repair service through our website form.`}
        keywords={[
          `Book,Breakdown,Service,
Split,systems,Ipswich,Brisbane,Maintenance,Fix,Repair`,
        ]}
      />
      <div style={{ textAlign: "center" }}>
        <code className="px-2">Does your air conditioner need attention?</code>
        <div className="heading-box-color rounded row p-2 d-flex align-items-center mb-2">
          <div className="col pt-2 px-4">
            <div className="" style={{ maxWidth: 300 }}>
              {" "}
              <StaticImage
                filename="HCA-avatar-WHITE-1400.png"
                alt="home comfort air image"
              />
            </div>
          </div>
          <div className="col-6">
            <div className="" style={{ maxWidth: 300 }}>
              {" "}
              <StaticImage
                filename="HCA-avatar-WHITE-1400.png"
                alt="home comfort air image"
              />
            </div>
            <h1 className="h2 fw-600 mt-2 ">Book your Service</h1>
          </div>
        </div>
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
