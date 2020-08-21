import React from "react"
import { Tabs, Tab, Panel } from "@bumaga/tabs"
import Layout from "../components/ui/Layouts/layout"
import StaticImage from "../components/StaticQueryImages"
import Form from "../components/quoteForm"
import SEO from "../components/seo"
import CTA from "../components/CTA"

const MultiHeadSystemsPage = () => (
  <Layout>
    <SEO
      title="Multi-head Split Systems | Home Comfort Air "
      description={`HOME COMFORT AIR installs mulit-head system air conditioning throughout, Ipswich, Brisbane and the Gold Coast area's.`}
      keywords={[
        `Gold,Coast,Air,Conditioning,
                Split,systems,Ipswich,Brisbane,Specials`,
      ]}
    />
    <div className="body-wrapper multi-systems">
      <section>
        <div className="pt-2 multi-systems-avatar heading-box-color rounded">
          <h1 className="h1 cam text-center text-white fw-600 p-3">
            <span style={{ maxHeight: 305 }}>
              {" "}
              <StaticImage
                filename="HCA-avatar-WHITE-1400.png"
                alt="home comfort air image"
              />
            </span>
            Multi-Head Split Systems Air Conditioning
          </h1>
          <div className="pb-3">
            <CTA />
          </div>
        </div>

        <div className="grid-col-2 multi-systems-top-col">
          <div>
            <h3 className="h5 fw-600 px-20 cap mt-3">
              Multiple Rooms Solution
            </h3>
            <p className="lead-20 px-20">
              Multi-head air conditioning system can connect up to five wall
              mounted indoor head units to one outdoor unit. Similar look and
              functionality to the wall mounted split systems, the only
              difference is that the outdoor is capable of handling up to 5
              indoor units. It's a great choice for cooling multiple rooms
              without having multiple outdoor units.
            </p>
            <p className="lead-20 px-20">
              Home Comfort Air installs Multi-head systems from 5.0kW units that
              connect 2 indoor units to one outdoor, to 12kW units which can
              connect 5 indoor units to one outdoor. Talk to us to find the best
              option to suit your home and needs.
            </p>
          </div>
          <div className="ducted-air">
            <StaticImage
              filename="samsung-main.jpg"
              alt="multi head split system"
            />
          </div>
        </div>
      </section>

      <section className="mt-5">
        <div className="grid-col-2 split-systems-top-col">
          <div className="ducted-air-2">
            <StaticImage
              filename="multi-2.jpg"
              alt="multi head air conditioning systems "
            />
          </div>
          <div>
            <h3 className="h5 fw-600 px-20 cap">Why Multi-Head System?</h3>
            <p className="lead-20 px-20">
              If you're looking to cool individual rooms throughout your home,
              then the multi-head air conditioning system might be the right
              choice for you. It enables you to have different sized air
              conditioners throughout your home, allowing you to control each
              room separately. Ideal for limited space for outdoor units or when
              there's insufficient ceiling space for a ducted system.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-5">
        <div className="row plit-systems-top-col">
          <div className="col-lg-6">
            <h3 className="h5 fw-600 px-20 mt-5 cap">
              Intelligent and Durable Technology
            </h3>
            <p className="lead-20 px-20">
              Multi-head split systems use the same innovative technology as the
              split systems. It has the elegant, smooth and curve design, fresh
              filtered air, easy to use, and avoid using any unnecessary energy
              usage from the inverter control technology.
            </p>

            <p className="lead-20 px-20">
              The Toshiba split systems have great benefits and features, from
              its inverter technology to the outdoor durability and is backed by
              their 7-year parts and labour warranty.
            </p>
          </div>
          <div className="col-lg-6 ducted-air text-center">
            <iframe
              title="Toshiba air conditioning systems"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/9Pg1AJN7hC8"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </section>

      <section>
        <div className="heading-box-color grid-col-2 heading-avatar rounded  my-3 mx-0">
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
        <div className="grid-col-2">
          <div className="multi-head-quotes-text">
            <h5 className=" px-20 cap fw-600">
              Multi-Head System Installation Quotes
            </h5>
            <p className="px-20">
              We can install a new multi-head air conditioning system for your
              home. Whether its new construction, existing home or a
              replacement, simply submit your details, and we'll contact you
              back shortly.
            </p>
            <p className="font-italic px-20">
              "You could also leave the best suited time to call you back".
            </p>
          </div>
          <Form />
        </div>
      </section>
    </div>
  </Layout>
)

export default MultiHeadSystemsPage
