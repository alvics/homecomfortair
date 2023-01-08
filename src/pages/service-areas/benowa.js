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
        title="Benowa Air Conditioning | Gold Coast Split System Air Conditioning"
        description={`Supply and installation Daikin air conditioning bedroom's from $1,399. We install all major brands of air conditioning units. Toshiba, Samsung, Haier`}
        keywords={[
          `Benowa,Gold,Coast,Air,Conditioning,
Split systems,Toshiba,Daikin,Haier`,
        ]}
      />

      <div className="container  body-wrapper">
        <div className="contact pt-2" style={{ textAlign: "center" }}>
          <StaticImage
            filename="Home-Comfort-Air-COL-03-650.png"
            alt="home comfort air image"
          />
          <h1 className="p-3 text-dark cap fw-600 h4">Benowa Air Conditioning</h1>

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
              <h2 className="h5 cap fw-600">Air Conditioning Benowa </h2>
            </div>

            <p className="lead-20">
              Servicing Gold Coast
            </p>

            <p className="lead-20 mt-3">
          Home Comfort Air is a local company that provides air conditioning services to the suburb of Benowa and the surrounding area on the Gold Coast in Queensland, Australia. We have a team of experienced and knowledgeable technicians who are skilled in repairing and maintaining all types of air conditioning units.
            </p>

            <p className="lead-20">
            Home Comfort Air offers a range of services to meet the needs of their customers in Benowa, including installation, repair, and maintenance of air conditioning units. We are dedicated to providing top-quality service to ensure that your air conditioning unit is running smoothly and efficiently.
            </p>

            <p className="lead-20"> One of the key advantages of using Home Comfort Air is their commitment to customer satisfaction. We use state-of-the-art equipment and techniques to ensure that your air conditioning unit is running at its best. In addition, we offer competitive pricing and flexible scheduling, making it easy for their customers in Benowa to get the services they need at a time that is convenient for them.
            </p>

            <p className="lead-20"> If you are in need of air conditioning services in Benowa or the surrounding area, be sure to consider Home Comfort Air. Our team of professionals will ensure that your home is comfortable and well-maintained all year round.
            </p>
            
            <p className="lead-20">Whether you need a simple repair or a full system installation, Home Comfort Air has the expertise and equipment to get the job done. We offer competitive pricing and flexible scheduling, making it easy to get the air conditioning services you need at a time that is convenient for you.
            </p>

             <p className="lead-20">
             If you live in Benowa and are in need of air conditioning services, be sure to consider Home Comfort Air. Our team of professionals will ensure that your air conditioning unit is running smoothly and efficiently, so you can stay comfortable in your home all year round.
            </p>

             <div className="wrapper-about-img m-3">
              <StaticImage
                filename="benowa.JPG"
                alt="home comfort air image"
              />
             </div>

            <h2 className="h5 cap fw-600">About Benowa</h2>

            <p className="lead-20">Benowa is a suburb located on the Gold Coast in Queensland, Australia. It is known for its beautiful beaches and waterways, making it a popular destination for tourists and locals alike. The suburb is located just a short drive from the city center, making it easy for residents to access all the amenities and attractions the Gold Coast has to offer.
            </p>

            <p className="lead-20">One of the main attractions in Benowa is the Royal Pines Resort, which offers a range of recreational activities, including golf, tennis, and swimming. The resort is set among beautiful natural surroundings, making it a great place to enjoy the outdoors. The suburb is also home to a number of parks and reserves, including the Benowa Park and the Benowa Woods Nature Reserve, which offer a variety of recreational activities such as hiking, picnicking, and birdwatching.
            </p>

            <p className="lead-20">In addition to its natural beauty, Benowa is home to a number of shops, restaurants, and cafes. The suburb has a mix of local and chain stores, as well as a variety of dining options to suit every taste. There are also several schools and healthcare facilities in the area, making it a convenient and family-friendly place to live.
            </p>

            <p className="lead-20">Overall, Benowa is a beautiful suburb that offers a great combination of natural beauty, recreational opportunities, and amenities. Whether you are visiting for a day or considering moving to the area, there is something for everyone in Benowa.
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

            <div className="mt-5">
                <h5 className="range">
                Our standard range
                <small class="text-muted"> air conditioners</small>
                </h5>
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

                <div className="mt-5">
                <h5 className="range">
                Our entry-level range
                <small class="text-muted"> air conditioners</small>
                </h5>
                </div>
                <MideaProducts />

                <div className="mt-3">
                <h5 className="range">
                Our premium range a/c
                <small class="text-muted"> air conditioners</small>
                </h5>
                </div>
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
