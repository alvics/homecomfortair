import React from 'react'
// import { Link } from "gatsby"

import Layout from "../../components/ui/Layouts/layout"
import SEO from "../../components/seo"
import StaticImage from "../../components/StaticQueryImages"
import Form from "../../components/quoteForm"
import CTA from "../../components/CTA"
import HaierProducts from '../../components/Products/Haier'
import HaierPDF from "../../images/haier-tempo.pdf"

const HaierProductsPage = () => {
  
    return (
    <Layout>
       <SEO
      title="Haier Tempo Split Systems | Air Conditioning Haier"
      description={ `Haier air conditioning from HOME COMFORT AIR. We supply and fully install Haier Tempo 2.5kw split systems from $1299. Brisbane and Gold Coast area's.`}
      keywords={[ `gold,coast,price,haier,split,systems,,brisbane,tempo`, ]} />

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
            Haier Air Conditioning
          </h1>
          <div className="pb-3">
            <CTA />
          </div>
        </div>
        </section>

        <section>
        <h2 className="h5 cap fw-600 mt-3">Air Conditioning Haier</h2>
        <p className="lead-20 mt-3">
        When it comes to air conditioning, Haier is a brand that should not be overlooked. Known for their innovative technology and energy-efficient systems, Haier air conditioning split systems are an excellent choice for anyone looking to keep their home or office comfortable all year round.
        </p>
        </section>

        <section>
        <p className="lead-20">
        One of the standout features of Haier air conditioners is their advanced inverter technology. This technology allows the unit to automatically adjust its cooling or heating output to match the room's temperature, resulting in more efficient operation and lower energy bills. Additionally, Haier air conditioners are designed with noise reduction in mind, ensuring that the unit runs quietly, so it won't disturb your daily routine.
        </p>
        </section>


        <section>
        <div className="row">
         <div className="col-lg">
         <p className="lead-20 ">
        We understand that every customer has different needs and requirements, which is why we offer a wide range of Haier air conditioners to suit any budget and space. From wall-mounted units to cassette models and ducted systems, we have the perfect solution for every home or office.
        </p>

         <p className="lead-20 mt-3">
          At Home Comfort Air, we have been installing Haier air conditioners for over a decade, and we have the expertise and experience to ensure that your installation is completed quickly and efficiently. We are dedicated to providing our customers with the best service and workmanship, and we stand behind our installations with a 5-year warranty on the workmanship.
        </p>
         <p className="lead-20 ">
       If you're looking for a high-quality, energy-efficient air conditioning system, Haier is an excellent choice. And if you're looking for a trusted and experienced installer, look no further than Home Comfort Air. Contact us today to schedule your consultation today.
        </p>
         </div>

         <div className="col-lg">
          <div className="ducted-air mt-2">
            <StaticImage filename="haier-main2.webp" alt="haier air conditioning split system hero image" />
          </div>
         </div>
        </div>
        </section>

        <section>
          <HaierProducts />
                <p>
                    Haier brochure{" "}
                  <a href={HaierPDF} target="_blank" rel="noreferrer">
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
             <small> At Home Comfort Air, we specialize in the installation of Haier air conditioning systems throughout the Gold Coast, Brisbane, Ipswich, and Tweed Heads areas. Our team of professionals is highly trained and experienced in the installation of Haier air conditioners, and we pride ourselves on providing our customers with exceptional service and workmanship, ensuring that every installation is completed on time and to the highest standards.</small>
          </p>
        </section>

         

    </div>
</Layout>

   
    )
  }

     
 export default HaierProductsPage