import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/ui/Layouts/layout"
import SEO from "../components/seo"
import GoogleReviews from "../components/GoogleReviews"
import ReviewCarousel from "../components/ReviewCarousel"
// import Sizes from "../components/Queries/GetCategories"

const Alvic= () => (
  <Layout>
    <SEO title="Staging website" />
   <h3>This is a staging site page!</h3>
   <GoogleReviews />
   <ReviewCarousel />
  </Layout>
)

export default Alvic
