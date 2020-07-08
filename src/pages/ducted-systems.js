import React from "react"
import { Link } from "gatsby"

import Layout from "../components/ui/Layouts/layout"
import SEO from "../components/seo"

const DuctedPage = () => (
  <Layout>
    <SEO title="Split Ducted Systems" />
    <h1>Hi from the Ducted Systems</h1>

    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default DuctedPage
