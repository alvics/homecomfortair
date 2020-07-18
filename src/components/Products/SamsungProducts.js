// GET all Midea products Query from strapi

import React from "react"
import Product from "./Product"
import { graphql, useStaticQuery } from "gatsby"
// import styles from "../../css/products.module.css"

const SamsungProducts = () => {
  // Check to see if we have the query
  // const data = useStaticQuery(query)
  // console.log(data)
  // get allStrapiProducts and change the nodes name to products
  const {
    allStrapiProduct: { nodes: products },
  } = useStaticQuery(query)

  return (
    <section>
      <h1>Hello from Starpi Products, Samsung!</h1>
      <div className="product-grid Samsung">
        {products.map(product => {
          return <Product key={product.id} {...product} />
        })}
      </div>
    </section>
  )
}

const query = graphql`
  {
    allStrapiProduct(
      filter: { categories: { elemMatch: { brand: { eq: "Samsung" } } } }
    ) {
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
            fluid(maxWidth: 350, maxHeight: 350) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`

export default SamsungProducts
