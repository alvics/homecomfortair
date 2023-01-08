/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
// add Router to component to use react hook, to get the current url of the page. From seo.js
import { BrowserRouter as Router } from 'react-router-dom';
import HeaderMobile from "../headerNew"
import Header from "../header"
import Footer from "../../footer"
import "../Layouts/layout.css"

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <Router>
      <Header />
      <HeaderMobile />
      <div
        style={{
          margin: `110px auto 0 auto`,
          maxWidth: 1440,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      </div>
      <Footer />
    </Router>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
