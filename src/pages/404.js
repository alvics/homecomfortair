import React from "react"
import { Link } from "gatsby"
import Layout from "../components/ui/Layouts/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="body-wrapper">
      <div className="row">
        <div className="col-8">
          {" "}
          <h1 className="h4 pt-3">SORRY NOT FOUND</h1>
          <p>You just hit a page that doesn&#39;t exist... the sadness.</p>
        </div>
        <div className="col">
          <div className="col mt-5 archive-category">
            <h3 className="h6 fw-600">Categories</h3>
            <hr />
            <p style={{ fontSize: 13 }}>
              <Link to="/split-systems">Split Systems</Link>
            </p>
            <hr />
            <p style={{ fontSize: 13 }}>
              <Link to="/ducted-systems">Ducted Systems</Link>
            </p>
            <hr />
            <p style={{ fontSize: 13 }}>
              <Link to="/multi-head-systems">Multi-head Systems</Link>
            </p>
            <hr />
            <p style={{ fontSize: 13 }}>
              <Link to="/breakdowns">Service / Repairs</Link>
            </p>
            <hr />
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
