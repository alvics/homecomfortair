// Display the list of products
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/ui/Layouts/layout"

import SEO from "../components/seo"
import SplitSystems from "../components/Products/AllSplitSystems"

const ProductsPage = () => {
  return (
    <Layout>
      <SEO title="Product page" />
      <div style={{ textAlign: "center" }}>
        <code>Using products page template</code>
      </div>

      <hr />
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <SplitSystems />
          </div>
          <div className="col-lg-4">
            <div className="product-grid"></div>
          </div>
        </div>
      </div>

      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default ProductsPage
