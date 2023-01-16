import React from 'react'
import { Link } from "gatsby"

import Layout from "../../components/ui/Layouts/layout"
import SEO from "../../components/seo"
import StaticImage from "../../components/StaticQueryImages"
import Form from "../../components/quoteForm"
import CTA from "../../components/CTA"
import SamsungProducts from "../../components/Products/SamsungProducts"
import SamsungPDF from "../../images/bedarra.pdf"

const SamsungProductsPage = () => {
  
    return (
    <Layout>
       <SEO
      title="Samsung Air Conditioning | Split Systems Installations"
      description={ `Samsung air conditioning from HOME COMFORT AIR. Best price on Samsung split systems Installed from $1199 throughout Brisbane and Gold Coast area's.`}
      keywords={[ `Gold,Coast,Price,Samsung,Split,systems,Ipswich,Brisbane,Specials`, ]} />

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
            Samsung Air Conditioning
          </h1>
          <div className="pb-3">
            <CTA />
          </div>
        </div>
        </section>

        <section>
        <h2 className="h5 cap fw-600 mt-3">Air Conditioning Samsung</h2>
        <p className="lead-20 mt-3">
        Samsung is a well-known and respected brand in the world of electronics, and their air conditioning systems are no exception. Samsung's <Link to="/split-systems">split system</Link> air conditioners are known for their high performance and energy efficiency, making them a popular choice for homes and businesses.
        </p>
        </section>

        <section>
        <p className="lead-20">
        In addition to high energy efficiency, Samsung's split system air conditioners also feature advanced <Link to="/service">air filtration</Link> technology that helps to keep the air inside your home or office clean and fresh. The units use multiple filters, including a high-efficiency particulate air (HEPA) filter, to remove harmful particles such as dust, pollen, and pet dander from the air. This makes them ideal for people with allergies or asthma.
        </p>
        </section>

        <section>
        <div className="row">

        <div className="col-lg">
         <p className="lead-20 ">
        Another notable feature of Samsung's split system air conditioners is the variety of options available. The company offers a wide range of different types of air conditioners, including wall-mounted, cassette, and <Link to="/ducted-systems">ducted</Link> models, to suit the needs of any home or office. They also have cooling-only and heating and cooling models available, so you can choose the right option for your specific needs.
        </p>
        <p className="lead-20 mt-3">
        Samsung's split system air conditioners are also known for their sleek and modern design. They can be easily integrated into any home or office décor, and feature a sleek and modern design that will complement any space. The units are also durable, built to withstand the rigors of regular use, and they come with long-term warranties to ensure your peace of mind.
        </p>
        </div>


        <div className="col-lg">
        <div className="ducted-air mt-2">
            <StaticImage filename="samsung-main.jpg" alt="samsung air hero images" />
          </div>
        </div>
        </div>
        </section>

       <section>
        <p className="lead-20 ">
        In conclusion, Samsung's split system air conditioners are an excellent choice for anyone looking for a high-performance, energy-efficient and smart cooling solution. With advanced inverter technology, advanced air filtration, and an array of smart features, Samsung air conditioners are an excellent way to ensure that your home or office is comfortable all year round.
        </p>
        </section>

        <section>
        <SamsungProducts />
          <p className='mt-4'>
                    Samsung brochure{" "}
                  <a href={SamsungPDF} target="_blank" rel="noreferrer">
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
             <small>At Home Comfort Air, we aim to exceed our customer's expectations by offering the finest air conditioning systems and services. Our dedication to providing top-notch, energy-efficient, and dependable solutions extends to the Gold Coast, Brisbane, Ipswich and Tweed Heads regions. Reach out to us today to schedule an installation or to learn more about our offerings.</small>
          </p>
        </section> 

    </div>
</Layout>

   
    )
  }

     
 export default SamsungProductsPage