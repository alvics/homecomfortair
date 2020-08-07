// Display the list of products
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/ui/Layouts/layout"
import StaticImage from "../components/StaticQueryImages"
import Form from "../components/quoteForm"
import SEO from "../components/seo"
import AllSplitSystems from "../components/Products/AllSplitSystems"

import RoomSizeTable from "../components/RoomSize"

const ProductsPage = () => {
  return (
    <Layout>
      <SEO title="Product Archive Page" />

      <div className="container body-wrapper products-archive">
        <div className="row">
          <div className="col-lg-10">
            <div>
              <StaticImage
                filename="splits-add-2.png"
                alt="home comfort air image"
              />
            </div>
            <h1 className="h5 fw-600 cap pt-3">
              Split Systems Air Conditioning
            </h1>
            <div className="text-right">
              <p style={{ fontSize: 12 }}>Showing 27 products</p>
            </div>
            <div className="split-system-archive">
              <AllSplitSystems />
            </div>
          </div>
          <div className="col mt-5 archive-category">
            <h3 className="h6 fw-600">Categories</h3>
            <hr />
            <p style={{ fontSize: 13 }}>
              <Link to="/split-systems">Split Systems</Link>
            </p>
            <hr />
            <p style={{ fontSize: 13 }}>
              <Link to="/ducted-systems">Ducted Systems</Link>
            </p>
            <hr />
            <p style={{ fontSize: 13 }}>
              <Link to="/multi-head-systems">Multi-head Systems</Link>
            </p>
            <hr />
            <p style={{ fontSize: 13 }}>
              <Link to="/breakdowns">Service / Repairs</Link>
            </p>
            <hr />
          </div>
        </div>

        <div className="grid-2">
          <div className="span-col-3">
            <h4 className="text-dark fw-400">
              Gold Coast Air Conditioning Service
            </h4>
            <StaticImage
              filename="hero-3.jpg"
              alt="split system air image"
              height="150"
            />
          </div>

          <div className="form-quote mt-5">
            <h4 className="heading-box-green p-20 rounded">
              Get a quick quote
            </h4>
            <Form />
          </div>
        </div>
        <div className="mt-3">
          <h4>Choose the right size air conditioner for your space</h4>
          <RoomSizeTable />
          <small style={{ fontSize: 12 }}>
            This is a rough guide only, there are some factors to consider,
            large windows with direct sunlight, opened areas and so on. We can
            help you determine the right size air conditioner for your room.
          </small>
        </div>
      </div>
    </Layout>
  )
}

export default ProductsPage
