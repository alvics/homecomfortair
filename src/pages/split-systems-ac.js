import React from "react"
import { Link } from "gatsby"

import Layout from "../components/ui/Layouts/layout"
import StaticImage from "../components/StaticQueryImages"
import SEO from "../components/seo"

const SplitPage = () => (
  <Layout>
    <SEO title="Split Systems A/C" />
    <div>
      <StaticImage filename="hero-3.jpg" alt="ducted air image" />
    </div>
    <h2 className="text-center secondary fw-600 heading-box-color">
      Split System Air Conditioning
    </h2>
    <div className="grid-300">
      <div className="card">
        <Link to="/split-systems-ac">
          <div className="card-top">
            <StaticImage filename="cas.jpg" alt="ducted air image" />
          </div>
          <div className="card-heading">
            <h3 className="fw-400 text-dark">Daikin Systems</h3>
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
            <h3 className="fw-400 text-dark">Samsung Systems</h3>
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
            <StaticImage filename="ac-2.jpg" alt="multi head air con systems" />
          </div>
          <div className="card-heading">
            <h3 className="fw-400 text-dark">Mitsubishi Systems</h3>
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
            <h3 className="fw-400 text-dark">Midea Systems</h3>
          </div>
          <div className="card-body">
            <p className="card-text lead">
              Powerful and an affordable solution for air conditioners for every
              type ...
            </p>
          </div>
          <div className="text-blue text-shadow-2">Learn more >></div>
        </Link>
      </div>
    </div>
    <h1 classNameS="cap">Split System Air Conditioning</h1>
    <p className="lead-20">
      High wall split system air conditioner connects one indoor unit to an
      outdoor unit. Installs simply and unobtrusively to buildings with no need
      for ductwork. Delivers a sophisticated solution to single zone interior
      spaces at an affordable price. Provides a simple solution for one-room
      additions.
    </p>
    <h2 className="section text-center secondary fw-600 heading-box-color">
      Brands we recommend
    </h2>
    <div className="grid-col-2 section">
      <div className="p-20">
        <h5>Samsung Split Systems</h5>
        <p>
          Samsung Air Conditioning is one of our top choices, it's reputation
          for technology and innovations is one of the best. As a Samsung Air
          Conditioning Specialist you will be comfortable at home or your office
          with a Samsung air conditioner.
        </p>
      </div>
      <div>
        <StaticImage filename="cas.jpg" alt="ducted air image" />
      </div>
    </div>
    <div className="grid-col-2 section">
      <div>
        <StaticImage filename="cas.jpg" alt="ducted air image" />
      </div>
      <div className="p-20">
        <h5>Mitsubishi Split Systems</h5>
        <p>
          Whether it’s consistent heating and cooling for the home or office,
          Mitsubishi Electric offers you state-of-the-art technology that is
          quiet, simple to use, energy efficient and above all, reliable.
        </p>
      </div>
    </div>

    <div className="grid-col-2 section">
      <div className="p-20">
        <h5>Daikin Split Systems</h5>
        <p>
          Daikin Split Systems are the ferrari when it comes to air conditioning
          systems. It's clearly the winner in innovations and technology over
          most brands, like the ferrari it's not the cheapest on the block but
          Daikin air conditioner are hard to beat, if you can afford one that
          is. I would highly recommend the Daikin air conditioning systems for
          your home or space.
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
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SplitPage
