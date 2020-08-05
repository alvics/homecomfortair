// Display the list of products
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/ui/Layouts/layout"
import StaticImage from "../components/StaticQueryImages"

import SEO from "../components/seo"
import MideaProducts from "../components/Products/MideaProducts"
import CarrierProducts from "../components/Products/CarrierProducts"
import ToshibaProducts from "../components/Products/Toshiba"
import SamsungProducts from "../components/Products/SamsungProducts"

const ProductsPage = () => {
  return (
    <Layout>
      <SEO title="Product page" />

      <div className="container body-wrapper products-archive">
        <div className="row">
          <div className="col-lg-10">
            <h1 className="h5 fw-600 cap pt-3">
              Split Systems Air Conditioning
            </h1>
            <div className="text-right">
              <p style={{ fontSize: 12 }}>Showing 27 products</p>
            </div>
            <div className="split-system-archive">
              <StaticImage
                filename="midea-add.png"
                alt="home comfort air image"
              />
              <h3 className="h6 fw-600 cap mt-2">Supply and Install Midea</h3>
              <MideaProducts />
              <div className="mt-3">
                <StaticImage
                  filename="carrier-add.png"
                  alt="home comfort air image"
                />
              </div>

              <h3 className="h6 fw-600 cap mt-2">Supply and Install Carrier</h3>
              <CarrierProducts />
              <div className="mt-3">
                <StaticImage filename="4.png" alt="home comfort air image" />
              </div>

              <h3 className="h6 fw-600 cap mt-2 pt-3">
                Supply and Install Toshiba
              </h3>
              <ToshibaProducts />
              <div className="mt-3">
                <StaticImage filename="3.png" alt="home comfort air image" />
              </div>

              <h3 className="h6 fw-600 cap mt-2 pt-3">
                Supply and Install Samsung
              </h3>
              <SamsungProducts />
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
      </div>

      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default ProductsPage
