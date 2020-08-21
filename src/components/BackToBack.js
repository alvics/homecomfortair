// Display the Installation examples for back to back and up and over
import React from "react"
import StaticImage from "../components/StaticQueryImages"

const BackToBack = () => (
  <div className="row">
    <div className="col-md-6 p-4">
      {" "}
      <StaticImage
        filename="back-to-back-img.png"
        alt="back to back air conditioning installation house plan example"
      />
    </div>
    <div className="col-md-6 p-4">
      {" "}
      <StaticImage
        filename="up-over-img.png"
        alt="up and over air conditioning installation house plan example"
      />
    </div>
  </div>
)

export default BackToBack
