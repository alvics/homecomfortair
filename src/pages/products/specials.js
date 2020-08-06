// Display the list of products
import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/ui/Layouts/layout"

import SEO from "../../components/seo"
// import RoomSizes from "../components/Queries/RoomSizes"
// import MideaProducts from "../components/Products/MideaProducts"
import ToshibaProducts from "../../components/Products/Toshiba"
// import CarrierProducts from "../components/Products/CarrierProducts"
import Specials from "../../components/Products/Specials"

const SpecialsComp = () => {
  return (
    <Layout>
      <SEO title="Special Deals" />
      <div className="container body-wrapper">
        <div className="pt-3">
          <h1 className="h2 cam text-center text-blue fw-600 heading-box-color rounded py-3">
            Monthly Air Conditioning Specials
          </h1>
        </div>

        <div className="row">
          <div className="col-lg-8">
            <h3 className="h5 cap my-3 fw-600">
              latest Air Conditioning Deals
            </h3>
            <Specials />
          </div>
          <div className="col-lg-4">
            <h3 className="h6 cam my-3 fw-600">Recommended leading brands</h3>
            <div className="product-grid">
              <ToshibaProducts />
            </div>
          </div>
        </div>
      </div>

      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default SpecialsComp
