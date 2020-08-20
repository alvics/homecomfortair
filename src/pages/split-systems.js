import React from "react"
import { graphql } from "gatsby"

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
import CTA from "../components/CTA"

const SplitPage = ({ data: { allStrapiProduct: title } }) => (
  <Layout>
    <SEO
      title="Split Systems A/C"
      description={`HOME COMFORT AIR installs split system air conditioning from $300 dollars, throughout Ipswich, Brisbane and the Gold Coast area's.`}
      keywords={[
        `Gold,Coast,Air,Conditioning,
Split,systems,Ipswich,Brisbane,Specials`,
      ]}
    />
    <div className="body-wrapper split-systems">
      <section>
        <div className="pt-2 split-systems-avatar heading-box-color rounded ">
          <h1 className="h1 cam text-center text-white fw-600 p-3">
            <span>
              {" "}
              <StaticImage
                filename="HCA-avatar-WHITE-1400.png"
                alt="home comfort air image"
              />
            </span>
            Split systems air conditioning
          </h1>
          <div className="pb-3">
            <CTA />
          </div>
        </div>

        <div className="grid-col-2 split-systems-top-col">
          <div>
            <h3 className="h5 fw-600 px-20 mt-3">SINGLE ROOM SOLUTION</h3>
            <p className="lead-20 px-20">
              The split system air conditioner is a reliable and flexible
              comfort solution and ideal for living areas, apartment and single
              rooms. Keeping you warm and cosy in winter and cool and fresh in
              summer. It also gives your room a stylish, sleek and sophisticated
              look, with advanced performance and technology its the perfect
              solution to take comfort all year round.
            </p>
            <p className="lead-20 px-20">
              We supply and install split systems from 2.5kW for small bedrooms,
              7kW units for your average lounge room, to the big 10kW units that
              cool larger open style living, lounge and dinning rooms. Most
              split systems are reverse cycle, meaning that you can switch
              between heating and cooling modes to set your desired temperature.
            </p>
          </div>
          <div className="px-3 pt-2">
            <StaticImage
              filename="hero-3.jpg"
              alt="split system air image"
              height="150"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="heading-box-color  heading-avatar rounded row d-flex align-items-center my-2 mx-0 ">
          <div className="col-sm-3 col-lg-2 mt-1 px-2">
            <StaticImage
              filename="HCA-avatar-WHITE-1400.png"
              alt="home comfort air image"
            />
          </div>
          <div className="col">
            <h2 className="h2 fw-600 mt-2 ">Brands We Recommend</h2>
          </div>
        </div>
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
                  1981 and have respectfully maintained the technical advantage
                  above the rest. Designed for durability and simplicity, the
                  Toshiba is a superior made air conditioner to withstand the
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
              <div className="tabs-img">
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
            <div className="px-3">
              <SamsungProducts />
            </div>

            <div className="grid-col-2 col-panel pt-20">
              <div className="tabs-img px-3">
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
                  installation specialist, you'll be confident and comfortable
                  at home or office with a new Samsung air conditioner.
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
            <div className="px-3">
              <CarrierProducts />
            </div>

            <div className="grid-col-2 col-panel pt-20">
              <div className="p-20">
                <h5 className="fw-600 cap">Carrier air conditioning</h5>
                <p>
                  Carrier is an American company based in Palm Beach, Florida
                  and has been manufacturing and distributing heating and
                  cooling system's since 1915. It flies under the radar here in
                  Australia, but its one of the largest air conditioning
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
              <div className="tabs-img">
                <StaticImage filename="carrier-1.jpg" alt="ducted air image" />
              </div>
            </div>
          </Panel>

          <Panel>
            <h5 className="fw-600 cap mt-3 pb-2 ml-2">Midea Split Systems</h5>

            <MideaProducts />
            <div className="grid-col-2 pt-20">
              <div className="tabs-img">
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
                  Aurora range is known for its pure comfort, clean, filtered
                  air, quiet operations and smart mobile connect technology. It
                  has a powerful and fast cooling system that uses an efficient
                  and effective compressor that allows strong air flow for
                  immediate comfort. Tested and built to last, the outdoor unit
                  will withstand the Australian harsh conditions, and the whole
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
        <div className="heading-box-color  heading-avatar rounded row d-flex align-items-center my-2 mx-0">
          <div className="col-sm-3 col-lg-2 mt-1 px-2">
            <StaticImage
              filename="HCA-avatar-WHITE-1400.png"
              alt="home comfort air image"
            />
          </div>
          <div className="col">
            <h3 className="h2 fw-600 mt-2">
              Residential Air Conditioning Solution
            </h3>
          </div>
        </div>
        <section>
          <div className="row">
            <div className=" col-lg-6 pt-3 mb-4">
              <h5 className=" px-20 cap fw-600">
                Split System Installation Service
              </h5>
              <p className="px-20">
                HOME COMFORT AIR can supply and fully install all brands of
                split system air conditioners for your home or office. Whether
                you're a builder of new construction and are looking for our
                "rough in" and "fit off" service to an existing home needing
                full installation, we've got air conditioning solutions for all
                requirements. Already purchased a split system and are only
                looking for installation ? We can provide our "installation only
                service" for you as well.
              </p>
              <h5 className=" px-20 cap fw-600 mt-4">
                Replacement Split System Air Conditioning Service
              </h5>
              <p className="px-20">
                Our replacement air conditioning service is widely used by
                property managers and home owners throughout South East
                Queensland. Our service includes the decommissioning and
                disposal of your old air conditioning system, through to
                installing, commissioning and testing of the new split system.
                Once your split system has been checked and functioning
                correctly, we'll go through and show you the use of the remote
                controller to operate your new air conditioning system. <br />
                HOME COMFORT AIR, residential air conditioning specialists.
              </p>
            </div>
            <div className="col-lg-6 ">
              <div className="mt-2 split-systems-bottom">
                <StaticImage
                  filename="install-new.png"
                  alt="air conditioning installation from $300 by Home Comfort Air"
                />
                <div className="mt-3">
                  <StaticImage
                    filename="hero-4.jpg"
                    alt="split system air conditioning by Home Comfort Air"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

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
          <div className="split-quotes-text">
            <h5 className=" px-20 cap fw-600">
              Split System Installation Quotes
            </h5>
            <p className="px-20">
              We can install a split system air conditioning systems for your
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
