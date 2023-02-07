import React from 'react'
import { Link } from "gatsby"
// import Layout from "../../components/ui/Layouts/layout"
// import SEO from "../../components/seo"
import StaticImage from "../../components/StaticQueryImages"
// import Form from "../../components/quoteForm"
// import CTA from "../../components/CTA"
import { Fragment } from 'react'

export default function PageStructureComponent() {
  return (
      <Fragment>
      <div class="d-flex flex-row bd-highlight mb-3">
        <StaticImage filename="2-carrier.webp" alt="Image 1"  class="p-2 bd-highlight" />
        <StaticImage filename="Haier-AC.webp" class="p-2 bd-highlight" />
        <StaticImage src="" class="p-2 bd-highlight" />
     </div>
      
    </Fragment>
  )
}
