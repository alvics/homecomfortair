// Display the list of products
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/ui/Layouts/layout"

import SEO from "../components/seo"
import MideaProducts from "../components/Products/MideaProducts"
// import RoomSizes from "../components/Queries/RoomSizes"

const Ipswich = ({ data }) => {
  // const {
  //   allStrapiProduct: { nodes: roomSizes },
  // } = data

  return (
    <Layout>
      <SEO title="Ipswich" />

      <div className="pt-3">
        <h1 className="h2 cam text-center text-blue fw-600 heading-box-color rounded py-3">
          Ipswich Air Conditioning Service
        </h1>
      </div>

      <div className="container body-wrapper">
        <div className="row">
          <div className="col-lg-8">
            <div className="p-3">
              <p>
                Split system air conditioning within the Ipswich shire region.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
                provident, voluptas quae sequi earum quaerat sunt quod iste.
                Repellat hic reprehenderit deserunt illum nemo dolorum.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="product-grid">
              <MideaProducts />
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

export default Ipswich
