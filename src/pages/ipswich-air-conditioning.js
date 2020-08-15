// Display the list of products
import React from "react"
import Layout from "../components/ui/Layouts/layout"
import SEO from "../components/seo"
import MideaProducts from "../components/Products/MideaProducts"

const Ipswich = () => {
  return (
    <Layout>
      <SEO title="Servicing Ipswich" />

      <div className="pt-3">
        <h1 className="h2 cam text-center text-blue fw-600 heading-box-color rounded py-3">
          Ipswich Air Conditioning Service
        </h1>
      </div>

      <div className="container body-wrapper">
        <div className="row">
          <div className="col-lg-8">
            <div className="p-3">
              <p>
                Split system air conditioning within the Ipswich shire region.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
                provident, voluptas quae sequi earum quaerat sunt quod iste.
                Repellat hic reprehenderit deserunt illum nemo dolorum.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="product-grid">
              <MideaProducts />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Ipswich
