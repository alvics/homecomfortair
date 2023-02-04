import React from 'react'
import StaticImage from './StaticQueryImages'
// import Img from 'gatsby-image'

const BrandsImages = () => {


    return (
          <div className="image-button-container d-flex flex-wrap">
                <div className="image-button col-3" style={{maxWidth: 200}}>
                    <StaticImage filename="2-carrier.webp" alt="Image 1"  />
                </div>
                <div className="image-button col" style={{maxWidth: 200}}>
                    <StaticImage filename="Haier-AC.webp" alt="Image 2"  />
                </div>
                <div className="image-button col" style={{maxWidth: 200}}>
                    <StaticImage filename="Daikin_NEWMenu.webp" alt="Image 3"  />
                </div>
                <div className="image-button col" style={{maxWidth: 200}}>
                    <StaticImage filename="3-mitsubishi.webp" alt="Image 4"  />
                </div>
                <div className="image-button col" style={{maxWidth: 200}}>
                    <StaticImage filename="midea-logo.jpg" alt="Image 4"  />
                </div>
                
          </div>  
    )
}

export default BrandsImages
