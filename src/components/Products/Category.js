// GET all Categories, Query from strapi

import React from "react"
import Product from "./Product"
import { graphql, useStaticQuery } from "gatsby"

const Categories = () => {
  const {
    allStrapiProduct: { nodes: categories },
  } = useStaticQuery(query)

  return (
    <section>
      <h1>Hello from Starpi categories, Categories!</h1>
      <div className="product-grid midea">
        {categories.map(product => {
          console.log(product)
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
        categories {
          brand
        }
      }
    }
  }
`

export default Categories
