import React from 'react'
import { Link } from "gatsby"

import Layout from "../../components/ui/Layouts/layout"
import SEO from "../../components/seo"
import StaticImage from "../../components/StaticQueryImages"
import Form from "../../components/quoteForm"
import CTA from "../../components/CTA"
import ToshibaProducts from '../../components/Products/Toshiba'
import ToshibaPDF from "../../images/Toshiba.pdf"

const ToshibaProductsPage = () => {
  
    return (
    <Layout>
       <SEO
      title="Toshiba Split Systems | Air Conditioning Toshiba"
      description={ `Toshiba air conditioning from HOME COMFORT AIR. We supply and fully install Toshiba split systems from $1249 throughout Brisbane and Gold Coast area's.`}
      keywords={[ `gold,coast,price,toshiba,split,systems,,brisbane,specials`, ]} />

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
            Toshiba Air Conditioning
          </h1>
          <div className="pb-3">
            <CTA />
          </div>
        </div>
        </section>

        <section>
        <h2 className="h5 cap fw-600 mt-3">Toshiba Air Conditioner</h2>
        <p className="lead-20 mt-3">
        Toshiba is a well-known and respected brand in the air conditioning industry, known for producing high-performance and energy-efficient systems. The company is particularly renowned for offering some of the longest warranties in the market, with many of its split system air conditioners coming with a 7-year warranty. This speaks to the confidence that Toshiba has in the durability and reliability of its air conditioning systems.
        </p>
        </section>

        <section>
        <p className="lead-20">
        One of the standout features of Toshiba's split system air conditioners is their advanced inverter technology. This technology allows the units to automatically adjust their cooling and heating output to match the ambient temperature, resulting in more efficient performance and lower energy consumption. Additionally, Toshiba's units come with compressor inverter technology which optimizes the energy consumption and performance.
        </p>
        </section>


        <section>
        <div className="row">
        <div className="col-lg">
        <p className="lead-20 ">
        Toshiba's <Link to="/split-systems">split system</Link> air conditioners also feature advanced air filtration technology that helps to keep the air inside your home or office clean and fresh. They use multiple filters, including a high-efficiency particulate air (HEPA) filter, to remove harmful particles such as dust, pollen, and pet dander from the air. This makes them ideal for people with allergies or asthma.
        </p>
        <p className="lead-20 mt-3">
        Another advantage of Toshiba's split system air conditioners is the variety of options available. They come in a range of sizes, from <Link to="/multi-head-systems">small units</Link> that are suitable for a single room to <Link to="/ducted-systems">larger systems</Link> that can cool an entire house or commercial building. Additionally, Toshiba offers both cooling-only and heating and cooling models, providing customers with versatile options that can be used all year round.
        </p>
        </div>

        <div className="col-lg">
         <div className="ducted-air mt-2">
            <StaticImage filename="Toshiba-main.jpg" alt="toshiba air conditioning split system hero image" />
          </div>
        </div>
        </div>
        </section>

       

        <section>
        <p className="lead-20 ">
        In terms of design, Toshiba's split system air conditioners feature a sleek and modern look that can be easily integrated into any home or office décor. The units are built to withstand the rigors of regular use, and they come with long-term warranties to ensure your peace of mind.
        </p>
        </section>

            <section>
        <p className="lead-20 ">
        In conclusion, Toshiba's split system air conditioners are an excellent choice for anyone looking for high-performance, energy-efficient and quiet cooling solution. With advanced inverter technology, advanced air filtration, and a wide range of options, Toshiba air conditioners are an ideal choice for keeping your home or office comfortable all year round
        </p>
        </section>

        <section>
        <div>
        <h3 className='h5 fw-600'>Toshiba SEIYA Classic Series Air Conditioners</h3>
        </div>
        <ToshibaProducts />
         <p className='mt-4'>
                    Toshiba brochure{" "}
                  <a href={ToshibaPDF} target="_blank" rel="noreferrer">
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
             <small>At Home Comfort Air, we are experts in the field of installing Toshiba air conditioning systems across the Gold Coast, Brisbane, Ipswich, and Tweed Heads regions. Our commitment to our customers is to deliver only the best in air conditioning systems, ones that are both energy-efficient and dependable.</small>
          </p>
        </section>

         

    </div>
</Layout>

   
    )
  }

     
 export default ToshibaProductsPage