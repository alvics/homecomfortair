import React from "react"
import { Link } from "gatsby"

import Layout from "../components/ui/Layouts/layout"
import StaticImage from "../components/StaticQueryImages"
import { Tabs, Tab, Panel } from "@bumaga/tabs"
import Form from "../components/form"
import SEO from "../components/seo"

const SplitPage = () => (
  <Layout>
    <SEO title="Split Systems A/C" />
    <section>
      <h1 className="h2 cam text-center secondary fw-600 heading-box-color ">
        Split systems air conditioning
      </h1>
      <div className="grid-col-2">
        <div>
          <h3 className="px-20">SINGLE ROOM SOLUTION</h3>
          <p className="lead-20 px-20">
            High wall split system air conditioner connects one indoor unit to
            an outdoor unit. Installs simply and unobtrusively to buildings with
            no need for ductwork. Delivers a sophisticated solution to single
            zone interior spaces at an affordable price. Provides a simple
            solution for one-room additions.
          </p>
          <p className="lead-20 px-20">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            quas iure eligendi, rem consequuntur minus hic porro nostrum! Odio
            repellendus ducimus officia ea facilis quis expedita quas unde
            obcaecati alias, pariatur repellat veniam nemo, eum quae eligendi
            voluptatem corporis incidunt!
          </p>
        </div>
        <div>
          <StaticImage filename="hero-3.jpg" alt="ducted air image" />
        </div>
      </div>
    </section>

    <section>
      <h2 className="cam text-center secondary fw-600 heading-box-color">
        Brands we recommend
      </h2>

      <div className="grid-300">
        <div className="card">
          <Link to="/split-systems-ac">
            <div className="card-top">
              <StaticImage filename="cas.jpg" alt="ducted air image" />
            </div>
            <div className="card-heading">
              <h3 className="fw-600 text-dark">Daikin Systems</h3>
            </div>
            <div className="card-body">
              <p className="card-text lead">
                Daikin Split Systems are the ferrari when it comes to air ...
              </p>
            </div>
            <div className="text-blue text-shadow-2">Learn more >></div>
          </Link>
        </div>

        <div className="card">
          <Link to="/ducted-systems">
            <div className="card-top">
              <StaticImage filename="cas.jpg" alt="ducted air image" />
            </div>
            <div className="card-heading">
              <h3 className="fw-600 text-dark">Samsung Systems</h3>
            </div>
            <div className="card-body">
              <p className="card-text lead">
                Samsung Air Conditioning is of high quality, it's reputation ...
              </p>
            </div>
            <div className="text-blue text-shadow-2">Learn more >></div>
          </Link>
        </div>

        <div className="card">
          <Link to="/multi-head-systems">
            <div className="card-top">
              <StaticImage
                filename="ac-2.jpg"
                alt="multi head air con systems"
              />
            </div>
            <div className="card-heading">
              <h3 className="fw-600 text-dark">Mitsubishi Systems</h3>
            </div>
            <div className="card-body">
              <p className="card-text lead">
                Whether it’s consistent heating and cooling for the home ...
              </p>
            </div>
            <div className="card-action text-shadow-2">Learn more >></div>
          </Link>
        </div>

        <div className="card">
          <Link to="/breakdowns">
            <div className="card-top">
              <StaticImage filename="ducted-2.jpg" alt="ducted air image" />
            </div>
            <div className="card-heading">
              <h3 className="fw-600 text-dark">Midea Systems</h3>
            </div>
            <div className="card-body">
              <p className="card-text lead">
                Powerful and an affordable solution for air conditioners for
                every type ...
              </p>
            </div>
            <div className="text-blue text-shadow-2">Learn more >></div>
          </Link>
        </div>
      </div>
    </section>

    <section>
      <h2 className="cam text-center secondary fw-600 heading-box-color">
        Brands we recommend
      </h2>
      <Tabs>
        <div className="grid-300">
          <Tab>
            <div className="">
              <button className="btn btn-orange">Daikin Systems</button>
            </div>
          </Tab>
          <Tab>
            <div className="">
              <button className="btn btn-orange">Samsung Systems</button>
            </div>
          </Tab>
          <Tab>
            <div className="">
              <button className="btn btn-orange">Mitsubishi Systems</button>
            </div>
          </Tab>
          <Tab>
            <div className="">
              <button className="btn btn-orange">Midea Systems</button>
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
    </section>

    <section>
      <h2 className="cam text-center secondary fw-600 heading-box-color">
        Get a quick quote
      </h2>
      <div className="grid-col-2">
        <div>
          <h4 className="h5 px-20">Split Installation Quotes</h4>
          <p className="px-20">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Dignissimos recusandae culpa saepe. Debitis commodi inventore a, id
            accusantium sed esse, natus, facilis similique harum non!
          </p>
        </div>
        <Form></Form>
      </div>
    </section>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SplitPage
