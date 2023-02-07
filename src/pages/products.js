// Display the list of products
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/ui/Layouts/layout"
import StaticImage from "../components/StaticQueryImages"
import Form from "../components/quoteForm"
import SEO from "../components/seo"
import MideaProducts from "../components/Products/MideaProducts"
import CarrierProducts from "../components/Products/CarrierProducts"
import ToshibaProducts from "../components/Products/Toshiba"
import SamsungProducts from "../components/Products/SamsungProducts"
import DaikinProducts from "../components/Products/Daikin"
import HaierProducts from "../components/Products/Haier"
import MitsubishiProducts from "../components/Products/MitsubishProducts"
import RoomSizeTable from "../components/RoomSize"
// import SplitsHero from "../components/BackgroundSplits"
import CTA from "../components/CTA"
import BrandsBtn from "../components/BrandBtn"
// import GetCategories from "../components/Queries/GetCategories"

const ProductsPage = () => {
  return (
    <Layout>
      <SEO
        title="Split Systems Air | Home Comfort Air Gold Coast"
        description={`Visit HOME COMFORT AIR to check our prices and air conditioning specials. View our high wall split system air conditioners, supply and installation from $1090.`}
        keywords={[
          `Gold,Coast,Air,Conditioning,
split,systems,price,installation,specials`,
        ]}
      />
      <meta
        property="og:image"
        content="https://res.cloudinary.com/ewebdesigns/image/upload/v1597706415/Toshiba_lg_8ebbee010f.png"
      ></meta>
      <div className="container body-wrapper products-page">
        <div className="row">
          <div className="col-lg-10">
            <div className="pt-2 split-systems-avatar heading-box-color rounded">
              <h1 className="h1 cam text-center text-white fw-600 p-3">
                <span>
                  {" "}
                  <StaticImage
                    filename="HCA-avatar-WHITE-1400.png"
                    alt="home comfort air image"
                  />
                </span>
                Choose Your Perfect Air Conditioning System
              </h1>
              <div className="pb-3">
                <CTA />
              </div>
              
            </div>
           <div className="mt-4">
           <BrandsBtn />
           </div>

            <div className="text-right mt-3">
              <p style={{ fontSize: 12 }}>Showing 48 products</p>
            </div>

            <div className="split-system-archive products-archive" id="midea">
                 <h2 className="h5 fw-600">Browse Our Selection of High-Quality Split Systems from Leading Brands</h2>
                 <div>
                 <p className="lead-20">Welcome to our shop page, where you'll find a wide selection of air conditioning split systems from top brands including <Link to="/products/carrier-air-conditioning">Carrier</Link>, <Link to="/products/daikin-air-conditioning">Daikin</Link>, <Link to="/products/mitsubishi-air-conditioning">Mitsubishi</Link> Electric, <Link to="/products/samsung-air-conditioning">Samsung</Link>, and <Link to="/products/toshiba-air-conditioning">Toshiba</Link>. Whether you're looking for a single room unit or a larger system for your entire home, we've got you covered. Browse through our selection to find the perfect system for your needs, and don't forget to check out our installation options as well. Our experienced technicians are ready to help you with the entire process, from selecting the right system to installing and maintaining it. Thank you for choosing Home Comfort Air for your air conditioning needs.</p>
                 </div>


      <section>  
                {/* *******************************************************************************
                ********************* Midea Products banner start *********************************
                ******************************************************************************** */}     
              <div className="mb-2">
                <div
                  className="text-center border rounded"
                  style={{ backgroundColor: `#7DCDFF` }}
                >
                  <h3
                    className="h5 fw-600 cap mt-2 px-3  text-white "
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

              {/* 
              <div className="mt-5">
                <h5 className="range">
                Our entry-level range
                <small class="text-muted"> air conditioners</small>
                </h5>
                </div>
              */ }
              <MideaProducts />
              {/* ********************************************************************************
              ********************* Midea Products banner end/ ***********************************
              ******************************************************************************** */} 
      </section> 


              {/* ********************************************************************************
              ********************* Carrier Products banner start ********************************
              ******************************************************************************** */} 


        <section>    
              <div
                style={{ backgroundColor: `#004178` }}
                className="my-3 text-center rounded"
                id="carrier"
              >
                <h3
                  className="h5 text-white fw-600 cap mt-2 px-3"
                  style={{ padding: `1.3rem 0` }}
                >
                  Supply and Install Carrier
                  <br />{" "}
                  <span className="lead cam text-white">
                    <small>Air Conditioning Systems</small>
                  </span>
                </h3>
              </div>

              <div className="mb-2">
                <CarrierProducts />
              </div>
            
                {/* *********************************************************************************
                ********************* Carrier Products end/ ***************************************
                ******************************************************************************** */} 
      </section>  
      
      
      <section>
                {/* *******************************************************************************
                 ********************* Haier Products banner start *********************************
                 ******************************************************************************** */}

                <div className="mb-2" id="haier">
                <div
                  className="text-center border rounded"
                  style={{ backgroundColor: `#005AAB` }}
                >
                  <h3
                    className="h5 fw-600 cap mt-2 px-3  text-white "
                    style={{ padding: `1.3rem 0` }}
                  >
                    Supply and Install Haier
                    <br />{" "}
                    <span className="lead cam text-white">
                      <small>Air Conditioning Systems</small>
                    </span>
                  </h3>
                </div>
              </div>

             {/* // <div className="mt-5">
              //   <h5 className="range">
              //   Our standard range
              //   <small class="text-muted"> air conditioners</small>
              //   </h5>
                //   </div> */}

                <div className="mb-2">
                <HaierProducts />
                </div>
              
              

               {/* ********************************************************************************
               ********************* Haier Products end/ ******************************************
               ******************************************************************************** */}
    </section>

    <section>
               {/* *******************************************************************************
                ********************* Samsung Products banner start *******************************
                ******************************************************************************** */} 
            
              <div  className="text-center bg-dark my-3 text-center rounded" id="samsung">
                <h3
                  className="text-white h5 fw-600 cap mt-2 px-3"
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
              {/* *******************************************************************************
              ********************* Samsung Products banner end/ ********************************
              ******************************************************************************** */} 
    </section>

    <section>

              {/* ********************************************************************************
              ********************* Toshiba Products banner start ********************************
              ******************************************************************************** */} 

              <div
                style={{ backgroundColor: `#D01C22` }}
                className="my-3 text-center rounded"
                id="toshiba"
              >
                <h3
                  className="h5 text-white fw-600 cap mt-2 px-3"
                  style={{ padding: `1.3rem 0` }}
                >
                  Supply and Install Toshiba
                  <br />{" "}
                  <span className="lead cam text-white">
                    <small>Air Conditioning Systems</small>
                  </span>
                </h3>
              </div>

              {/*<div className="mt-5">
                <h5 className="range">
                Our premium range
                <small class="text-muted"> air conditioners</small>
                </h5>
            </div> */}
              
            <div className="mb-2">
              <ToshibaProducts />
              </div>
                {/* ********************************************************************************
                ********************* Toshiba Products end/  ***************************************
                ******************************************************************************** */} 
    </section>


    <section>        
              {/* *******************************************************************************
              ********************* Daikin Products banner start ********************************
              ******************************************************************************** */} 

                <div className="mb-2" id="daikin">
                <div
                  className="text-center border rounded"
                  style={{ backgroundColor: `#00a1e5` }}
                >
                  <h3
                    className="h5 fw-600 cap mt-2 px-3  text-white "
                    style={{ padding: `1.3rem 0` }}
                  >
                    Supply and Install Daikin
                    <br />{" "}
                    <span className="lead cam text-white">
                      <small>Air Conditioning Systems</small>
                    </span>
                  </h3>
                </div>
              </div>
              
              <div className="mb-2">
                 <DaikinProducts />
              </div>
              
              {/* *******************************************************************************
              ********************* Daikin Products end/  ***************************************
              ******************************************************************************** */} 
    </section>  

    <section>

                
              {/* *******************************************************************************
              ********************* MITSUBISHI Products banner start ********************************
              ******************************************************************************** */} 

                <div className="mb-2" id="mitsubishi">
                <div
                  className="text-center border rounded"
                  style={{ backgroundColor: `#ff0000` }}
                >
                  <h3
                    className="h5 fw-600 cap mt-2 px-3  text-white "
                    style={{ padding: `1.3rem 0` }}
                  >
                    Supply and Install Mitsubishi
                    <br />{" "}
                    <span className="lead cam text-white">
                      <small>Air Conditioning Systems</small>
                    </span>
                  </h3>
                </div>
              </div>

              <MitsubishiProducts />
              {/* *******************************************************************************
              ********************* MITSUBISHI Products end/  ***************************************
              ******************************************************************************** */} 
   </section>
      
              <section>

                      <div className="mt-3">
                        <StaticImage
                          filename="splits-add-11-lg.png"
                          alt="home comfort air image"
                        />
                      </div>

                      <div className="px-2 my-2">
                        <h5 class="fw-600 mt-3">
                          Book Your Split System Installation Online
                        </h5>
                        <p className="lead">
                          At Home Comfort Air, we understand the importance of having a functional and reliable air conditioning system in your home. That's why we offer fast and professional installation services to get you up and running in no time. Whether you're looking for a split system for a single room or your entire house, we've got you covered. Our team of experienced technicians can have your new air conditioning system installed in a matter of days, so you can enjoy comfortable living as soon as possible. Don't wait any longer, get a free quote now by submitting our form. Please include as many details as possible to help us understand your needs better. Thank you for choosing Home Comfort Air for your air conditioning needs.
                        </p>
                        <div>
                          <CTA />
                        </div>
                      </div>

                      <div className="row px-2">
                        <h4 className="h5 fw-600">
                          Split System Installation Examples
                        </h4>

                        <p>
                          To assist in familiarizing with industry terminology and installation principles, we have provided two house plan images as examples. These examples are among the most commonly used solutions in the industry and may serve as a reference for future communication or when submitting an enquiry form. It's important to note that these are not the only ways to install split systems, but they are widely used and can help guide your decision making process.
                        </p>
                        <h6 className="fw-600 mb-3">Back to Back Installation</h6>
                        <p>
                        Back-to-back installation refers to the placement of two air conditioning units back-to-back, typically through-the-wall configuration. This type of installation is commonly used for commercial and residential properties where the indoor unit (evaporator) and outdoor unit (condenser) are installed on opposite sides of a common wall. This allows for the installation of the two units to be done in a relatively small space, making it ideal for situations where space is limited. Back-to-back installation is particularly useful in apartment buildings and townhouses where there may be limited space for the outdoor unit. It also helps to preserve the aesthetic of the building and can be less invasive then other types of installation.
                        </p>
                      
                        <h6 className="fw-600 mb-3">Up & Over Installation</h6>
                        <p>
                        The Up-and-Over installation method is used when the outdoor unit needs to be located away from the indoor unit, often due to the layout of the building or to conceal the unit from view. This type of installation requires running copper pipes up and over to the new location. It's important to note that the further the distance between the indoor and outdoor unit, the more materials will be required and the cost of installation will increase. Additionally, the location of the indoor unit must have an existing drain for evaporated water measuring 20-25mm, as is necessary for all air conditioning systems.
                        </p>

                        <h6 className="fw-600 mb-3">Takeaways</h6>
                        <p>
                          When considering a split system air conditioning installation, it's important to keep in mind two key points. First, the indoor unit will always be connected to the outdoor unit. Second, the indoor unit will always require a drain to remove evaporated water. These are important factors to consider when determining the location of the units and planning the installation process.
                        </p>

                  
                        <div className="col-md p-4">
                          {" "}
                          <StaticImage
                            filename="back-to-back-img.png"
                            alt="back to back air conditioning installation house plan example"
                          />
                        </div>
                        <div className="col-md p-4">
                          {" "}
                          <StaticImage
                            filename="up-over-img.png"
                            alt="up and over air conditioning installation house plan example"
                          />
                        </div>
                     </div>
             
                      
              </section>    

        <section>

              <div className="grid-2">
                    <div className="span-col-3 archive-img-cta">
                      <h5 className="h6 text-dark fw-400">
                        Split System Air Conditioning Service
                      </h5>
                      <StaticImage
                        filename="hero-3.jpg"
                        alt="split system air image"
                        height="150"
                      />
                    </div>

                    <div className="form-quote mt-sm-4 mt-lg-5 p-lg-3">
                      <h4 className="h5 text-white text-center fw-600 cap heading-box-color p-20 rounded">
                        Get a free quote
                      </h4>
                      <Form />
                    </div>
              </div>
        </section>

        <section>
                <div className="mt-3 p-lg-3">
                <h4>Choose the right size air conditioner for your space</h4>
                <RoomSizeTable />
                <small style={{ fontSize: 12 }}>
                  This is a rough guide only, there are some factors to consider,
                  large windows with direct sunlight, opened areas and so on. We can
                  help you determine the right size air conditioner for your room.
                </small>
            </div>
        </section>
            
           <div className="position-relative">
          <div className="col col-lg-2 mt-5 archive-category"  id="sidebar-sticky-top">
            <h3 className="h6 fw-600">Brands</h3>
           
            <hr />
            <p style={{ fontSize: 13 }}>
              <Link to="#midea">Midea</Link>
            </p>
            <hr />
            <p style={{ fontSize: 13 }}>
              <Link to="#carrier">Carrier</Link>
            </p>
            <hr />
            <p style={{ fontSize: 13 }}>
              <Link to="#haier">Haier</Link>
            </p>
            <hr />
            <p style={{ fontSize: 13 }}>
              <Link to="#samsung">Samsung</Link>
            </p>
            <hr />
            <p style={{ fontSize: 13 }}>
              <Link to="#toshiba">Toshiba</Link>
            </p>
            <hr />
            <p style={{ fontSize: 13 }}>
              <Link to="#daikin">Daikin</Link>
            </p>
            <hr />
            <p style={{ fontSize: 13 }}>
              <Link to="#mitsubishi">Mitsubishi</Link>
            </p>
            <hr />
            <h3 className="h6 fw-600">Categories</h3>
           
            <hr />
            <p style={{ fontSize: 13 }}>
              <Link to="/split-systems">Split Systems</Link>
            </p>
            <hr />
            <p style={{ fontSize: 13 }}>
              <Link to="/ducted-systems">Ducted Systems</Link>
            </p>
            <hr />
            <p style={{ fontSize: 13 }}>
              <Link to="/multi-head-systems">Multi-head Systems</Link>
            </p>
            <hr />
            <p style={{ fontSize: 13 }}>
              <Link to="/service">Service / Maintenance</Link>
            </p>
            <hr />
          </div>
          </div>
      </div>
      
     </div>
      </div>
      </div>
    </Layout>
  )
}

export default ProductsPage
