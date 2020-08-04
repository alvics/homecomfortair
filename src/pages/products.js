// Display the list of products
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/ui/Layouts/layout"

import SEO from "../components/seo"
import MideaProducts from "../components/Products/MideaProducts"
import CarrierProducts from "../components/Products/CarrierProducts"
import ToshibaProducts from "../components/Products/Toshiba"
import SamsungProducts from "../components/Products/SamsungProducts"

// import RoomSizes from "../components/Queries/RoomSizes"

const ProductsPage = ({ data }) => {
  // const {
  //   allStrapiProduct: { nodes: roomSizes },
  // } = data

  return (
    <Layout>
      <SEO title="Product page" />

      <div className="container body-wrapper">
        <div class="row">
          <div className="col-10 py-3 mt-3">
            <h1 className="h5 fw-600 cap">Split Systems Air Conditioning</h1>
            <div className="text-right">
              <p style={{ fontSize: 12 }}>Showing 27 products</p>
            </div>
          </div>
          <div className="col py-5 text-right"></div>
        </div>

        <div className="row">
          <div className="col-lg-10">
            <div className="split-system-archive">
              <h3 className="h6 fw-600 cap">Supply and Install Midea</h3>
              <MideaProducts />
              <h3 className="h6 fw-600 cap mt-2 pt-3">
                Supply and Install Carrier
              </h3>
              <CarrierProducts />
              <h3 className="h6 fw-600 cap mt-2 pt-3">
                Supply and Install Toshiba
              </h3>
              <ToshibaProducts />
              <h3 className="h6 fw-600 cap mt-2 pt-3">
                Supply and Install Samsung
              </h3>
              <SamsungProducts />
            </div>
          </div>
          <div className="col archive-category">
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
        <h2 className="h6 fw-600 cap">Supply and Install Midea</h2>
      </div>

      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

// export const query = graphql`
//   {
//     allStrapiProduct {
//       nodes {
//         room_sizes {
//           size
//           id
//         }
//         brand
//         title
//         price
//         url
//         image {
//           childImageSharp {
//             fluid {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     }
//   }
// `

export default ProductsPage
