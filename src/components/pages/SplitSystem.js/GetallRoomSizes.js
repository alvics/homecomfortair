// Create product template (archive cards)

import React from "react"
// import styles from "../../css/single-product.module.css"
import Image from "gatsby-image"
import { Link } from "gatsby"

const GetRoomSize = ({ title, image, price, url, room_sizes }) => {
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
            <span>{room_sizes}</span>
            <h3 className="h6 title-cards-archive">{title}</h3>
            <p
              className="text-cards-archive"
              style={{ fontSize: `1rem`, fontWeight: `600` }}
            >
              Supply and Installed{" "}
              <span style={{ fontWeight: `600` }}>${price}.00</span>
              <span style={{ opacity: `0.6`, fontSize: `0.7rem` }}>
                Inc.GST
              </span>
            </p>
          </div>
          <div className="log-img" style={{ height: "20px" }}></div>
        </div>
      </article>
    </Link>
  )
}

export default GetRoomSize
