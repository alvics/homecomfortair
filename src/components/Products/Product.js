// Create product template

import React from "react"
// import styles from "../../css/single-product.module.css"
import Image from "gatsby-image"
import { Link } from "gatsby"

const Product = ({ title, image, price, url }) => {
  const mainImage = image.childImageSharp.fluid
  return (
    <Link to={`/products/${url}`}>
      <article>
        <div>
          <Image fluid={mainImage} alt={title}></Image>
        </div>
        <div>
          <div>
            <h3>{title}</h3>
            <p>{price}</p>
          </div>
          <div className="log-img" style={{ height: "20px" }}></div>
        </div>
      </article>
    </Link>
  )
}

export default Product
