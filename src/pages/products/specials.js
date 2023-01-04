// Display the list of products
import React from "react"
import StaticImage from "../../components/StaticQueryImages"
import CTA from "../../components/CTA"
import Layout from "../../components/ui/Layouts/layout"
import SEO from "../../components/seo"
// import RoomSizes from "../components/Queries/RoomSizes"
// import MideaProducts from "../components/Products/MideaProducts"
// import ToshibaProducts from "../../components/Products/Toshiba"
// import CarrierProducts from "../components/Products/CarrierProducts"
import HaierProducts from "../../components/Products/Haier"
import Specials from "../../components/Products/Specials"

const SpecialsComp = () => {
  return (
    <Layout>
      <SEO
        title="Specials Monthly Air Conditioning | Home Comfort Air"
        description={`Visit HOME COMFORT AIR to check our monthly air conditioning specials, supplied and installed reverse cycle split systems a/c from $1050.`}
        keywords={[
          `Gold,Coast,Air,Conditioning,
Split,systems,Ipswich,Brisbane,Specials`,
        ]}
      />
      <div className="container body-wrapper ducted-systems">
        <div className="pt-3 ducted-systems-avatar  heading-box-color rounded pb-3">
          <h1 className="h2 cam text-center text-white fw-600  p-3">
            <span style={{ maxHeight: 305 }}>
              {" "}
              <StaticImage
                filename="HCA-avatar-WHITE-1400.png"
                alt="home comfort air avatar white image"
              />
            </span>
            Split Systems Air Conditioning Specials
          </h1>
          <CTA />
        </div>

        <div className="row">
          <div className="col-lg-8">
            <h2 className="h5 cap my-3 fw-600">
              latest Air Conditioning Deals
            </h2>
            <Specials />
          </div>
          <div className="col-lg-4">
            <h3 className="h6 cam my-3 fw-600">Recommended leading brands</h3>
            <div className="product-grid">
              <HaierProducts />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default SpecialsComp
