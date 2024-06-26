import React from 'react'
// import { Link } from "gatsby"

import Layout from "../components/ui/Layouts/layout"
import SEO from "../components/seo"
import StaticImage from "../components/StaticQueryImages"
import Form from "../components/quoteForm"
import CTA from "../components/CTA"




const DaikinProductsPage = () => {
  
    return (
    <Layout>
       <SEO
      title="Protecting Your Investment | Our 5-Year Installation Warranty"
      description={ `Why our 5-Year Installation Warranty sets us apart, The importance of a 5-Year installation warranty for your air conditioning system. Ensuring Quality Workmanship!`}
      keywords={[ `warranty,workmanship,5 year warranty, installation`, ]} />

     <div className="body-wrapper ducted-systems">

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
           Our 5 Year Installation Warranty
          </h1>
          <div className="pb-3">
            <CTA />
          </div>
        </div>
        </section>

        <section>
        <h2 className="h5 cap fw-600 mt-3">Why Our 5-Year Installation Warranty Sets Us Apart</h2>
        <p className="lead-20 mt-3">
        When it comes to air conditioning installation, a warranty is an important consideration. It provides peace of mind and protection for both the customer and the installer. At Home Comfort Air, we are proud to offer a 5-year installation warranty for workmanship on all of our air conditioning installations.
        </p>
        </section>

        <section>
        <p className="lead-20">
        Our 5-year warranty covers any defects or issues that may arise due to faulty installation. This includes issues such as leaks, improper refrigerant charging, and incorrect wiring. If any of these issues occur within the 5-year warranty period, we will repair or replace the affected parts at no additional cost to the customer
        </p>
        </section>

        <section>
        <div className="row">
        <div className="col-lg">
        <p className="lead-20 ">
        We stand behind our work and our commitment to providing the best service possible. Our team of highly trained and experienced technicians are dedicated to ensuring that every installation is completed correctly and to the highest standards. And with our 5-year warranty, customers can rest assured that they are protected in the event of any issues.
        </p>
        <p className="lead-20 mt-3">
        In addition to our installation warranty, we also offer ongoing maintenance service to ensure that your air conditioning system continues to function at its best. With our expert technicians and top-of-the-line equipment, we are able to quickly diagnose any issues that may arise.
        </p>
        </div>

        <div className="col-lg">
          <div className="ducted-air mt-2">
            <StaticImage filename="Daikin-Split-Family9.jpg" alt="daikin split system image" />
          </div>
        </div>

        </div>
        </section>
  
        <section>
        <p className="lead-20 ">
        At Home Comfort Air, we are committed to providing our customers with the best air conditioning systems and services available. And our 5-year installation warranty for workmanship is just one of the ways we stand behind our work. Contact us today to schedule your installation or for any further information.
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