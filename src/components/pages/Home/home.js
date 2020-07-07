import React from "react"
import { Link } from "gatsby"

import Layout from "../components/ui/Layouts/layout"

const HomeContent = () => (
  <Layout>
    <div>
      <code>Hello from home page content!</code>

      <p>All my home page content here!!!!</p>
      <Link to="/page-2">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default HomeContent
