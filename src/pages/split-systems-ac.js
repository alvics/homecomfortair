import React from "react"
import { Link } from "gatsby"

import Layout from "../components/ui/Layouts/layout"
import SEO from "../components/seo"

const SplitPage = () => (
  <Layout>
    <SEO title="Split Systems A/C" />
    <h1>Hi from the Split Systems</h1>

    <p>Welcome to page 1</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SplitPage
