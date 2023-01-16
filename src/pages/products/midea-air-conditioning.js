import React from 'react'
import { Link } from "gatsby"

import Layout from "../../components/ui/Layouts/layout"
import SEO from "../../components/seo"
import StaticImage from "../../components/StaticQueryImages"
import Form from "../../components/quoteForm"
import CTA from "../../components/CTA"
import MideaProducts from '../../components/Products/MideaProducts'
import MideaPDF from "../../images/Midea.pdf"

const MideaProductsPage = () => {
  
    return (
    <Layout>
       <SEO
      title="Midea Split Systems | Midea Air Conditioning"
      description={ `Midea air conditioning from HOME COMFORT AIR. We supply and fully install Midea split systems from $1099 throughout Ipswich, Brisbane and the Gold Coast area's.`}
      keywords={[ `Gold,Coast,Price,Midea,Split,systems,Ipswich,Brisbane,Specials`, ]} />

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
            Midea Air Conditioning
          </h1>
          <div className="pb-3">
            <CTA />
          </div>
        </div>
        </section>

        <section>
        <h2 className="h5 cap fw-600 mt-3">Air Conditioning Midea</h2>
        <p className="lead-20 mt-3">
        Midea is a global leader in the air conditioning industry, with a reputation for producing some of the most innovative and <Link to="/ducted-systems">energy-efficient</Link> air conditioners available today. The company, which was founded in 1968 in China, has grown to become one of the world's largest manufacturers of air conditioning units and appliances.
        </p>
        </section>

        <section>
        <p className="lead-20">
        One of the key features that sets Midea air conditioners apart from the competition is their high energy efficiency. Midea <Link to="/split-systems">air conditioners</Link> are designed with advanced inverter technology, which allows them to conserve energy and reduce running costs. This means that, not only you are enjoying a comfortable environment but also saving on your energy bill.
        </p>
        </section>

        <section>
        <div className="row">
        <div className="col-lg">
        <p className="lead-20 ">
         In addition to energy efficiency, Midea air conditioners are also known for their quiet operation. This makes them the perfect choice for <Link to="/split-systems">bedrooms</Link>, home offices, and other spaces where you want to create a peaceful environment. They also feature a variety of convenient features, such as remote control, programmable timers, and sleep mode, to make it easy for you to control your indoor climate.
         </p>
          <p className="lead-20 mt-3">
        Finally, Midea air conditioners are built to last, featuring high-quality materials and construction techniques that ensure they can withstand the rigors of regular use. They also come with long-term warranties, so you can purchase with confidence, knowing that your investment is protected.
        </p>
         <p className="lead-20 ">
        In conclusion, Midea air conditioners are an excellent choice for anyone looking for a high-quality and energy-efficient cooling solution. With a wide range of options available and advanced features that make them easy to use and maintain, Midea's air conditioners are an ideal choice for keeping your home or office comfortable all year round.
        </p>
        </div>

        <div className="col-lg">
          <div className="ducted-air mt-2">
            <StaticImage filename="midea-main.jpg" alt="midea split system on lounge wall" />
          </div>
        </div>

        </div>
       
        </section>

        <section>
        <MideaProducts />
        <p className='mt-4'>
                    Midea brochure{" "}
                  <a href={MideaPDF} target="_blank" rel="noreferrer">
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
             <small>At Home Comfort Air, we specialize in the installation of Midea air conditioning systems throughout the Gold Coast, Brisbane, Ipswich, and Tweed Heads areas. We are dedicated to providing our customers with top-of-the-line air conditioning systems that are both energy-efficient and reliable.</small>
          </p>
        </section>

         

    </div>
</Layout>

   
    )
  }

     
 export default MideaProductsPage