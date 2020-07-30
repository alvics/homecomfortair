import React from "react"
import { Link } from "gatsby"
import { Tabs, Tab, Panel } from "@bumaga/tabs"

import Layout from "../components/ui/Layouts/layout"
import StaticImage from "../components/StaticQueryImages"

import Form from "../components/form"
import SEO from "../components/seo"

const MultiHeadSystemsPage = () => (
  <Layout>
    <SEO title="Split Systems A/C" />
    <div className="body-wrapper split-systems">
      <section>
        <h1 className="h2 cam text-center text-blue fw-600 heading-box-color rounded py-3">
          Multi-Head Split Systems Air Conditioning
        </h1>
        <div className="grid-col-2 split-systems-top-col">
          <div>
            <h3 className="h5 fw-600 px-20 mt-5 cap">
              Multiple Rooms Solution
            </h3>
            <p className="lead-20 px-20">
              Multi-head air conditioning system can connect up to five wall
              mounted indoor head units to one outdoor unit. Similar look to the
              wall mounted split systems, the only difference is the outdoor is
              capable of handling up to 5 indoor units. It's a great choice for
              cooling multiple rooms without having multiple outdoor units.
            </p>
            <p className="lead-20 px-20">
              Multi-head systems range from 5.0kW units that connect 2 indoor
              units to one outdoor, to 12kW units which can connect 5 indoor
              units to one outdoor. Talk to us to find the best option to suit
              your home and needs.
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
              then the multi-head air conditioning system maybe the right choice
              for you. It enables you to have different sized air conditioners
              throughout your home, allowing you to control each room
              separately. Ideal for limited space for outdoor units or when
              there's insufficient ceiling space for a ducted system.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-5">
        <div className="grid-col-2 split-systems-top-col">
          <div>
            <h3 className="h5 fw-600 px-20 mt-5 cap">
              Intelligent and Durable Technology
            </h3>
            <p className="lead-20 px-20">
              Multi-head split systems use the same innovative technology as the
              split systems. It has the elegant smooth and curve design, fresh
              filtered air, easy to use, and avoid using any unnecessary energy
              usage from the inverter control technology.
            </p>

            <p className="lead-20 px-20">
              The Toshiba split systems has great benefits and features, from
              its inverter technology to the outdoor durability and is backed by
              there 7-year parts and labour warranty.
            </p>
          </div>
          <div className="ducted-air text-center">
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
        <h2 className="cam text-center secondary fw-600 heading-box-color rounded py-3 mt-3">
          Receive a quick quote
        </h2>
        <div className="grid-col-2">
          <div>
            <h5 className=" px-20 cap fw-600">
              Multi-Head System Installation Quotes
            </h5>
            <p className="px-20">
              We can install a multi-head air conditioning system for your home.
              Whether its new construction, existing home or a replacement,
              simply submit your details, and we'll contact you back shortly.
            </p>
            <p className="font-italic px-20">
              "You could also leave the best suited time to call you back".
            </p>
          </div>

          <Form />
        </div>
      </section>
      <Tabs>
        <div className="grid-300">
          <Tab>
            <div className="card">
              <button className="btn btn-primary p-20">Daikin Systems</button>
            </div>
          </Tab>
          <Tab>
            <div className="card">
              <button className="btn btn-primary p-20">Samsung Systems</button>
            </div>
          </Tab>
          <Tab>
            <div className="card">
              <button className="btn btn-primary p-20">
                Mitsubishi Systems
              </button>
            </div>
          </Tab>
          <Tab>
            <div className="card">
              <button className="btn btn-primary p-20">Midea Systems</button>
            </div>
          </Tab>
        </div>

        <Panel>
          <div className="grid-col-2 section">
            <div className="p-20">
              <h5>Daikin Split Systems</h5>
              <p>
                Daikin Split Systems are the ferrari when it comes to air
                conditioning systems. It's clearly the winner in innovations and
                technology over most brands, like the ferrari it's not the
                cheapest on the block but Daikin air conditioner are hard to
                beat, if you can afford one that is. I would highly recommend
                the Daikin air conditioning systems for your home or space.
              </p>
            </div>
            <div>
              <StaticImage
                className="rounded"
                filename="cas.jpg"
                alt="ducted air image"
              />
            </div>
          </div>
        </Panel>

        <Panel>
          <div className="grid-col-2 section">
            <div className="p-20">
              <h5>Samsung Split Systems</h5>
              <p>
                Samsung Air Conditioning is one of our top choices, it's
                reputation for technology and innovations is one of the best. As
                a Samsung Air Conditioning Specialist you will be comfortable at
                home or your office with a Samsung air conditioner.
              </p>
            </div>
            <div>
              <StaticImage filename="cas.jpg" alt="ducted air image" />
            </div>
          </div>
        </Panel>

        <Panel>
          <div className="grid-col-2 section">
            <div>
              <StaticImage filename="cas.jpg" alt="ducted air image" />
            </div>
            <div className="p-20">
              <h5>Mitsubishi Split Systems</h5>
              <p>
                Whether it’s consistent heating and cooling for the home or
                office, Mitsubishi Electric offers you state-of-the-art
                technology that is quiet, simple to use, energy efficient and
                above all, reliable.
              </p>
            </div>
          </div>
        </Panel>

        <Panel>
          <div>
            <h3>Midea Split Systems</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              molestiae, beatae exercitationem pariatur iure nostrum. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Ipsa molestiae,
              beatae exercitationem pariatur iure nostrum.
            </p>
          </div>
          <p>panel 3</p>
        </Panel>
      </Tabs>
    </div>
    <p>Welcome to page 3</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default MultiHeadSystemsPage
