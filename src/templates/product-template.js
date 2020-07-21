// SINGLE PRODUCT DETAILS PAGE TEMPLATE
// Dynamically generated by gatsby
import React from "react"
import { graphql, Link } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/ui/Layouts/layout"
import ReactMarkdown from "react-markdown"
import MideaProducts from "../components/Products/MideaProducts"

// Destructuring all the properties from the query
const SingleProduct = ({
  data: {
    product: {
      title,
      price,
      brand,
      capacity,
      heating,
      image: {
        childImageSharp: { fixed },
      },
      description,
    },
  },
}) => {
  return (
    <Layout>
      <section className="SingleProduct container pt-5">
        <div className="row">
          <div className="col-lg-6 text-md-center">
            <div className="fluid">
              <Image fixed={fixed} alt={title} />
            </div>
          </div>

          <div className="col-lg-6 gx-5">
            <article className=" p-4">
              <h2 className="cap brand-single">{brand}</h2>
              <h1 className="h3">{title}</h1>
              <span className="price-single primary fw-600">
                ${price}.00 <span className="GST-text">Inc GST</span>
              </span>
              <div style={{ marginTop: `10px`, fontSize: `16px` }}>
                <span>{capacity} Cooling Capacity</span>
                <br />
                <span>{heating} Heating Capacity</span>
              </div>
              <div
                className="short-description mt-3"
                style={{ color: `#414042`, fontSize: `16px` }}
              >
                Supply and fully install a new {title}, based on a back to back
                installation (indoor to outdoor pipe length 3m). Quote on
                additional length.
              </div>
              <Link
                to="/job-order"
                className="btn-- btn-orange-- mt-3 mb-5 text-white"
              >
                Order now
              </Link>
            </article>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-lg-8">
            {" "}
            <div className="markdown container py-5">
              <article>
                <div
                  class="banner-ac mb-4"
                  style={{
                    backgroundColor: `#f7f7f7`,
                    border: `1px solid #ccc`,
                    borderRadius: `5px`,
                    padding: `15px`,
                  }}
                >
                  <span
                    style={{
                      fontSize: `1.5em`,
                      fontWeight: `600`,
                    }}
                  >
                    Looking for new air conditioning?
                  </span>
                  <br />
                  <span style={{ fontSize: `.9em`, lineHeight: `1em` }}>
                    We can supply and install most brands, and if you've already
                    purchased an air conditioner, we can install it for you.
                    Contact us for a free instant quote.
                  </span>
                  <span
                    className="btn-- btn-primary btn-sm"
                    style={{
                      float: `right`,
                      paddingRight: `15px`,
                      paddingLeft: `15px`,
                      marginRight: `15px`,
                      borderRadius: `5px`,
                    }}
                  >
                    Contact us
                  </span>
                </div>
                <ReactMarkdown source={description} />
                <Link to="/contact" className="addToCartBtn">
                  Contact me
                </Link>
                <Link
                  style={{ textAlign: "center", marginLeft: "20px" }}
                  to="/products"
                >
                  back to products
                </Link>
              </article>
            </div>
          </div>
          <div className="col-lg-4 single-products-side">
            <h5 className="mt-5 h6" style={{ fontWeight: `600` }}>
              Also recommended for you
            </h5>
            <MideaProducts />
            <div
              className="my-3"
              style={{
                backgroundColor: `#1584AF`,
                borderRadius: `5px`,
                width: `100%`,
              }}
            >
              <h5 className="p-2 text-white">
                Already purchased and looking for installation only? Install
                only service >>
              </h5>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetProducts($url: String) {
    product: strapiProduct(url: { eq: $url }) {
      title
      price
      brand
      description
      capacity
      heating
      id
      image {
        childImageSharp {
          fixed(width: 325) {
            base64
            width
            height
            src
            srcSet
          }
        }
      }
    }
  }
`

export default SingleProduct
