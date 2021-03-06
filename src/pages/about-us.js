// Display the list of products
import React from "react"
import { Link } from "gatsby"
import Layout from "../components/ui/Layouts/layout"
import SEO from "../components/seo"
import StaticImage from "../components/StaticQueryImages"
// import ToshibaProducts from "../components/Products/Toshiba"
import CarrierProducts from "../components/Products/CarrierProducts"
// import Tabs from "../components/pages/Multi-Systems/MyTabs"

const ProductsPage = () => {
  return (
    <Layout>
      <SEO
        title="About Home Comfort Air | Gold Coast Split System Air Conditioning"
        description={`We've been servicing south east Queensland for over 10 years installing split system air conditioning throughout Ipswich, Brisbane and the Gold Coast area's.`}
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
            <div className="wrapper-about-img">
              <StaticImage
                filename="splits-add-11-pow.png"
                alt="home comfort air image"
              />
            </div>
            <div className="mt-3">
              <h1 className="h5 cap fw-600">About Us</h1>
            </div>

            <p className="lead-20">
              We've been installing domestic air conditioners for family's and
              major builders around Brisbane, Gold Coast and Tweed Heads area's
              for over a decade. Everything from{" "}
              <Link to="/split-systems">high wall split</Link> and{" "}
              <Link to="/multi-head-systems">multi head systems</Link> with
              major brands, Daikin, Haier, Kelvinator, Toshiba, Acrton, Braemar,
              Carrier, Midea, LG, Mitsubishi and Samsung as well as{" "}
              <Link to="/ducted-systems">ducted residential</Link> and
              commercial systems with Daikin and Actron air conditioners.
              Furthermore, experienced working in Queensland schools installing
              air conditioning systems.{" "}
            </p>

            <p className="lead-20 mt-3">
              HOME COMFORT AIR services South East Queensland installing all
              major brand air conditioners, if you can see your location on the
              maps in our service area, we'll come to you. Our staff are
              licensed experts when it comes to installations or repairs, and we
              offer a 5 year warranty on all new installations of split systems.
              Furthermore, we pride ourselves on 100% customer satisfaction and
              quality workmanship. HOME COMFORT AIR operates 6 days a week and
              can be contacted between the hours of 8am and 5pm.{" "}
            </p>
            <p className="lead-20">
              If your looking for air conditioning with professional and quality
              workmanship, give HOME COMFORT AIR a call on{" "}
              <a href="tel:0404602657">0404 602 657</a> for residential air
              conditioning solutions. Your satisfaction, is our guarantee!{" "}
            </p>
            <div className="img-wrapper-e">
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
