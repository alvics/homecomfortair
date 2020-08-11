import React from "react"
import { Link } from "gatsby"

import Layout from "../components/ui/Layouts/layout"
import SEO from "../components/seo"
import StaticImage from "../components/StaticQueryImages"
import Form from "../components/quoteForm"
import CTA from "../components/CTA"

const DuctedPage = () => (
  <Layout>
    <SEO
      title="Ducted Systems Page"
      description={`HOMECOMFORTAIR installs daikin ducted system air conditioning, throughout Ipswich, Brisbane and the Gold Coast area's.`}
      keywords={[
        `Gold,Coast,Air,Conditioning,
Split,systems,Ipswich,Brisbane,Specials`,
      ]}
    />
    <div className="body-wrapper ducted-systems">
      <section>
        <div className="pt-2 ducted-systems-avatar rounded heading-box-color ">
          <h1 className="h1 cam text-center text-white fw-600  p-3">
            <div>
              {" "}
              <StaticImage
                filename="HCA-avatar-WHITE-1400.png"
                alt="home comfort air image"
              />
            </div>
            Ducted air conditioning systems
          </h1>
          <div className="pb-3">
            <CTA />
          </div>
        </div>

        <div className="grid-col-2 ducted-systems-top-col">
          <div class="" style={{ marginTop: `-20px` }}>
            <h3 className="h5 fw-600 px-20">ENTIRE HOME SOLUTION</h3>
            <p className="lead-20 px-20">
              Ducted air conditioning system provides discreet comfort all year
              round, with reverse cycle heating and cooling technology. Designed
              for new and existing homes to manage and maintain temperatures
              throughout the entire home, with optional climate zone controls
              for each room. Ducted systems consists of an indoor unit (in the
              roof), an outdoor unit, discharge grills (in all rooms) and a
              return air grill (usually in the hallway).
            </p>
            <p className="lead-20 px-20">
              We supply and instal ducted systems from 5.5kW used for small
              zoned rooms, 14kW for the average 4 bedroom, 2 living area's home,
              to the big 24kW unit that can handle larger homes.Talk to us to
              find the best option to suit your home and needs.
            </p>
          </div>
          <div className="ducted-air mt-2">
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
              Ducted systems can be customised to suit your requirements. If
              you're looking to control the temperature of the entire home, then
              a ducted air conditioning system will be the most effective and
              efficient way. It's more effective in cooling or heating your home
              by maintaining a consistent temperature throughout multiple rooms
              in a discreet and quiet way. However, if you're only looking to
              cool or heat one or two rooms in your home, a wall mounted
              <Link to="spit-systems"> split system air conditioning</Link>{" "}
              would be more suitable.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-5">
        <div className="grid-col-2 ducted-systems-top-col">
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
              Ducted air conditioning is an important investment in your home,
              and technology plays a big part when choosing the right system. We
              only install the leading brands for a number of reasons, energy
              efficiency, greater life span, durability, advanced technology and
              guaranteed support. Give us a call when you're thinking about
              ducted air conditioning system for your home. Home Comfort Air,
              residential air conditioning specialists.
            </p>
          </div>
          <div className="ducted-air">
            <StaticImage filename="DUCRED-2-1400.jpg" alt="ducted air image" />
          </div>
        </div>
      </section>

      <section>
        <h2 className="cam text-center secondary fw-600 heading-box-color rounded py-3 mt-3">
          Receive a free quote
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

      <Link className="px-20" to="/split-systems">
        Go to Split Systems <span style={{ fontWeight: `bold` }}>></span>
      </Link>
    </div>
  </Layout>
)

export default DuctedPage
