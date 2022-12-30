// Display the list of products
import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/ui/Layouts/layout"
import SEO from "../../components/seo"
import StaticImage from "../../components/StaticQueryImages"
import MyForm from "../../components/form"
// import ToshibaProducts from "../components/Products/Toshiba"
// import CarrierProducts from "../../components/Products/CarrierProducts"
// import Tabs from "../components/pages/Multi-Systems/MyTabs"
import HaierProducts from "../../components/Products/Haier"
import MideaProducts from "../../components/Products/MideaProducts"
import DaikinProducts from "../../components/Products/Daikin"

const ServiceArea = () => {
  return (
    <Layout>
      <SEO
        title="Ashmore Air Conditioning | Gold Coast Split System Air Conditioning"
        description={`Supply and install new bedroom split system air conditioning from $1099, We install all major brands of air conditioning units. Contact us today!`}
        keywords={[
          `Ashmore,Gold,Coast,Air,Conditioning,
Split systems,Ipswich,Brisbane,Specials`,
        ]}
      />

      <div className="container  body-wrapper">
        <div className="contact pt-2" style={{ textAlign: "center" }}>
          <StaticImage
            filename="Home-Comfort-Air-COL-03-650.png"
            alt="home comfort air image"
          />
          <h1 className="p-3 text-dark cap fw-600 h4">Ashmore Air Conditioning</h1>

          <p className="font-italic">
            *Residential Air Conditioning Specialists
          </p>
        </div>
        <div className="row about-us">
          <div className="col-lg-8 pt-3">
            <div className="wrapper-about-img">
              <StaticImage
                filename="splits-add-11-pow.png"
                alt="home comfort air image"
              />


            </div>
            <div className="mt-3">
              <h2 className="h5 cap fw-600">Air Conditioning Ashmore </h2>
            </div>

            <p className="lead-20">
              Servicing Gold Coast
            </p>

            <p className="lead-20 mt-3">
         Home Comfort Air is a local company that provides air conditioning services to the suburb of Ashmore and the surrounding area on the Gold Coast in Queensland, Australia. We have a team of experienced and knowledgeable technicians who are skilled in repairing and maintaining all types of air conditioning units.
            </p>

            <p className="lead-20">
            Home Comfort Air offers a range of services to meet the needs of their customers in Ashmore, including installation, repair, and maintenance of air conditioning units. They are dedicated to providing top-quality service to ensure that your air conditioning unit is running smoothly and efficiently.
            </p>

            <p className="lead-20">One of the key advantages of using Home Comfort Air is our commitment to customer satisfaction. We use state-of-the-art equipment and techniques to ensure that your air conditioning unit is running at its best. In addition, we offer competitive pricing and flexible scheduling, making it easy for our customers in Ashmore to get the services they need at a time that is convenient for them.
            </p>

            <p className="lead-20"> If you are in need of air conditioning services in Ashmore or the surrounding area, be sure to consider Home Comfort Air. Our team of professionals will ensure that your home is comfortable and well-maintained all year round.
            </p>

             <div className="wrapper-about-img m-3">
              <StaticImage
                filename="ashmore.JPG"
                alt="home comfort air image"
              />
             </div>

            <h2 className="h5 cap fw-600">About Ashmore</h2>

            <p className="lead-20">Ashmore is a suburb located on the Gold Coast in Queensland, Australia. It is known for its beautiful beaches and waterways, making it a popular destination for tourists and locals alike. The suburb is located just a short drive from the city center, making it easy for residents to access all the amenities and attractions the Gold Coast has to offer.
            </p>

            <p className="lead-20">One of the main attractions in Ashmore is the Ashmore Plaza Shopping Center, which offers a range of shopping and dining options. The center is home to a number of chain stores and local businesses, as well as a variety of dining options to suit every taste. The suburb is also home to a number of parks and reserves, including the Ashmore Park and the Davenport Park, which offer a variety of recreational activities such as picnicking, playgrounds, and BBQs.
            </p>

            <p className="lead-20">In addition to its amenities, Ashmore is also home to a number of schools and healthcare facilities, making it a convenient and family-friendly place to live. The suburb is well-connected by public transportation, with buses and trains running regularly to and from the city center.
            </p>

            <p className="lead-20">Overall, Ashmore is a beautiful suburb that offers a great combination of amenities, recreational opportunities, and convenience. Whether you are visiting for a day or considering moving to the area, there is something for everyone in Ashmore.
            </p>

             

            <p className="lead-20">
              If your looking for air conditioning with professional and quality
              workmanship, give HOME COMFORT AIR a call on{" "}
              <a href="tel:0404602657">0404 602 657</a> for residential air
              conditioning solutions. Your satisfaction, is our guarantee!{" "}
            </p>
            <div className="img-wrapper-e">
              <StaticImage
                filename="install-new-23.png"
                alt="home comfort air image"
              />
            </div>

            <div className="mt-2">
              <HaierProducts />
            </div>
          </div>
          <div className="col-lg-4 pt-3">
      
     <div className="form-quote home-page mt-5">
                <h4 className="h6 text-center text-white fw-600 heading-box-color p-20 rounded cap">
                  Free in home appraisal
                </h4>
                <i></i>

                <MyForm />
                <div>
                <MideaProducts />
                <DaikinProducts />
                </div>
              </div>

          </div>
        </div>
        <div className="mt-2">
          <Link to="/products">View all split systems ></Link>
        </div>
      </div>
    </Layout>
  )
}

export default ServiceArea
