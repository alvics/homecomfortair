// Create product template (archive cards)

import React from "react"
// import styles from "../../css/single-product.module.css"
import Image from "gatsby-image"
import { Link } from "gatsby"

const Product = ({ title, image, price, url, saleprice }) => {
  const mainImage = image.childImageSharp.fluid
  return (
    <Link to={`/products/${url}`}>
      <article className="product-card border archive">
        <div
          className="archive-img"
          style={{ display: `flex`, justifyContent: `center` }}
        >
          <Image fluid={mainImage} alt={title} />
        </div>

        <div>
          <div style={{ textAlign: `left` }}>
            <h3 className="fsz-14 title-cards-archive text-black lh-base">{title}</h3>
            <p
              className="text-cards-archive"
              style={{ fontSize: `14px`, fontWeight: `400` }}
            >
              Supplied & Installed
              <br />
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
                <span className="fsz-21 fw-600 price">
                  <span className='fsz-14 pb-2 fw-600 ' style={{ position:'relative', top: '-5px' }}>$</span>{price}
                  
                 
                  <br />
                   <div style={{maxWidth:'100px'}} className="fsz-14 fw-300" data-bs-toggle="tooltip" data-bs-placement="bottom" title="This is the standard retail price at which this exclusive product is offered for sale by home comfort air."><span className="mr-1 fsz-12"  >SRP</span><del className="fsz-12" style={{cursor:'grab'}}> ${price + 100} </del></div>
                    <div style={{fontSize:'11px'}} className='fsz-11 py-1 text-center bg-light bg-gradient mt-2 fw-600 text-uppercase d-flex' >View more information <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" className="bi bi-check-square-fill pl-1" viewBox="0 0 16 16">
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/>
</svg></div>
                </span>
              )}
            </p>
          </div>
          
        </div>
      </article>
    </Link>
  )
}

export default Product
