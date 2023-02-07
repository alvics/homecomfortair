//***************************/
// ABOUT MEGA MENU NAVIGATION
//***************************/

import React, { Fragment } from "react"
import { Link } from "gatsby"
import StaticImage from "../StaticQueryImages"


const BrandNavMenu = () => {
 const width = 0
 const height = 30
  return (

   
  <Fragment>
      <Link to="/about-us">
             <span className="dropdown-- ">
               <span className="dropbtn">
                 <Link to="/about-us">Brands</Link>
                 <span
                   style={{ fontSize: `inherit`, fontWeight: `bold` }}
                   className="material-icons"
                 >
                   keyboard_arrow_down
                 </span>
               </span>
               <div className="dropdown-content brands-nav">
                  <Link to="/products/midea-air-conditioning"><div style={{maxWidth:100, border:0, textAlign:"center"}} ><StaticImage filename="midea-logo.jpg" width={width} height={height} 
                alt="home comfort air image" /></div>Midea Air Conditioning</Link>

                  <Link to="/products/haier-air-conditioning"><div style={{maxWidth:100, border:0, textAlign:"center"}} ><StaticImage filename="haier.jpg"
                alt="home comfort air image" /></div>Haier Air Conditioning</Link>

                    <Link to="/products/mitsubishi-air-conditioning"><div style={{maxWidth:100, border:0}}><StaticImage filename="mitsubishi-electric.jpg"
                alt="home comfort air image" /></div>Mitsubishi Air Conditioning</Link>

                  <Link to="/products/samsung-air-conditioning" ><div style={{maxWidth:100, border:0}}><StaticImage filename="samsung.jpg"
                alt="home comfort air image" /></div>Samsung Air Conditioning</Link>
                  
                  <Link to="/products/toshiba-air-conditioning" ><div style={{maxWidth:100, border:0}}><StaticImage filename="toshiba.jpg"
                alt="home comfort air image" /></div>Toshiba Air Conditioning</Link>

                  <Link to="/products/daikin-air-conditioning"><div style={{maxWidth:100, border:0}}><StaticImage filename="daikin.jpg"
                alt="home comfort air image" /></div>Daikin Air Conditioning</Link>

              
                <Link to="/products/carrier-air-conditioning"><div style={{maxWidth:80, border:0, marginBottom:5, marginTop:5}}><StaticImage filename="carrier.png"
                alt="home comfort air image" /></div>Carrier Air Conditioning</Link>

                 <Link to="/products/hisense-2.5kw-j-series-reverse-cycle-split-system-specials-jan-2023-HAWJ9KR"><div style={{maxWidth:80, border:0, marginBottom:15, marginTop:15}}><StaticImage filename="hisense.png"
                alt="home comfort air image" /></div>Hisense Air Conditioning</Link>


                 </div>
             </span>


             <div class="container"></div>
      </Link>
  </Fragment>
  )
}

export default BrandNavMenu
