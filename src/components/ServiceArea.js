

import React, { Fragment } from 'react'
import { Link } from "gatsby"
import StaticImage from './StaticQueryImages'

export default function () {
  return (

    <Fragment>

      <div className="heading-box-color  heading-avatar rounded row d-flex align-items-center mb-4 mx-0">
              <div className="col-sm-3 col-lg-2 pt-2 px-4">
                <StaticImage
                  filename="HCA-avatar-WHITE-1400.png"
                  alt="home comfort air image"
                />
              </div>
              <div className="col">
                <h3 className="h2 fw-600 mt-2 ">
                   Ipswich, Brisbane, Gold Coast Air Conditioning 
                </h3>
              </div>
            </div>


    <div className='row'>
    <div className="col-md-4">
       <h3 className='h5'>Ipswich Air Conditioning</h3>
       <p className='lead mt-3'>
        Are you looking for a reliable and experienced air conditioning service in the Ipswich, Queensland area? Look no further! Our team at Home Comfort Air is here to help with all of your air conditioning needs, including split system installations with top brands like Daikin, Haier, Hisense, and Midea. Read more about our air conditioning service in Ipswich <Link to="ipswich-air-conditioning">here...</Link>
       </p>
    </div>
    <div className="col-md-4">
      <h3 className='h5'>Brisbane Air Conditioning</h3>
      <p className='lead mt-3'>
       Are you in search of a reputable air conditioning service in the Brisbane, Queensland area? Look no further than Home Comfort Air! Our team of skilled technicians is here to assist with all of your air conditioning needs, including the installation of split system units from top brands like Daikin, Haier, Hisense, and Midea. Read more about our air conditioning service in Brisbane <Link to="brisbane-air-conditioning">here...</Link>
      </p>
    </div>
    <div className="col-md-4">
     <h3 className='h5'>Gold Coast Air Conditioning</h3>
      <p className='lead mt-3'>
       Are you looking for a new split system air conditioner to be installed in your home or space? Do you have an old worn out system that needs replacing? Here at Home Comfort Air we install wall hung and ducted split system air conditioning for Gold Coast homes here in sunny Queensland Australia. You can all benefit on our split system installations monthly specials. Read more about our air conditioning service in Gold Coast <Link to="gold-coast-air-conditioning">here...</Link>
      </p>
    </div>
    
    </div>

    </Fragment>
  )
}
