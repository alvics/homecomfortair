import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/ui/Layouts/layout"
import StaticImage from "../components/StaticQueryImages"
import { Tabs, Tab, Panel } from "@bumaga/tabs"
import Form from "../components/quoteForm"
import SEO from "../components/seo"

import SamsungProducts from "../components/Products/SamsungProducts"
import MideaProducts from "../components/Products/MideaProducts"
import ToshibaProducts from "../components/Products/Toshiba"
import CarrierProducts from "../components/Products/CarrierProducts"
import MideaPDF from "../images/Midea.pdf"
import ToshibaPDF from "../images/Toshiba.pdf"

const SplitPage = ({ data: { allStrapiProduct: title } }) => (
  <Layout>
    <SEO
      title="Split Systems A/C"
      keywords={[
        `gold coast air conditioning`,
        `split system installation`,
        `Ashmore`,
      ]}
    />
    <div className="body-wrapper split-systems">
      <section>
        <div className="pt-3">
          <h1 className="h2 cam text-center text-blue fw-600 heading-box-color rounded py-3">
            Split systems air conditioning
          </h1>
        </div>

        <div className="grid-col-2 split-systems-top-col">
          <div>
            <h3 className="h5 fw-600 px-20">SINGLE ROOM SOLUTION</h3>
            <p className="lead-20 px-20">
              The modern split system air conditioner connects one indoor unit,
              to an outdoor unit. It's process is simply by removing heat and
              moisture from the interior space, to improve ones comfort of the
              room. Delivers a sleek and sophisticated look to your space and at
              an affordable price. It's the perfect choice air conditioning
              system for a single room.
            </p>
            <p className="lead-20 px-20">
              Split systems range from 2.0kW that cool small bedrooms, the
              popular 7kW units for your average lounge room, to the big 10kW
              units that cool larger open style living, lounge and dinning
              rooms. Most split system are reverse cycle, meaning that you can
              switch between heating and cooling modes to set your desired
              temperature.
            </p>
          </div>
          <div>
            <StaticImage
              filename="hero-3.jpg"
              alt="split system air image"
              height="150"
            />
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
                  <StaticImage
                    filename="Toshiba-main.jpg"
                    alt="ducted air image"
                  />
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

                <div className="text-blue text-shadow-2 text-left p-0 mt-3">
                  Learn more >>
                </div>
              </div>
            </Tab>

            <Tab>
              <div className="card">
                <div className="card-top">
                  <StaticImage
                    filename="samsung-main.jpg"
                    alt="ducted air image"
                  />
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

                <div className="text-blue text-shadow-2 text-left p-0 mt-3">
                  Learn more >>
                </div>
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
                <div className="text-blue text-shadow-2 text-left p-0 mt-3">
                  Learn more >>
                </div>
              </div>
            </Tab>

            <Tab>
              <div className="card">
                <div className="card-top">
                  <StaticImage
                    filename="midea-main.jpg"
                    alt="ducted air image"
                  />
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
                <div className="text-blue text-shadow-2 text-left p-0 mt-3">
                  Learn more >>
                </div>
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
                  their extended 7-year warranty with parts and labour and our
                  5-year installation warranty, it’s definitely the smart choice
                  when it comes to choosing a new system for your home or
                  office.
                </p>
                <p>
                  From the 1st of May 2020, all residential installations across
                  the entire Toshiba range of Hi-Wall, Multi Split and Light
                  Commercial equipment including the coveted SMMS VRF suite of
                  products will come with a 7-year warranty.{" "}
                </p>
                <p>
                  Toshiba range, download brochure{" "}
                  <a href={ToshibaPDF}>
                    {" "}
                    <span class="material-icons">picture_as_pdf</span> here
                  </a>
                </p>
              </div>
              <div>
                <StaticImage
                  className="rounded"
                  filename="toshiba-mainlg.jpg"
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
                  filename="samsung-main.jpg"
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
                  installation specialist you'll be confident and comfortable at
                  home or office with a new Samsung air conditioner.
                </p>
                <p>
                  <iframe
                    title="Samsung air conditioning systems"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/xZPI44Zh8yM"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </p>
              </div>
            </div>
          </Panel>

          <Panel>
            <h5 className="fw-600 cap mt-3 pb-2 ml-2">Carrier Split Systems</h5>
            <CarrierProducts />
            <div className="grid-col-2 pt-20">
              <div className="p-20">
                <h5 className="fw-600 cap">Carrier air conditioning</h5>
                <p>
                  Carrier is an American company based in Palm Beach, Florida
                  and has been manufacturing and distributing heating and
                  cooling system's since 1915. It flies under the radar here in
                  Australia but its one of the largest air conditioning
                  manufactures in the world. Whether it’s consistent heating and
                  cooling for the home, Carrier Pearl series is renowned for
                  better comfort and power saving. The system's inverter
                  technology will give you a comfortable and energy efficient
                  cooling and heating solution under budget for your home or
                  office space.
                </p>
                <p>
                  <iframe
                    title="Carrier air conditioning systems"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/pnf4TD_Tr8E"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </p>
              </div>
              <div>
                <StaticImage filename="carrier-1.jpg" alt="ducted air image" />
              </div>
            </div>
          </Panel>

          <Panel>
            <h5 className="fw-600 cap mt-3 pb-2 ml-2">Midea Split Systems</h5>

            <MideaProducts />
            <div className="grid-col-2 pt-20">
              <div>
                <StaticImage
                  filename="midea-main.jpg"
                  alt="midea split system air image"
                />
              </div>
              <div className="p-20">
                <h5 className="fw-600 cap">Midea air conditioning</h5>
                <p>
                  Midea have come a long way over the past 50 years with its
                  manufacturing of air conditioners at affordable prices. The
                  Aurora range is known for its pure comfort, clean filtered
                  air, quiet operations and smart mobile connect technology. It
                  has a powerful and fast cooling system that uses an efficient
                  and effective compressor that allows strong air flow for
                  immediate comfort. Tested and built to last, the outdoor unit
                  will with stand the Australian harsh conditions, and the whole
                  Aurora series is backed by a 5-year warranty.
                </p>
                <p>
                  Midea range, download brochure{" "}
                  <a href={MideaPDF}>
                    <span class="material-icons">picture_as_pdf</span> here
                  </a>
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
            </p>
            <hr />
            <h5 className=" px-20 cap fw-600">
              Replacement Split System Air Conditioning
            </h5>
            <p className="px-20">
              Installation of a new air conditioner and the disposal of your
              existing air conditioning split system service. We'll beat any
              written quote on the replacement split system air conditioning in
              your home. Home Comfort Air, the smart choice in air conditioning,
              simply submit your details, and we'll contact you back shortly.
            </p>
            <p className="font-italic px-20">
              "You could also leave the best suited time to call you back".
            </p>
          </div>

          <Form />
        </div>
      </section>

      <Link className="px-20" to="/ducted-systems">
        Go to Ducted Systems <span style={{ fontWeight: `bold` }}>></span>
      </Link>
    </div>
  </Layout>
)

export const query = graphql`
  {
    allStrapiProduct {
      nodes {
        title
      }
    }
  }
`

export default SplitPage
