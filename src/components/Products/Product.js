// Create product template (archive cards)

import React from "react"
// import styles from "../../css/single-product.module.css"
import Image from "gatsby-image"
import { Link } from "gatsby"

const Product = ({ title, image, price, url, saleprice }) => {
  const mainImage = image.childImageSharp.fluid
  return (
    <Link to={`/products/${url}`}>
      <article className="product-card archive">
        <div
          className="archive-img"
          style={{ display: `flex`, justifyContent: `center` }}
        >
          <Image fluid={mainImage} alt={title} />
        </div>

        <div>
          <div style={{ textAlign: `center` }}>
            <h3 className="h6 title-cards-archive">{title}</h3>
            <p
              className="text-cards-archive"
              style={{ fontSize: `1rem`, fontWeight: `600` }}
            >
              Supply and Installed{" "}
              {price && saleprice ? (
                <span className="primary fw-600 sale-price">
                  ${saleprice}.00
                  <span
                    className="GST-text"
                    style={{ opacity: `0.6`, fontSize: `0.7rem` }}
                  >
                    {""}Inc GST
                    <br />
                    <del>${price}.00 Inc GST </del>
                  </span>
                </span>
              ) : (
                <span className="primary fw-600 price">
                  ${price}.00{" "}
                  <span
                    className="GST-text"
                    style={{ opacity: `0.6`, fontSize: `0.7rem` }}
                  >
                    Inc GST
                  </span>
                </span>
              )}
            </p>
          </div>
          <div className="log-img" style={{ height: "20px" }}></div>
        </div>
      </article>
    </Link>
  )
}

export default Product
