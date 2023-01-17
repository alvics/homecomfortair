import React from 'react'
import { Link } from "gatsby"

import Layout from "../../components/ui/Layouts/layout"
import SEO from "../../components/seo"
import StaticImage from "../../components/StaticQueryImages"
import Form from "../../components/quoteForm"
import CTA from "../../components/CTA"
import MitsubishiProducts from '../../components/Products/MitsubishProducts'
import MitsubishiPDF from "../../images/mitsubishi.pdf"

const MitsubishiProductsPage = () => {
  
    return (
    <Layout>
       <SEO
      title="Mitsubishi Split Systems | Air Conditioning Mitsubishi"
      description={ `Mitsubishi air conditioning from HOME COMFORT AIR. We supply and fully install Mitsubishi split systems from $1579 throughout Brisbane and Gold Coast area's.`}
      keywords={[ `gold,coast,price,mitsubishi,split,systems,,brisbane,specials`, ]} />

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
            Mitsubishi Air Conditioning
          </h1>
          <div className="pb-3">
            <CTA />
          </div>
        </div>
        </section>

        <section>
        <h2 className="h5 cap fw-600 mt-3">Air Conditioning Mitsubishi</h2>
        <p className="lead-20 mt-3">
        Mitsubishi Electric is a well-known and reputable brand in the air conditioning industry, offering a wide range of high-quality <Link to="/split-systems">split system</Link> air conditioners for both residential and commercial use. These systems are designed to provide optimal comfort and energy efficiency, making them a great choice for any home or office.
        </p>
        </section>

        <section>
        <p className="lead-20">
        One of the key features of Mitsubishi Electric air conditioning split systems is their advanced technology and advanced features. The air conditioners are equipped with the latest energy-saving technology which helps to reduce energy consumption, and the units are also equipped with advanced features like remote control, energy-saving modes, and sleep modes which help to improve comfort and efficiency. Additionally, the systems are known for their quiet operation, making them ideal for use in bedrooms and other quiet spaces.
        </p>
        </section>


        <section>
        <div className="row">
        <div className="col-lg">
        <p className="lead-20 ">
        Another great aspect of Mitsubishi Electric air conditioning split systems is their durability and longevity. The systems are built with high-quality materials and are designed to withstand the test of time, ensuring that they will provide reliable performance for years to come. Furthermore, the systems are designed to be easy to maintain, with easy-to-clean filters and other features that make it easy to keep the units running at their best.
        </p>
        <p className="lead-20 mt-3">
        In addition, Mitsubishi Electric air conditioning split systems are also known for their smart features and connectivity options. With a optional Wi-Fi adapter, you can connect your air conditioning system to your smartphone, tablet or online account, giving you the freedom to fully control each unit on-the-go via an internet connection from anywhere in the world. This innovative technology allows you to adjust temperature settings, change modes, and more with just a few taps.
        </p>
        </div>

        <div className="col-lg">
         <div className="ducted-air mt-2">
            <StaticImage filename="mitsubishi-energy-save-47" alt="mitsubishi air conditioning energy saving split system hero image" />
          </div>
        </div>
        </div>
        </section>

       

        <section>
        <p className="lead-20 ">
        Lastly, Mitsubishi Electric air conditioning split systems also come with a 5 year warranty manufacturer warranty and with our 5 year workmanship warranty of new installation. This provides customers with peace of mind and reassurance that their investment is protected.
        </p>
        </section>

            <section>
        <p className="lead-20 ">
       In conclusion, Mitsubishi Electric air conditioning split systems are known for their advanced technology, energy efficiency, durability and smart features. They are a perfect choice for anyone looking for a high-quality, reliable, and efficient air conditioning system for their home or office. With their advanced features, smart connectivity and 5 year warranty, Mitsubishi Electric air conditioning split systems are a great investment that will provide long-term benefits and comfort.
        </p>
        </section>

        <section>
        <div>
        <h3 className='h5 fw-600'>Mitsubishi MSZ-AP Series Air Conditioners</h3>
        </div>
        <MitsubishiProducts />
         <p className='mt-4'>
                    Mitsubishi brochure{" "}
                  <a href={MitsubishiPDF} target="_blank" rel="noreferrer">
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
             <small>At Home Comfort Air, we are experts in the field of installing Mitsubishi air conditioning systems across the Gold Coast, Brisbane, Ipswich, and Tweed Heads regions. Our commitment to our customers is to deliver only the best in air conditioning systems, ones that are both energy-efficient and dependable.</small>
          </p>
        </section>

         

    </div>
</Layout>

   
    )
  }

     
 export default MitsubishiProductsPage