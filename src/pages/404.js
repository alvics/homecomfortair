import React from "react"
import { Link } from "gatsby"
import Layout from "../components/ui/Layouts/layout"
import SEO from "../components/seo"
import MideaProducts from "../components/Products/MideaProducts"
import HaierProducts from "../components/Products/Haier"
import DaikinProducts from "../components/Products/Daikin"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="body-wrapper">
      <div className="row">
        <div className="col-8">
          {" "}
          <h1 className="h4 pt-3">SORRY, PAGE NOT FOUND</h1>
          <p>You just hit a page that doesn&#39;t exist... the sadness.</p>
          <p>You might be interested in these though?</p>
          <div className="mt-5">
                <h5 className="range">
                Our entry-level range
                <small class="text-muted"> air conditioners</small>
                </h5>
                </div>
          <MideaProducts /> 


          <div className="mt-5">
                 <h5 className="range">Our standard range 
                <small class="text-muted"> air conditioners</small>
                 </h5>
                </div>
          <HaierProducts />

           <div className="mt-3">
                <h5 className="range">
                Our premium range a/c
                <small class="text-muted"> air conditioners</small>
                </h5>
                </div>
          <DaikinProducts />
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
