// Display the list of products
import React from "react"
import Layout from "../components/ui/Layouts/layout"
import SEO from "../components/seo"
import MideaProducts from "../components/Products/MideaProducts"
import StaticImage from "../components/StaticQueryImages"
import CTA from "../components/CTA"
import Form from "../components/quoteForm"

const Ipswich = () => {
  return (
    <Layout>
      <SEO title="Ipswich Air Conditioning | Home Comfort Air"
        description={`Ipswich split system air conditioning installations. Wall hung and ducted split system air conditioning for Ipswich homes here in sunny Queensland Australia.`}
        keywords={[
          `springfield lakes air conditioning, brookwater,brassall, bellbird park collingwood park`,
        ]} />

     <div className="pt-2 split-systems-avatar heading-box-color rounded ">
        <h1 className="h1 cam text-center text-white fw-600 p-3">
          <span>
            {" "}
            <StaticImage
              filename="HCA-avatar-WHITE-1400.png"
              alt="home comfort air image"
            />
          </span>
          Ipswich Split system air conditioning
        </h1>
        <div className="pb-3">
          <CTA />
        </div>
      </div>

      <div className="container body-wrapper">
        <div className="row">
          <div className="col-lg-8">
            <div className="p-3">
            <div className="wrapper-gcair-img">
                <StaticImage
                  filename="splits-add-11-pow.png"
                  alt="home comfort air image"
                />
              </div>
              <div>
                <h2 className="h5 mt-3">Air Conditioning Ipswich</h2>
               </div>
              <p>
                Are you looking for a reliable and experienced air conditioning service in the Ipswich, Queensland area? Look no further! Our team at Home Comfort Air is here to help with all of your air conditioning needs, including split system installations with top brands like <a href="/products">Daikin, Haier, Hisense, and Midea</a>.
              </p>
              <p>
              Split system air conditioning units are a popular choice for many homeowners in Ipswich and the surrounding areas. These units consist of an indoor unit and an outdoor unit, which work together to cool and circulate air throughout your home. Split systems are known for their efficiency, ease of installation, and versatility, making them a great choice for homes of all sizes and styles.
              </p>
              <p>
              At Home Comfort Air, we offer a wide range of split system air conditioning units from some of the most trusted brands in the industry, including <a href="/products">Daikin, Haier, Hisense, and Midea</a>. These brands are known for their high-quality products and innovative technology, ensuring that you get the best possible performance and value for your money.
              </p>
              <p>
              Our team of experienced technicians is fully trained and certified to install and service split system air conditioning units of all makes and models. We pride ourselves on providing fast, reliable service and customer satisfaction is our top priority.
              </p>
              <p>
              In addition to installation and repair services, we also offer regular maintenance packages to ensure that your air conditioning unit is running at its best. This can help to extend the lifespan of your unit and prevent costly repairs down the road.
              </p>
               <p>
               If you're in the Ipswich, Queensland area and in need of a reliable air conditioning service, don't hesitate to give us a call at <a href="tel:0404602657">0404 602 657</a>. Our team would be happy to discuss your options and help you find the perfect split system air conditioning unit for your home.
               </p>

                  <div className="my-2 gcair">
                <StaticImage filename="midea-main" alt="ipswich-air-conditioning" />
                HOME COMFORT AIR
                <span
                  style={{ fontFamily: `'Caveat', cursive`, marginLeft: `6px` }}
                >
                  The smart choice in air conditioning
                </span>
              </div>

              <section className="mt-3">
                <div className="heading-box-color grid-col-2 heading-avatar-gcair rounded  my-3 mx-0 px-2">
                  <div className="pt-xs-2">
                    <StaticImage
                      filename="HCA-avatar-WHITE-1400.png"
                      alt="home comfort air image"
                    />
                  </div>

                  <div className="text-center">
                    <h3 className="h4 fw-600 mt-2 text-white ">
                      Receive A free Quote
                    </h3>
                  </div>
                </div>
                <div className="grid-col-2">
                  <div className="split-quotes-text">
                    <h5 className=" px-20 cap fw-600">
                      Ipswich Split System Installation Quotes
                    </h5>
                    <p className="px-20">
                      We install all brands of split system air conditioners for
                      new construction and existing homes. If your are looking for a
              replacement unit or a new installation? Submit your details, and we'll contact you
              back shortly.
                    </p>
                    <p className="font-italic px-20">
                      "You could also leave the best suited time to call you
                      back".
                    </p>
                  </div>
                  <Form />
                </div>
              </section>

            </div>
          </div>
          <div className="col-lg-4">
            <div className="product-grid">
              <MideaProducts />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Ipswich
