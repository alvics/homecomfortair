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
        title="Bundall Air Conditioning | Gold Coast Split System Air Conditioning"
        description={`Supply and install new bedroom split system air conditioning from $1099, We install all major brands of air conditioning units. Contact us today! PH:0404 602 657`}
        keywords={[
          `Bundall,Gold,Coast,Air,Conditioning,
Split systems,Ipswich,Brisbane,Specials`,
        ]}
      />

      <div className="container  body-wrapper">
        <div className="contact pt-2" style={{ textAlign: "center" }}>
          <StaticImage
            filename="Home-Comfort-Air-COL-03-650.png"
            alt="home comfort air image"
          />
          <h1 className="p-3 text-dark cap fw-600 h4">Bundall Air Conditioning</h1>

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
              <h2 className="h5 cap fw-600">Air Conditioning Bundall </h2>
            </div>

            <p className="lead-20">
              Servicing Gold Coast
            </p>

            <p className="lead-20 mt-3">
            At Home Comfort Air, we are proud to serve the suburb of Bundall and the surrounding area on the Gold Coast. As a local company, we understand the unique needs of our customers in this beautiful and bustling region. That's why we offer a range of air conditioning services to help keep your home or business comfortable and well-maintained all year round.
            </p>

            <p className="lead-20">
            Our team of experienced technicians is skilled in working with all types of air conditioning units, and we use state-of-the-art equipment and techniques to ensure that your unit is running smoothly and efficiently. Whether you need a simple repair or a full system installation, we have the expertise and equipment to get the job done right.
            </p>

            <p className="lead-20">But our commitment to customer satisfaction goes beyond just providing top-notch air conditioning services. We understand that our customers lead busy lives and may not always have the time or inclination to deal with the hassles of maintaining and repairing their air conditioning units. That's why we offer competitive pricing and flexible scheduling, making it easy for our customers in Bundall to get the services they need at a time that is convenient for them.
            </p>

            <p className="lead-20">
             If you live in Bundall or the surrounding area and are in need of air conditioning services, we encourage you to give Home Comfort Air a try. We are confident that you will be impressed with the quality of our service and the professionalism of our team.
            </p>

           
             <div className="wrapper-about-img m-3">
              <StaticImage
                filename="bundall.JPG"
                alt="home comfort air image"
              />
             </div>

            <h2 className="h5 cap fw-600">About Bundall</h2>

            <p className="lead-20">
            Bundall is a suburb located on the Gold Coast in Queensland, Australia. It is known for its picturesque waterways, beautiful parks, and world-class golf courses, making it a popular destination for tourists and locals alike. The suburb is located just a short drive from the city center, making it easy for residents to access all the amenities and attractions the Gold Coast has to offer.
            </p>

            <p className="lead-20">
           One of the main attractions in Bundall is the Surfers Paradise Golf Club, which is considered one of the best golf courses in the region. The club offers a range of facilities and services, including a driving range, pro shop, and restaurant. The suburb is also home to a number of parks and reserves, including the Bundall Park and the Nerang River Parklands, which offer a variety of recreational activities such as picnicking, playgrounds, and BBQs.
            </p>

            <p className="lead-20">
            In addition to its natural beauty, Bundall is home to a number of shops, restaurants, and cafes. The suburb has a mix of local and chain stores, as well as a variety of dining options to suit every taste. There are also several schools and healthcare facilities in the area, making it a convenient and family-friendly place to live.
            </p>

            <p className="lead-20">
            Overall, Bundall is a beautiful and peaceful suburb that offers something for everyone. Whether you are visiting for a day or considering moving to the area, there is always something to see and do in Bundall.
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
