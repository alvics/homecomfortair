import React from 'react'
// import { Link } from "gatsby"
// import Layout from "../../components/ui/Layouts/layout"
import SEO from "../../components/seo"
import StaticImage from "../../components/StaticQueryImages"
// import Form from "../../components/quoteForm"
import CTA from "../../components/CTA"
import { Fragment } from 'react'

export default function PageStructureComponent() {
  return (
      <Fragment>
       <SEO
      title="Mitsubishi Split System Air Conditioner | Home Comfort Air"
      description={ `Mitsubishi air conditioning from HOME COMFORT AIR. We supply and fully install Mitsubishi split system air conditioners from $1579 throughout Gold Coast area's.`}
      keywords={[ `gold,coast,price,mitsubishi,split,system,air, conditioner`, ]} />

     <div className="body-wrapper ducted-systems">

        <section>
        <div className="pt-2 ducted-systems-avatar rounded heading-box-color ">
          <h1 className="h1 cam text-center text-white fw-600  p-3">
            <div>
              {" "}
              <StaticImage
                filename="HCA-avatar-WHITE-1400.png"
                alt="home comfort air favicon logo image"
              />
            </div>
            Mitsubishi Split System Air Conditioner
          </h1>
          <div className="pb-3">
            <CTA />
          </div>
        </div>
      
        </section>
        </div>
    </Fragment>
  )
}
