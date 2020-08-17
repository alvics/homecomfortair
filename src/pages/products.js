// Display the list of products
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/ui/Layouts/layout"
import StaticImage from "../components/StaticQueryImages"
import Form from "../components/quoteForm"
import SEO from "../components/seo"
import MideaProducts from "../components/Products/MideaProducts"
import CarrierProducts from "../components/Products/CarrierProducts"
import ToshibaProducts from "../components/Products/Toshiba"
import SamsungProducts from "../components/Products/SamsungProducts"
import RoomSizeTable from "../components/RoomSize"
import CTA from "../components/CTA"

const ProductsPage = () => {
  return (
    <Layout>
      <SEO title="Product Archive Page" />

      <div className="container body-wrapper">
        <div className="row">
          <div className="col-lg-10">
            <div className="pt-2 split-systems-avatar heading-box-color rounded ">
              <h1 className="h1 cam text-center text-white fw-600 p-3">
                <span>
                  {" "}
                  <StaticImage
                    filename="HCA-avatar-WHITE-1400.png"
                    alt="home comfort air image"
                  />
                </span>
                Supply & Install Split Systems
              </h1>
              <div className="pb-3">
                <CTA />
              </div>
            </div>

            <div className="text-right mt-3">
              <p style={{ fontSize: 12 }}>Showing 27 products</p>
            </div>
            <div className="split-system-archive products-archive">
              <div className="mb-2">
                <div
                  className="text-center border rounded"
                  style={{ backgroundColor: `#7DCDFF` }}
                >
                  <h3
                    className="h5 fw-600 cap mt-2 px-3  text-white "
                    style={{ padding: `1.3rem 0` }}
                  >
                    Supply and Install Midea
                    <br />{" "}
                    <span className="lead cam text-white">
                      <small>Air Conditioning Systems</small>
                    </span>
                  </h3>
                </div>
              </div>

              <MideaProducts />

              <div
                style={{ backgroundColor: `#004178` }}
                className="my-3 text-center rounded"
              >
                <h3
                  className="h5 text-white fw-600 cap mt-2 px-3"
                  style={{ padding: `1.3rem 0` }}
                >
                  Supply and Install Carrier
                  <br />{" "}
                  <span className="lead cam text-white">
                    <small>Air Conditioning Systems</small>
                  </span>
                </h3>
              </div>

              <CarrierProducts />

              <div
                style={{ backgroundColor: `#D01C22` }}
                className="my-3 text-center rounded"
              >
                <h3
                  className="h5 text-white fw-600 cap mt-2 px-3"
                  style={{ padding: `1.3rem 0` }}
                >
                  Supply and Install Toshiba
                  <br />{" "}
                  <span className="lead cam text-white">
                    <small>Air Conditioning Systems</small>
                  </span>
                </h3>
              </div>

              <ToshibaProducts />

              <div s className="text-center bg-dark my-3 text-center rounded">
                <h3
                  className="text-white h5 fw-600 cap mt-2 px-3"
                  style={{ padding: `1.3rem 0` }}
                >
                  Supply and Install Samsung
                  <br />{" "}
                  <span className="lead cam text-white">
                    <small>Air Conditioning Systems</small>
                  </span>
                </h3>
              </div>

              <SamsungProducts />
              <div className="mt-3">
                <StaticImage
                  filename="splits-add-11-lg.png"
                  alt="home comfort air image"
                />
              </div>
              <div className="px-2 mt-2">
                <h5 class="fw-600">
                  Book Your Split System Installation Online
                </h5>
                <p className="lead">
                  Get air conditioning supplied and installed with our fast,
                  professional service in a matter of days! Yes you and your
                  family can enjoy the home comforts you desire within days.
                  Receive a free quote to have your air conditioning split
                  system installed now.
                </p>
              </div>
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
              <Link to="/service">Service / Maintenance</Link>
            </p>
            <hr />
          </div>
        </div>

        <div className="grid-2">
          <div className="span-col-3 archive-img-cta">
            <h5 className="h6 text-dark fw-400">
              Split System Air Conditioning Service
            </h5>
            <StaticImage
              filename="hero-3.jpg"
              alt="split system air image"
              height="150"
            />
          </div>

          <div className="form-quote mt-sm-4 mt-lg-5 p-lg-3">
            <h4 className="h5 text-white text-center fw-600 cap heading-box-color p-20 rounded">
              Get a free quote
            </h4>
            <Form />
          </div>
        </div>
        <div className="mt-3 p-lg-3">
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
