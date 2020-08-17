// Display the list of products
import React from "react"
import { Link } from "gatsby"
import Layout from "../components/ui/Layouts/layout"
import SEO from "../components/seo"
import StaticImage from "../components/StaticQueryImages"
// import ToshibaProducts from "../components/Products/Toshiba"
import CarrierProducts from "../components/Products/CarrierProducts"

const ProductsPage = () => {
  return (
    <Layout>
      <SEO
        title="About Us"
        description={`We've been working in south east Queensland for over 10 years installing split system air conditioning throughout Ipswich, Brisbane and the Gold Coast area's.`}
        keywords={[
          `Gold,Coast,Air,Conditioning,
Split,systems,Ipswich,Brisbane,Specials`,
        ]}
      />

      <div className="container  body-wrapper">
        <div className="contact pt-2" style={{ textAlign: "center" }}>
          <StaticImage
            filename="Home-Comfort-Air-COL-03-650.png"
            alt="home comfort air image"
          />
          <h1 className="p-3 text-dark cap fw-600 h4">About Us</h1>

          <p className="font-italic">
            *Residential Air Conditioning Specialists
          </p>
        </div>
        <div className="row about-us">
          <div className="col-lg-8 pt-3">
            <div className="px-3">
              <StaticImage
                filename="splits-add-11-pow.png"
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
              systems with major brands, Daikin, Haier, Kelvinator, Toshiba,
              Acrton, Braemar, Carrier, Midea, LG, Mitsubishi and Samsung as
              well as ducted residential and commercial systems with Daikin and
              Actron air conditioners. Furthermore, experienced working in
              Queensland schools installing air conditioning systems.{" "}
            </p>

            <p className="lead-20 px-20 mt-3">
              We service South East Queensland installing all major brand air
              conditioners, if you can see your location on the maps in our
              service area, we'll come to you. Our staff are licensed experts
              when it comes to installations or repairs, and we offer a 5 year
              warranty on all new installations of split systems. We pride
              ourselves on 100% customer satisfaction and quality workmanship.
              We operate 6 days a week and can be contacted between the hours of
              8am and 5pm.{" "}
            </p>
            <p className="lead-20 px-20">
              If your looking for professional, quality workmanship, give us a
              call on 0404 602 657 HOME COMFORT AIR, for residential air
              conditioning solutions. Your satisfaction, is our guarantee!{" "}
            </p>
            <div className="px-3">
              <StaticImage
                filename="install-new.png"
                alt="home comfort air image"
              />
            </div>
            <div className="mt-2">
              <CarrierProducts />
            </div>
          </div>
          <div className="col-lg-4 pt-3">
            <div className="">
              <div>
                <h3 className="h5 cap fw-600">Servicing Area's</h3>
              </div>
              <div>Gold Coast and surrounding area's</div>
              <div className="mb-1">
                <StaticImage
                  filename="map-gold-coast.png"
                  alt="map-gold-coast"
                />
              </div>
              <div>Brisbane and surrounding area's</div>
              <StaticImage
                filename="map-brisbane-distances-3.png"
                alt="map-brisbane-distances"
              />
            </div>
          </div>
        </div>
        <div className="mt-2">
          <Link to="/products">View all split systems ></Link>
        </div>
      </div>
    </Layout>
  )
}

export default ProductsPage
