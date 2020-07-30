import React from "react"
import { Link } from "gatsby"

import Layout from "../components/ui/Layouts/layout"
import SEO from "../components/seo"
import StaticImage from "../components/StaticQueryImages"
import Form from "../components/form"

const DuctedPage = () => (
  <Layout>
    <SEO title="Split Ducted Systems" />
    <div className="body-wrapper split-systems">
      <section>
        <h1 className="h2 cam text-center text-blue fw-600 heading-box-color rounded py-3">
          Ducted air conditioning systems
        </h1>
        <div className="grid-col-2 split-systems-top-col">
          <div>
            <h3 className="h5 fw-600 px-20 mt-5">ENTIRE HOME SOLUTION</h3>
            <p className="lead-20 px-20">
              Ducted air conditioning system provides discreet comfort all year
              round, with reverse cycle heating and cooling modes. Designed for
              new and existing homes to manage and maintain temperatures
              throughout the entire home, with optional climate zone controls
              for each room. Ducted systems consists of an indoor unit (in the
              roof), an outdoor unit, discharge grills (in all rooms) and a
              return air grill (usually in the hallway).
            </p>
            <p className="lead-20 px-20">
              Ducted systems range from 5.5kW units that are used for small
              zoned rooms, to the popular 14kW units that cools and heats your
              average 4 bedroom, 2 living area's home, to the big 24kW unit that
              can handle larger homes.Talk to us to find the best option to suit
              your home and needs.
            </p>
          </div>
          <div className="ducted-air">
            <StaticImage filename="DUCTED-1400.jpg" alt="ducted air image" />
          </div>
        </div>
      </section>

      <section className="mt-5">
        <div className="grid-col-2 split-systems-top-col">
          <div className="ducted-air-2">
            <StaticImage filename="multi-1.jpg" alt="ducted air image" />
          </div>
          <div>
            <h3 className="h5 fw-600 px-20 cap">Why Ducted Air?</h3>
            <p className="lead-20 px-20">
              If you're looking to control the temperature of the entire home,
              then a ducted air conditioning system will be the most effective
              and efficient way. It is more effective in cooling large areas,
              has less noise with air flow than other split systems. However, if
              you're only looking to cool or heat one or two rooms in your home,
              a wall mounted air conditioning split system would be more
              suitable.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-5">
        <div className="grid-col-2 split-systems-top-col">
          <div>
            <h3 className="h5 fw-600 px-20 mt-5 cap">
              Cost of running a ducted system
            </h3>
            <p className="lead-20 px-20">
              There are a number of factors to consider on how much your running
              costs will be:
            </p>
            <ul>
              <li>*Size and type of system</li>
              <li>*Operating time length</li>
              <li>*Is your home insulated</li>
              <li>*Home layout and windows sizes</li>
              <li>*The temperature set</li>
            </ul>
            <p className="lead-20 px-20">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              doloribus totam impedit rerum eum?Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Modi doloribus totam impedit rerum
              eum?
            </p>
          </div>
          <div className="ducted-air">
            <StaticImage filename="DUCRED-2-1400.jpg" alt="ducted air image" />
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
              Ducted System Installation Quotes
            </h5>
            <p className="px-20">
              We can fully install a ducted air conditioning system for your
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
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default DuctedPage
