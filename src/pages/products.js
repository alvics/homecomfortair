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

const ProductsPage = () => {
  return (
    <Layout>
      <SEO title="Product Archive Page" />

      <div className="container body-wrapper products-archive">
        <div className="row">
          <div className="col-lg-10">
            <div className="pt-3">
              <h1 className="h2 cam text-center text-blue fw-600 heading-box-color rounded p-3">
                <span style={{ maxHeight: 305 }}>
                  {" "}
                  <StaticImage
                    filename="Home-Comfort-Air-WHITE-1400.png"
                    alt="home comfort air image"
                  />
                </span>
                Split Systems Air Conditioning
              </h1>
            </div>
            <div className="grid-col-2 my-4">
              <h2 className="h5 fw-600  pt-3">
                Split system air conditioning installation
              </h2>
              <Link to="/contact">
                <button className="btn-- btn-green--">Free Quote</button>
              </Link>
            </div>

            <div className="text-right">
              <p style={{ fontSize: 12 }}>Showing 27 products</p>
            </div>
            <div className="split-system-archive">
              <div className="grid-col-2 mb-2">
                <h3
                  className="bg-light h6 fw-600 cap mt-2 text-center border rounded"
                  style={{ padding: `1.3rem 0` }}
                >
                  Supply and Install Midea
                  <br />{" "}
                  <span className="lead cam">
                    <small>Air Conditioning Systems</small>
                  </span>
                </h3>
                <StaticImage
                  filename="midea-add.png"
                  alt="home comfort air image"
                />
              </div>

              <MideaProducts />

              <div className="my-3 grid-col-2 text-center">
                <StaticImage
                  filename="carrier-add.png"
                  alt="home comfort air image"
                />
                <h3
                  className="bg-light h6 fw-600 cap mt-2 border rounded"
                  style={{ padding: `1.3rem 0` }}
                >
                  Supply and Install Carrier
                  <br />{" "}
                  <span className="lead cam">
                    <small>Air Conditioning Systems</small>
                  </span>
                </h3>
              </div>

              <CarrierProducts />

              <div className="my-3 grid-col-2 text-center">
                <h3
                  className="bg-light h6 fw-600 cap mt-2 border rounded"
                  style={{ padding: `1.3rem 0` }}
                >
                  Supply and Install Toshiba
                  <br />{" "}
                  <span className="lead cam">
                    <small>Air Conditioning Systems</small>
                  </span>
                </h3>
                <StaticImage filename="4.png" alt="home comfort air image" />
              </div>

              <ToshibaProducts />

              <div className="my-3 grid-col-2 text-center">
                <StaticImage filename="3.png" alt="home comfort air image" />
                <h3
                  className="bg-light h6 fw-600 cap mt-2 border rounded"
                  style={{ padding: `1.3rem 0` }}
                >
                  Supply and Install Samsung
                  <br />{" "}
                  <span className="lead cam">
                    <small>Air Conditioning Systems</small>
                  </span>
                </h3>
              </div>

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
