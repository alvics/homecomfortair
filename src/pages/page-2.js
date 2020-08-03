// Display the list of products
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/ui/Layouts/layout"
import Products from "../components/Products/Products"
import SEO from "../components/seo"
// import RoomSizes from "../components/Queries/RoomSizes"

const ProductsPage = ({ data }) => {
  // const {
  //   allStrapiProduct: { nodes: roomSizes },
  // } = data

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
            <Products />
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
