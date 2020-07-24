import React from "react"
import { Link } from "gatsby"

import Layout from "../components/ui/Layouts/layout"
import StaticImage from "../components/StaticQueryImages"
import { Tabs, Tab, Panel } from "@bumaga/tabs"
import Form from "../components/form"
import SEO from "../components/seo"

import SamsungProducts from "../components/Products/SamsungProducts"
import MideaProducts from "../components/Products/MideaProducts"
import ToshibaProducts from "../components/Products/Toshiba"
import CarrierProducts from "../components/Products/CarrierProducts"
import MideaPDF from "../images/Midea.pdf"
import ToshibaPDF from "../images/Toshiba.pdf"

const SplitPage = () => (
  <Layout>
    <SEO title="Split Systems A/C" />
    <div className="body-wrapper split-systems">
      <section>
        <h1 className="cam text-center text-blue py-4 fw-600">
          Split systems air conditioning
        </h1>
        <div className="grid-col-2 split-systems-top-col">
          <div>
            <h3 className="px-20">SINGLE ROOM SOLUTION</h3>
            <p className="lead-20 px-20">
              High wall split system air conditioner connects one indoor unit to
              an outdoor unit. Installs simply and unobtrusively to buildings
              with no need for ductwork. Delivers a sophisticated solution to
              single zone interior spaces at an affordable price. Provides a
              simple solution for one-room additions.
            </p>
            <p className="lead-20 px-20">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque quas iure eligendi, rem consequuntur minus hic porro
              nostrum! Odio repellendus ducimus officia ea facilis quis expedita
              quas unde obcaecati alias, pariatur repellat veniam nemo, eum quae
              eligendi voluptatem corporis incidunt!
            </p>
          </div>
          <div>
            <StaticImage filename="hero-3.jpg" alt="ducted air image" />
          </div>
        </div>
      </section>

      <section>
        <h2 className="cam text-center secondary fw-600 heading-box-color py-3 mt-4 rounded">
          Brands we recommend
        </h2>
        <Tabs>
          <div className="grid-300">
            <Tab>
              <div className="card">
                <div className="card-top">
                  <StaticImage filename="cas.jpg" alt="ducted air image" />
                </div>
                <div className="card-heading">
                  <h3 className="fw-600 text-dark">Toshiba Systems</h3>
                </div>
                <div className="card-body--">
                  <p className="card-text lead">
                    Toshiba prides themselves as being the first company to
                    release ...
                  </p>
                </div>

                <button className="text-blue text-shadow-2 text-left p-0 mt-3">
                  Learn more >>
                </button>
              </div>
            </Tab>

            <Tab>
              <div className="card">
                <div className="card-top">
                  <StaticImage filename="cas.jpg" alt="ducted air image" />
                </div>
                <div className="card-heading">
                  <h3 className="fw-600 text-dark">Samsung Systems</h3>
                </div>
                <div className="card-body--">
                  <p className="card-text lead">
                    Samsung Air Conditioning is of high quality, it's reputation
                    ...
                  </p>
                </div>

                <button className="text-blue text-shadow-2 text-left p-0 mt-3">
                  Learn more >>
                </button>
              </div>
            </Tab>

            <Tab>
              <div className="card">
                <div className="card-top">
                  <StaticImage
                    filename="ac-2.jpg"
                    alt="multi head air con systems"
                  />
                </div>
                <div className="card-heading">
                  <h3 className="fw-600 text-dark">Carrier Systems</h3>
                </div>
                <div className="card-body--">
                  <p className="card-text lead">
                    Whether it’s consistent heating and cooling for the home ...
                  </p>
                </div>
                <button className="text-blue text-shadow-2 text-left p-0 mt-3">
                  Learn more >>
                </button>
              </div>
            </Tab>

            <Tab>
              <div className="card">
                <div className="card-top">
                  <StaticImage filename="ducted-2.jpg" alt="ducted air image" />
                </div>
                <div className="card-heading">
                  <h3 className="fw-600 text-dark">Midea Systems</h3>
                </div>
                <div className="card-body--">
                  <p className="card-text lead">
                    Powerful and an affordable solution for air conditioners for
                    every type ...
                  </p>
                </div>
                <button className="text-blue text-shadow-2 text-left p-0 mt-3">
                  Learn more >>
                </button>
              </div>
            </Tab>
          </div>

          <Panel>
            <h5 className="fw-600 cap mt-3 pb-2 ml-2">Toshiba Split Systems</h5>
            <ToshibaProducts />

            <div className="grid-col-2 pt-20">
              <div className="p-20">
                <h5 className="fw-600 cap">Toshiba air conditioning</h5>
                <p>
                  Toshiba prides themselves as being the first company to
                  release the inverter technology to air conditioners back in
                  1981 and has respectfully maintained the technical advantage
                  above the rest. Designed for durability and simplicity, the
                  Toshiba is a superior made air conditioner to with stand the
                  harsh Australian summers, and the cold winter's month. With
                  their an extended 7-year warranty with parts and labour and
                  our 5 year installation warranty, it’s definitely the smart
                  choice when it comes to choosing a new system for your home or
                  office.
                </p>
                <p>
                  From the 1st of May 2020, all residential installations across
                  the entire Toshiba range of Hi-Wall, Multi Split and Light
                  Commercial equipment including the coveted SMMS VRF suite of
                  products will come with a 7 year warranty.{" "}
                </p>
                <p>
                  Toshiba range, download brochure <a href={ToshibaPDF}>here</a>
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
            <h5 className="fw-600 cap mt-3 pb-2 ml-2">Samsung Split Systems</h5>
            <SamsungProducts />
            <div className="grid-col-2 pt-20">
              <div>
                <StaticImage
                  filename="cas.jpg"
                  alt="ducted air image"
                  className="rounded"
                />
              </div>
              <div className="p-20">
                <h5 className="fw-600 cap">Samsung air conditioning</h5>
                <p>
                  Samsung Air Conditioning is one of our top choices, it's
                  reputation for technology and innovations is one of the best
                  in the air conditioning world. As a Samsung Air Conditioning
                  installation specialist you will be comfortable at home or
                  your office with a new Samsung air conditioner.
                </p>
              </div>
            </div>
          </Panel>

          <Panel>
            <h5 className="fw-600 cap mt-3 pb-2 ml-2">Carrier Split Systems</h5>
            <CarrierProducts />
            <div className="grid-col-2 pt-20">
              <div className="p-20">
                <h5>Carrier air conditioning</h5>
                <p>
                  Whether it’s consistent heating and cooling for the home or
                  office, Carrier air offers you state-of-the-art technology
                  that is quiet, simple to use, energy efficient and above all,
                  reliable. If your not looking for a big brand and big budget
                  air conditioner for your space, then the Carrier will
                  definitely come under budget for you home comfort solution.
                </p>
              </div>
              <div>
                <StaticImage filename="cas.jpg" alt="ducted air image" />
              </div>
            </div>
          </Panel>

          <Panel>
            <h5 className="fw-600 cap mt-3 pb-2 ml-2">Midea Split Systems</h5>

            <MideaProducts />
            <div className="grid-col-2 pt-20">
              <div>
                <StaticImage filename="cas.jpg" alt="ducted air image" />
              </div>
              <div className="p-20">
                <h5 className="fw-600 cap">Midea air conditioning</h5>
                <p>
                  Midea have come a long way over the past 50 years, making home
                  appliances at affordable prices and is one of the main reason
                  why we have added them to our recommendation list. We don't
                  get any incentives selling any brands here, it's what we've
                  used over time and have experience with, and what works best
                  within peoples budget.For an affordable option, the Midea is
                  hard to beat!
                </p>
                <p>
                  Download brochure <a href={MideaPDF}>here</a>.
                </p>
              </div>
            </div>
          </Panel>
        </Tabs>
      </section>

      <section>
        <h2 className="cam text-center secondary fw-600 heading-box-color rounded py-3 mt-3">
          Receive a quick quote
        </h2>
        <div className="grid-col-2">
          <div>
            <h5 className=" px-20 cap fw-600">
              Split System Installation Quotes
            </h5>
            <p className="px-20">
              We can supply and fully install all brands of split system air
              conditioners for your home or office, and if you've already
              purchased a split system and are only looking for installation, we
              can provide our "installation only service" for you as well.
              Simply submit your details, and we'll contact you back shortly.
            </p>
            <p className="font-italic px-20">
              "You could also leave the best suited time to call you back".
            </p>
          </div>

          <Form />
        </div>
      </section>

      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default SplitPage
