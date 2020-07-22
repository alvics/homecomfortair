import React from "react"
import Slider from "react-slick"

class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
    return (
      <Slider {...settings}>
        <div style={{ padding: `40px` }}>
          <img
            src="https://res.cloudinary.com/ewebdesigns/image/upload/v1595373369/bkv_toshiba_214320bc0f.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/ewebdesigns/image/upload/v1587019716/homecomfort_rfqv2f.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/ewebdesigns/image/upload/v1569452602/gc1_fxwfgf.jpg"
            alt=""
          />
        </div>
      </Slider>
    )
  }
}

export default SimpleSlider
