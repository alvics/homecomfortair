import React from "react"
import { Link } from "gatsby"

import Layout from "../components/ui/Layouts/layout"
import SEO from "../components/seo"

const BreakdownsPage = () => (
  <Layout>
    <SEO title="Breakdowns" />
    <h1>Hi from Breakdowns</h1>

    <p>Welcome to page 4</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default BreakdownsPage
