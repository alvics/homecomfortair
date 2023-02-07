// Display the list of products
import React from "react"
import Layout from "../components/ui/Layouts/layout"
import SEO from "../components/seo"
// import Specials from "../components/Products/Specials"
import DaikinProducts from "../components/Products/Daikin"
import StaticImage from "../components/StaticQueryImages"
import CTA from "../components/CTA"
import Form from "../components/quoteForm"

const Gold_Coast = () => {
  return (
    <Layout>
      <SEO
        title="Tweed Heads Air Conditioning | Home Comfort Air"
        description={`Tweed Heads split system air conditioning installations.Best prices in ducted split system air conditioning for Tweed Heads homes here in sunny Queensland Australia.`}
        keywords={[
          `Tweed Heads,Air,Conditioning,
Split,systems,Kirra,banora point, cabarita, kingscliff `,
        ]}
      />

      <div className="pt-2 split-systems-avatar heading-box-color rounded ">
        <h1 className="h1 cam text-center text-white fw-600 p-3">
          <span>
            {" "}
            <StaticImage
              filename="HCA-avatar-WHITE-1400.png"
              alt="home comfort air image"
            />
          </span>
          Tweed Heads Split systems Air Conditioning
        </h1>
        <div className="pb-3">
          <CTA />
        </div>
      </div>

      <div className="container body-wrapper">
        <div className="row">
          <div className="col-lg-8 gcair">
            <div className="p-3">
              <div className="wrapper-gcair-img">
                <StaticImage
                  filename="splits-add-11-pow.png"
                  alt="home comfort air image"
                />
              </div>
               <div>
                <h2 className="h5 mt-3">Air Conditioning Tweed Heads</h2>
               </div>
              <p className="mt-3">
            If you live in the Tweed Heads, Queensland area and are in need of a reliable air conditioning service, look no further than Home Comfort Air. Our team of experienced technicians is here to assist with all of your air conditioning needs, including the installation of split system units from top brands like <a href="/products">Daikin, Haier, Hisense, and Midea</a>.
              </p>

              <p>
                Split system air conditioning units have become a popular choice for many homeowners in the Tweed Heads area due to their efficiency, ease of installation, and versatility. These units consist of an indoor unit and an outdoor unit that work together to effectively cool and circulate air throughout your home.
              </p>

              <p>
               At Home Comfort Air, we offer a wide range of split system air conditioning units from some of the most trusted brands in the industry. <a href="/products">Daikin, Haier, Hisense, and Midea</a> are known for their high-quality products and innovative technology, ensuring that you get the best performance and value for your money.
              </p>

              <p>
              Our team of technicians is fully trained and certified to install and service split system units of all makes and models. We pride ourselves on providing fast, reliable service and customer satisfaction is our top priority. In addition to installation and repair services, we also offer regular maintenance packages to keep your air conditioning unit running at its best and extend its lifespan.
              </p>

              <p>
              If you're in the Tweed Heads, Queensland area and in need of professional air conditioning services, don't hesitate to give us a call at <a href="tel:0404602657">0404 602 657</a>. Our team would be happy to discuss your options and help you find the perfect split system unit for your home.
              </p>

              <div className="my-2 gcair">
                <StaticImage filename="Daikin-Split-Family9.jpg" alt="daikin-cora-air" />
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
                      Tweed Heads Split System Installation Quotes
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
            <div className="mt-3 mb-2 gcair">
              <StaticImage filename="map-gold-coast.png" alt="map-gold-coast" />
              <div>
                <small>Tweed Heads and surrounding area's</small>
              </div>
            </div>
            <div className="fw-600">
              <article>Daikin Cora Air</article>
            </div>
            <div className="product-grid">
              <DaikinProducts />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Gold_Coast
