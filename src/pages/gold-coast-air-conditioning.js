// Display the list of products
import React from "react"
import Layout from "../components/ui/Layouts/layout"
import SEO from "../components/seo"
import Specials from "../components/Products/Specials"
// import MideaProducts from "../components/Products/MideaProducts"
import StaticImage from "../components/StaticQueryImages"
import CTA from "../components/CTA"
import Form from "../components/quoteForm"

const Gold_Coast = () => {
  return (
    <Layout>
      <SEO
        title="Gold Coast Air Conditioning"
        description={`Are you looking for a split system air conditioner to be installed in your home? Wall hung and ducted split system air conditioning for Gold Coast homes here in sunny Queensland Australia.`}
        keywords={[
          `Gold,Coast,Air,Conditioning,
Split,systems,runaway,bay,ashmore, burleigh`,
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
          Gold Coast Split systems air conditioning
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

              <p className="mt-3">
                Are you looking for a split system air conditioner to be
                installed in your home? Do you need your old worn out system
                replaced before the sweltering summer? Here at Home Comfort Air
                we install <a href="/split-systems">wall hung</a> and{" "}
                <a href="/ducted-systems">ducted</a> split system air
                conditioning for Gold Coast homes here in sunny Queensland
                Australia. You can all benefit on our split system installations
                monthly <a href="/products/specials">specials</a>. Here at Home
                Comfort Air we offer to our local customers great deals on home
                air conditioning split systems. We can replace your system
                starting as low as $999.00 includes GST for a 2.6kW split
                systems for your home. Check out our website and book or enquire
                your home's new air conditioning system with Home Comfort Air
                where you can save with our monthly specials.
              </p>

              <p>
                We’ve been working around the Gold Coast suburbs for over 10
                years installing split system air conditioning for family homes,
                property managers and builders which areas include Pimpama,
                Ormeau, Upper Coomera, Coomera, Hope Island, Sanctuary Cove,
                Runaway Bay, Paradise Point, Helensvale, Biggera Waters,
                Labrador, Pacific Pines, Tambourine Mountain, Mount Nathan,
                Maudsland, Southport, Ashmore, Nerang, Merrimac, Mermaid Waters,
                Carrara, Gilston, Tallai, Mudgeeraba, Clear Island Waters,
                Broadbeach, Surfers Paradise, Burleigh Heads, Reedy Creek,
                Robina, Bonogin, Palm Beach, Elanora, Tallebudgera and Currumbin
                for Gold Coast split system air conditioning.
              </p>

              <p>
                Wall hung split system air conditioning is the most practical
                and more affordable home comfort solution for a single room or
                space. While the ducted split system can cool and heat every
                room in your home. We install air conditioners with the latest
                inverter technology in split systems which helps save you on
                your electricity bill. The Inverter technology in split system
                air conditioners works by only consuming the power needed to
                keep the space at the desired set temperature. Split system air
                conditioners have advance over the years, and to learn more
                please don’t hesitate to shoot us an{" "}
                <a href="mailto:homecomfortair.gc@gmail.com">email</a> or give
                us a call on <a href="tel:0404602657">0404 602 657</a>, and we
                can help you with your air conditioning and determine the right
                size air conditioning system for your home or space. We
                specialise in air conditioning solutions for Gold Coast homes.
              </p>

              <div className="my-2 gcair">
                <StaticImage filename="toshiba-ducted" alt="map-gold-coast" />
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
                      Gold Coast Split System Installation Quotes
                    </h5>
                    <p className="px-20">
                      We install all brands of split system air conditioning for
                      your home. Whether its new construction, existing home or
                      a replacement, simply submit your details, and we'll
                      contact you back shortly.
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
                <small>Gold Coast and surrounding area's</small>
              </div>
            </div>
            <div className="fw-600">
              <article>Monthly Specials</article>
            </div>
            <div className="product-grid">
              <Specials />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Gold_Coast
