// SINGLE PRODUCT DETAILS PAGE TEMPLATE
// Dynamically generated by gatsby
import React from "react"
import { graphql, Link } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/ui/Layouts/layout"
import ReactMarkdown from "react-markdown"
import MideaProducts from "../components/Products/MideaProducts"
import CarrierProducts from "../components/Products/CarrierProducts"
import SamsungProducts from "../components/Products/SamsungProducts"
import ToshibaProducts from "../components/Products/Toshiba"
import Modal from "../components/Modal"
import { Breadcrumb } from "gatsby-plugin-breadcrumb"
import StaticImage from "../components/StaticQueryImages"
import RoomSizeTable from "../components/RoomSize"

// Destructuring all the properties from the query

const SingleProduct = ({
  data: {
    product: {
      title,
      saleprice,
      price,
      expires,
      brand,
      capacity,
      heating,
      roomsize,
      room_sizes,
      image: {
        childImageSharp: { fixed },
      },
      description,
    },
  },
  pageContext: {
    breadcrumb: { crumbs },
  },
}) => {
  return (
    <Layout>
      <section className="SingleProduct container pt-3">
        <Breadcrumb
          crumbs={crumbs}
          crumbSeparator=" / "
          crumbLabel={brand + " " + capacity}
        />
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

              {price && saleprice ? (
                <span>
                  <span className="price-single primary fw-600">
                    {" "}
                    ${saleprice}.00{" "}
                  </span>
                  <span className="GST-text primary">
                    {""}Inc GST
                    <br />
                    <span className="fw-600">Sale ends: {expires}</span>
                    <br />
                  </span>
                  <small>
                    Regular Price <del>${price}.00 Inc GST </del>
                  </small>
                </span>
              ) : (
                <span className="price-single primary fw-600">
                  ${price}.00 <span className="GST-text">Inc GST</span>
                </span>
              )}

              <div
                style={{
                  marginTop: `10px`,
                  fontSize: `14px`,
                  fontWeight: `600`,
                }}
              >
                <span>{capacity} Cooling Capacity</span>
                <br />
                <span>{heating} Heating Capacity</span>
              </div>
              <div
                className="short-description mt-3"
                style={{ color: `#414042`, fontSize: `16px` }}
              >
                Supply and install a new {title}. Price based on a back to back
                installation (indoor to outdoor maximum pipe length 3m).
              </div>
              <button
                type="button"
                className="mt-4 btn-- btn-orange--"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                Order Now
              </button>
              <Modal />
            </article>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-lg-8">
            {" "}
            <div className="markdown container py-5">
              <article>
                <p className="text-white pl-2 py-1 rounded heading-box-color">
                  {room_sizes.map(item => {
                    return (
                      <span>
                        Suit{" "}
                        <span style={{ textTransform: `lowercase` }}>
                          {item.size}
                        </span>{" "}
                        size rooms approx {roomsize}m²
                      </span>
                    )
                  })}
                </p>

                <div
                  className="border capacity-table mb-3"
                  style={{
                    backgroundColor: `#f8f9fa`,
                    border: `1px solid #ccc`,
                    borderRadius: `8px`,
                  }}
                >
                  <table
                    class=" table table-light"
                    style={{
                      marginBottom: `0px`,
                    }}
                  >
                    <thead>
                      <tr>
                        <th scope="col">Brand</th>
                        <th scope="col">Cooling</th>
                        <th scope="col">Heating</th>
                        <th scope="col">Size Room</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">*{brand} </th>
                        <td>*{capacity}</td>
                        <td>*{heating}</td>
                        <td>*{roomsize}m²</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div
                  class="banner-ac mb-4"
                  style={{
                    backgroundColor: `#f8f9fa`,
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
                    Need new air conditioning?
                  </span>
                  <br />
                  <span
                    className="single-product-cta-contact"
                    style={{
                      fontSize: `.9em`,
                      lineHeight: `1em`,
                    }}
                  >
                    We install all brands, and if you've already purchased an
                    air conditioner, contact us for a free installation quote.
                  </span>
                  <br />
                  <Link
                    to="/contact"
                    className="btn-- btn-primary-- btn-sm contact-btn"
                    style={{
                      paddingRight: `15px`,
                      paddingLeft: `15px`,
                      borderRadius: `5px`,
                    }}
                  >
                    Contact us
                  </Link>
                </div>
                <ReactMarkdown source={description} />
              </article>
              <hr />
              <div className="mt-3">
                <h4>Choose the right size air conditioner for your space</h4>
                <RoomSizeTable />
                <small style={{ fontSize: 12 }}>
                  This is a rough guide only, there are some factors to consider
                  when sizing air conditioners for your room. Whether you have
                  large windows with direct sunlight, size, opened areas, and so
                  on. We can help you determine the right size air conditioner
                  for your room.
                </small>
              </div>
            </div>
          </div>
          <div className="col-lg-4 single-products-side">
            <h5 className="mt-5 h6" style={{ fontWeight: `600` }}>
              Also recommended for you
            </h5>

            {brand === "Midea" ? (
              <div className="mb-2">
                <StaticImage
                  filename="midea-add.png"
                  alt="carrier air conditioning"
                />
                <MideaProducts />
              </div>
            ) : (
              <div></div>
            )}
            {brand === "Carrier" ? (
              <div className="single-side-products">
                <StaticImage
                  filename="carrier-add.png"
                  alt="carrier air conditioning"
                />
                <CarrierProducts />
              </div>
            ) : (
              <div></div>
            )}
            {brand === "Samsung" ? (
              <div className="single-side-products">
                <StaticImage filename="3.png" alt="carrier air conditioning" />
                <SamsungProducts />
              </div>
            ) : (
              <div></div>
            )}

            {brand === "Toshiba" ? (
              <div className="single-side-products">
                <StaticImage filename="4.png" alt="carrier air conditioning" />
                <ToshibaProducts />
              </div>
            ) : (
              <div></div>
            )}
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
      expires
      saleprice
      brand
      description
      capacity
      heating
      roomsize
      id
      image {
        childImageSharp {
          fixed(width: 325) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      room_sizes {
        size
      }
    }
  }
`

export default SingleProduct
