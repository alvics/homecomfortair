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
import DaikinProducts from "../components/Products/Daikin"
import Modal from "../components/Modal"
import { Breadcrumb } from "gatsby-plugin-breadcrumb"
import StaticImage from "../components/StaticQueryImages"
import RoomSizeTable from "../components/RoomSize"
import BackToBack from "../components/BackToBack"

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
                {room_sizes.map(item => {
                  return (
                    <span id="single-room-size">
                      Supply and install a new {title}. Suit{" "}
                      <span style={{ textTransform: `lowercase` }}>
                        {item.size}
                      </span>{" "}
                      size room approx {roomsize}m².{" "}
                    </span>
                  )
                })}

                <small>
                  *Price is based on a <a href="#backtoback">back to back</a>{" "}
                  installation (maximum pipe length 3 metres).
                </small>
              </div>
              <button
                type="button"
                className="mt-4 btn-- btn-orange--"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                Enquire Now
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
                <div
                  className="border capacity-table mb-3 pl-2"
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

        <div className="mt-4">
        <h5>What's included:</h5>
        <p>Your new air conditioning system package includes standard single storey back to back installation. This package includes:</p>
         <div>
            <ul className="pl-3">
        <li>* Licensed Installers.</li>
        <li>* Up to 3 meters of pipework connecting indoor to outdoor unit.</li>
        <li>* Up to 20 meters of electrical cable run in the roof to an existing and available circuit. Does NOT include additional electrical work, or new circuit added. </li>
        <li>* New mounted weatherproof safety isolation switch.</li>
        <li>* PVC ducting to conceal pipe connection and electrical work.</li>
        <li>  {brand === "Toshiba"  ? "* 7 year manufacturer warranty." : "* 5 year manufacturer warranty."}</li> 
        <li>* 5 year Installation warranty.</li>
        </ul>
         </div>


         <div className="mb-4">
         <h5>Additional charges:</h5>
         <p>The requirements for installation may vary depending on the layout and structure of your house. As a result, some additional costs may apply.
         </p>
         <p>The most common reasons for additional costs are:</p>
         <ul className="pl-3">
         <li>* Double storey properties.</li>
           <li>* Non back to back installations.</li>
             <li>* Extra piping.</li>
               <li>* Poly slab Installation (if not already present).</li>
                 <li>* Brackets (e.g. wall or roof).</li>
                 <li>* Mounting blocks.</li>
                 <li>* Electrical work (e.g new circuit).
                 </li>
         </ul>
         <small>Note: your installer will explain the reasons and requirements for the additional charges (if there are any) before proceeding.</small>
         </div>
     
        </div>
       
                <div
                  class="banner-ac mb-3"
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

                <div className="mb-3 single-product-add">
                  {brand === "Midea" ? (
                    <div className="mb-2">
                      <StaticImage
                        filename="midea-add-11.png"
                        alt="midea air conditioning by Home Comfort Air"
                      />
                    </div>
                  ) : (
                    <div></div>
                  )}
                  {brand === "Carrier" ? (
                    <div className="single-side-products">
                      <StaticImage
                        filename="carrier-add-11.png"
                        alt="carrier air conditioning by Home Comfort Air"
                      />
                    </div>
                  ) : (
                    <div></div>
                  )}
                  {brand === "Samsung" ? (
                    <div className="single-side-products">
                      <StaticImage
                        filename="samsung-add-11.png"
                        alt="samsung air conditioning by Home Comfort Air"
                      />
                    </div>
                  ) : (
                    <div></div>
                  )}

                     {brand === "Daikin" ? (
                    <div className="single-side-products">
                      <StaticImage
                        filename="daikin-cora.png"
                        alt="daikin air conditioning by Home Comfort Air"
                      />
                    </div>
                  ) : (
                    <div></div>
                  )}

                  {brand === "Toshiba" ? (
                    <div className="single-side-products">
                      <StaticImage
                        filename="toshiba-add-11.png"
                        alt="toshiba air conditioning by Home Comfort Air"
                      />
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>
                <ReactMarkdown source={description} />
              </article>
              <hr />
              <div id="backtoback">
                <h5>Installation examples</h5>
                <p>
                  Here are some trade basics for your split system installation. As seen here, image 1. a "back to back" and image 2. an "up and over" are terms used for these process. "Back to back" is a basic installation that uses minimal amounts of materials eg. copper pipe, electrical cable and drain (usually approx up to 3 meters), and is a much more affordable option. Whilst the "up and over" the installation uses much more materials as the indoor and out door units are further away from each other. Talk to us to find the best option available for your space.</p>

                <BackToBack />
              </div>
              <hr />
              <div className="mt-4">
                <h4>Choose the right size air conditioner for your space</h4>
                <div style={{ fontSize: 16 }} className="bg-light pl-2 pt-2 ">
                  {" "}
                  *You selected a {brand} <strong>{capacity}</strong> air
                  conditioner
                </div>
                <div>
                  <p className="bg-light pl-2 py-1 ">
                    {room_sizes.map(item => {
                      return (
                        <span id="single-room-size">
                          *Suit{" "}
                          <span style={{ textTransform: `lowercase` }}>
                            {item.size}
                          </span>{" "}
                          size room approx {roomsize}m²
                        </span>
                      )
                    })}
                  </p>
                </div>
                <RoomSizeTable />
                <small style={{ fontSize: 12 }}>
                  This is a rough guide only, there are some factors to consider
                  when sizing air conditioners for your room. Whether you have
                  large windows with direct sunlight, size, opened areas, and so
                  on. We can help you determine the right size air conditioner
                  for your room.
                </small>
              </div>
              <div className="border rounded bg-green-- my-3">
                <blockquote style={{ color: `#f8f8f8` }} className="mt-20 ">
                  <i style={{ fontSize: 15 }}>
                    *We offer seniors and pensioners discounts for new air
                    conditioning installation. You can save 10% with our supply
                    and install offers
                    <button
                      style={{ color: `#0075C9` }}
                      type="button"
                      className=""
                      data-toggle="modal"
                      data-target="#exampleModal"
                    >
                      enquire now
                    </button>
                  </i>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="col-lg-4 single-products-side">
            <h5 className="mt-5 h6" style={{ fontWeight: `600` }}>
              Also recommended for you
            </h5>

            {brand === "Midea" ? (
              <div className="mb-2">
                <div className="mb-2">
                  <div
                    className="text-center border rounded"
                    style={{ backgroundColor: `#7DCDFF` }}
                  >
                    <h3
                      className="h6 fw-600 cap mt-2 text-white"
                      style={{ padding: `1.3rem 0` }}
                    >
                      Supply and Install Midea
                      <br />{" "}
                      <span className="lead cam text-white">
                        <small>Air Conditioning Systems</small>
                      </span>
                    </h3>
                  </div>
                </div>
                <MideaProducts />
              </div>
            ) : (
              <div></div>
            )}
            {brand === "Carrier" ? (
              <div className="single-side-products mb-2">
                <div
                  style={{ backgroundColor: `#004178` }}
                  className="my-2 text-center rounded"
                >
                  <h3
                    className="h6 text-white fw-600 cap mt-2"
                    style={{ padding: `1.3rem 0` }}
                  >
                    Supply and Install Carrier
                    <br />{" "}
                    <span className="lead cam text-white">
                      <small>Air Conditioning Systems</small>
                    </span>
                  </h3>
                </div>
                <CarrierProducts />
              </div>
            ) : (
              <div></div>
            )}

            {brand === "Samsung" ? (
              <div className="single-side-products mb-2">
                <div
                  s
                  className=" text-center bg-dark my-2 text-center rounded"
                >
                  <h3
                    className="text-white h6 fw-600 cap mt-2"
                    style={{ padding: `1.3rem 0` }}
                  >
                    Supply and Install Samsung
                    <br />{" "}
                    <span className="lead cam text-white">
                      <small>Air Conditioning Systems</small>
                    </span>
                  </h3>
                </div>
                <SamsungProducts />
              </div>
            ) : (
              <div></div>
            )}

                  {brand === "Daikin" ? (
              <div className="single-side-products mb-2">
                <div
                  s
                  className=" text-center  my-2 text-center rounded"
                  style={{backgroundColor: `#00a1e5`}}
                >
                  <h3
                    className="text-white h6 fw-600 cap mt-2"
                    style={{ padding: `1.3rem 0` }}
                  >
                    Supply and Install Daikin
                    <br />{" "}
                    <span className="lead cam text-white">
                      <small>Air Conditioning Systems</small>
                    </span>
                  </h3>
                </div>
                <DaikinProducts />
              </div>
            ) : (
              <div></div>
            )}

            {brand === "Toshiba" ? (
              <div className="single-side-products">
                <div
                  style={{ backgroundColor: `#D01C22` }}
                  className="my-2  text-center rounded"
                >
                  <h3
                    className="h6 text-white fw-600 cap mt-2"
                    style={{ padding: `1.3rem 0` }}
                  >
                    Supply and Install Toshiba
                    <br />{" "}
                    <span className="lead cam text-white">
                      <small>Air Conditioning Systems</small>
                    </span>
                  </h3>
                </div>
                <ToshibaProducts />
              </div>
            ) : (
              <div></div>
            )}
            <div className="mt-2">
              <StaticImage
                filename="install.png"
                alt="toshiba air conditioning by Home Comfort Air"
              />
              <ul>
        <li>* 5 year Installation warranty.</li>
              </ul>
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
