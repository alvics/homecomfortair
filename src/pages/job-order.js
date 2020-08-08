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
        <div className="pt-2 multi-systems-avatar heading-box-color rounded">
          <h1 className="h1 cam text-center text-white fw-600 p-3">
            <span style={{ maxHeight: 305 }}>
              {" "}
              <StaticImage
                filename="HCA-avatar-WHITE-1400.png"
                alt="home comfort air image"
              />
            </span>
            Book your service
          </h1>
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
