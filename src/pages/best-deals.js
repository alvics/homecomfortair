// Display the list of products
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/ui/Layouts/layout"

import SEO from "../components/seo"
// import RoomSizes from "../components/Queries/RoomSizes"
import MideaProducts from "../components/Products/MideaProducts"
import ToshibaProducts from "../components/Products/Toshiba"
import CarrierProducts from "../components/Products/CarrierProducts"

const BestDeals = ({ data }) => {
  // const {
  //   allStrapiProduct: { nodes: roomSizes },
  // } = data

  return (
    <Layout>
      <SEO title="Best Deals" />
      <div className="container body-wrapper">
        <div className="pt-3">
          <h1 className="h2 cam text-center text-blue fw-600 heading-box-color rounded py-3">
            Our Best Deals, Great Value!
          </h1>
        </div>

        <div className="row">
          <div className="col-lg-8">
            <h3 className="h5 cap my-3 fw-600">Supply & Install Midea A/C</h3>
            <MideaProducts />
            <h3 className="h5 cap my-3 fw-600">Supply & Install Carrier A/C</h3>
            <CarrierProducts />
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

export default BestDeals
