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
        title="Broadbeach Air Conditioning | Gold Coast Split System Air Conditioning"
        description={`Supply and install new bedroom split system air conditioning from $1099, We install all major brands of air conditioning units. Contact us today! PH:0404 602 657`}
        keywords={[
          `Broadbeach,Gold,Coast,Air,Conditioning,
Split systems,Ipswich,Brisbane,Specials`,
        ]}
      />

      <div className="container  body-wrapper">
        <div className="contact pt-2" style={{ textAlign: "center" }}>
          <StaticImage
            filename="Home-Comfort-Air-COL-03-650.png"
            alt="home comfort air image"
          />
          <h1 className="p-3 text-dark cap fw-600 h4">Broadbeach Air Conditioning</h1>

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
              <h2 className="h5 cap fw-600">Air Conditioning Broadbeach </h2>
            </div>

            <p className="lead-20">
              Servicing Gold Coast
            </p>

            <p className="lead-20 mt-3">
            As a local company serving the suburb of Broadbeach and the surrounding area on the Gold Coast, Home Comfort Air is committed to providing top-quality air conditioning services to our customers. Our team of experienced technicians is skilled in repairing and maintaining all types of air conditioning units, and we use state-of-the-art equipment and techniques to ensure that your unit is running smoothly and efficiently.
            </p>

            <p className="lead-20">
            In addition to our air conditioning services, we also offer competitive pricing and flexible scheduling, making it easy for our customers in Broadbeach to get the services they need at a time that is convenient for them. Our goal is to make the process of maintaining and repairing your air conditioning unit as hassle-free as possible.
            </p>

            <p className="lead-20">
            But our commitment to customer satisfaction doesn't stop there. We pride ourselves on our professionalism and our ability to provide personalized service to each and every one of our customers. Whether you need a simple repair or a full system installation, we have the expertise and equipment to get the job done right.
            </p>

            <p className="lead-20">
             If you live in Broadbeach or the surrounding area and are in need of air conditioning services, we encourage you to give Home Comfort Air a try. We are confident that you will be impressed with the quality of our service and the professionalism of our team.
            </p>

           
             <div className="wrapper-about-img m-3">
              <StaticImage
                filename="broadbeach.JPG"
                alt="home comfort air image"
              />
             </div>

            <h2 className="h5 cap fw-600">About Broadbeach</h2>

            <p className="lead-20">
            Broadbeach is a suburb located on the Gold Coast in Queensland, Australia. It is known for its beautiful beaches, world-class shopping and dining, and vibrant nightlife, making it a popular destination for tourists and locals alike. The suburb is located just a short drive from the city center, making it easy for residents to access all the amenities and attractions the Gold Coast has to offer.
            </p>

            <p className="lead-20">
            One of the main attractions in Broadbeach is the beach itself, which is known for its golden sands and crystal-clear waters. The beach is a popular spot for swimming, surfing, and beach sports, as well as relaxing and soaking up the sun. The suburb is also home to a number of parks and reserves, including the Kurrawa Beach Park and the Broadbeach Mall Park, which offer a variety of recreational activities such as picnicking, playgrounds, and BBQs.
            </p>

            <p className="lead-20">
            In addition to its natural beauty, Broadbeach is home to a number of shops, restaurants, and cafes. The suburb has a mix of local and chain stores, as well as a variety of dining options to suit every taste. There are also several schools and healthcare facilities in the area, making it a convenient and family-friendly place to live.
            </p>

            <p className="lead-20">
            Overall, Broadbeach is a vibrant and exciting suburb that offers something for everyone. Whether you are visiting for a day or considering moving to the area, there is always something to see and do in Broadbeach.
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
