// Display the list of products
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/ui/Layouts/layout"

import SEO from "../components/seo"
import Hero from "../components/hero"
import StaticImage from "../components/StaticQueryImages"
import ToshibaProducts from "../components/Products/Toshiba"

import CarrierProducts from "../components/Products/CarrierProducts"

const ProductsPage = () => {
  return (
    <Layout>
      <SEO title="About Us" />
      <Hero />

      <div className="container about-us body-wrapper">
        <div className="row">
          <div className="col-lg-8 pt-3">
            <div className="px-3">
              <StaticImage
                filename="splits-add.png"
                alt="home comfort air image"
              />
            </div>
            <div className="pl-3 mt-3">
              <h1 className="h5 cap fw-600">About Us</h1>
            </div>

            <p className="lead-20 px-20">
              We've been installing domestic air conditioners for family's and
              major builders around Brisbane, Gold Coast and Tweed Heads area's
              for over a decade. Everything from high wall split and multi head
              systems with major brands like, Daikin, Haier, Kelvinator,
              Toshiba, Acrton, Braemar, Carrier, Midea, LG, Mitsubishi and
              Samsung as well as ducted residential and commercial systems with
              Daikin and Actron air conditioners. Furthermore, we're experienced
              working in Queensland schools installing cassettes units and split
              systems.{" "}
            </p>

            <p className="lead-20 px-20 mt-3">
              We service the Gold Coast, Ipswich and Brisbane areas installing
              all major brand air conditioners. Our staff are licensed experts
              when it comes to installations or repairs, and we offer a 5 year
              warranty on all new installations of split systems.
              <i>"That's some peace of mind you can be comfortable with".</i> We
              pride ourselves on 100% customer satisfaction and quality
              workmanship. We operate 6 days a week and can be contacted between
              the hours of 8am and 5pm.{" "}
            </p>
            <p className="lead-20 px-20">
              If your looking to get the job done right by professionals, then
              give us a call on 0404 602 657 HOME COMFORT AIR, residential air
              conditioning experts. Your satisfaction, is our guarantee!{" "}
            </p>
            <div className="px-3">
              <StaticImage
                filename="install.png"
                alt="home comfort air image"
              />
            </div>
            <div className="mt-2">
              <CarrierProducts />
            </div>
          </div>
          <div className="col-lg-4 pt-3">
            <div className="">
              <div className="mb-1">
                <StaticImage filename="4.png" alt="home comfort air image" />
              </div>
              <ToshibaProducts />
            </div>
          </div>
        </div>
        <Link to="/products">View all split systems</Link>
      </div>
    </Layout>
  )
}

export default ProductsPage
