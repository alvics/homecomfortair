// GET all Split systems products Query from strapi

import React from "react"
import Product from "./Product"
import { graphql, useStaticQuery } from "gatsby"

const SplitSystems = () => {
  // Check to see if we have the query
  // const data = useStaticQuery(query)
  // console.log(data)
  // get allStrapiProducts and change the nodes name to products
  const {
    allStrapiProduct: { nodes: products },
  } = useStaticQuery(query)

  return (
    <section>
      <div className="product-grid Toshiba">
        {products.map(product => {
          return <Product key={product.id} {...product} />
        })}
      </div>
    </section>
  )
}

const query = graphql`
  {
    allStrapiProduct {
      nodes {
        capacity
        description
        id
        price
        room_sizes {
          size
        }
        title
        url
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`

export default SplitSystems
