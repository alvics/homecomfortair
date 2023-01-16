import React from 'react'
import { Link } from "gatsby"

import Layout from "../../components/ui/Layouts/layout"
import SEO from "../../components/seo"
import StaticImage from "../../components/StaticQueryImages"
import Form from "../../components/quoteForm"
import CTA from "../../components/CTA"
import CarrierProducts from '../../components/Products/CarrierProducts'
import CarrierPDF from "../../images/Carrier.pdf"


const DaikinProductsPage = () => {
  
    return (
    <Layout>
       <SEO
      title="Carrier Split Systems | Air Conditioning Installations"
      description={ `Carrier air conditioning from HOME COMFORT AIR. We supply and fully install Carrier split systems from $1090 throughout Ipswich, Brisbane and the Gold Coast area's.`}
      keywords={[ `gold,coast,price,carrier,split,systems,replacement,best,specials`, ]} />

     <div className="body-wrapper ducted-systems carrier-air-con-page">

        <section>
        <div className="pt-2 ducted-systems-avatar rounded heading-box-color ">
          <h1 className="h1 cam text-center text-white fw-600  p-3">
            <div>
              {" "}
              <StaticImage
                filename="HCA-avatar-WHITE-1400.png"
                alt="home comfort air favicon logo image"
              />
            </div>
            Carrier Air Conditioning
          </h1>
          <div className="pb-3">
            <CTA />
          </div>
        </div>
        </section>

        <section>
        <h2 className="h5 cap fw-600 mt-3">Air Conditioning Carrier</h2>
        <p className="lead-20 mt-3">
        Carrier is a well-known and respected brand in the air conditioning industry, known for producing high-performance and energy-efficient systems. Their split systems are an excellent choice for anyone looking to keep their home or office comfortable all year round.
        </p>
        </section>

        <section>
        <p className="lead-20">
        Carrier is an American company that was founded in 1915 by Willis Carrier, who is considered the inventor of modern air conditioning. He invented the first air conditioning system in 1902 for a printing plant in Brooklyn, New York. The company was first established as the Carrier Engineering Corporation and it has grown to become one of the leading manufacturers of heating, ventilation, air conditioning and refrigeration (HVAC) systems worldwide.
        </p>
        </section>

       
        <section>
        <div className="row">
        <div className="col-lg"> <p className="lead-20 ">
        Carrier split system air conditioners come in a variety of styles and models, including wall-mounted units, cassette models, and ducted systems. This makes it easy to find the perfect solution for any space, whether it's a single room or an entire home or office. And because of the brand's reputation for quality, you can trust that your Carrier air conditioner will be built to last.
        </p>
         <p className="lead-20 ">
         At Home Comfort Air, we have been installing Carrier air conditioners for many years, and we have the expertise and experience to ensure that your installation is completed quickly and efficiently. We are dedicated to providing our customers with the best service and workmanship, and we stand behind our installations with a <Link to="/installation-warranty">5-year warranty</Link> on the workmanship.
        </p>

        <p className="lead-20 mt-3">
        Quality and durability: Carrier is a well-established brand known for producing high-quality and durable products. round.
        </p>

          <p className="lead-20 ">
        In addition to installation, we also offer ongoing maintenance service to ensure that your air conditioner continues to function at its best. With our expert technicians and top-of-the-line equipment, we are able to quickly diagnose any issues that may arise.
        </p>

        </div>


        <div className="col-lg">
         <div className="carrier ducted-air mt-2">
            <StaticImage className="carrierStaticImg" filename="carrier-1.jpg" alt="carrier split system hero image" />
          </div>
        </div>
        </div>
       
        </section>

        <section>
        <CarrierProducts />
           <p className='mt-4'>
                    Carrier brochure{" "}
                  <a href={CarrierPDF} target="_blank" rel="noreferrer">
                    {" "}
                    <span class="material-icons">picture_as_pdf</span> here
                  </a>
                </p>
        </section>

        <section>
         <div className="heading-box-color grid-col-2 heading-avatar rounded my-3 mx-0">
          <div className="">
            <StaticImage
              filename="HCA-avatar-WHITE-1400.png"
              alt="home comfort air image"
            />
          </div>

          <div className="text-center">
            <h3 className="h2 fw-600 mt-2 ">Receive A free Quote</h3>
          </div>
        </div>

        <div className="grid-col-2 pb-3">
          <div>
            <h5 className=" px-20 cap fw-600">Split System Quote</h5>
            <p className="px-20">
              For new construction or existing homes.
              Need a replacement unit or a new installation? Submit your details, and we'll contact you
              back shortly.
            </p>
            <p className="font-italic px-20">
              "You could also leave the best suited time to call you back".
            </p>
          </div>
          <Form />
        </div>
        </section>

         <section>
            <p className="px-20 mt-4">
             <small>At Home Comfort Air, our goal is to provide our customers with the best air conditioning systems and services available. We are committed to providing the Gold Coast, Brisbane, Ipswich and Tweed Heads areas with top-quality air conditioning solutions that are both energy-efficient and reliable. Contact us today to schedule your installation or for any further information.</small>
          </p>
        </section>

    </div>
</Layout>

   
    )
  }

     
 export default DaikinProductsPage