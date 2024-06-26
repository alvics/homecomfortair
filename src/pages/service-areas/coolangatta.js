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
        title="Coolangatta Air Conditioning | Gold Coast Split System Air Conditioning"
        description={`Supply and install new bedroom split system air conditioning from $1099, We install all major brands of air conditioning units. Contact us today! PH:0404 602 657`}
        keywords={[
          `Coolangatta,Gold,Coast,Air,Conditioning,
Split systems,Ipswich,Brisbane,Specials`,
        ]}
      />

      <div className="container  body-wrapper">
        <div className="contact pt-2" style={{ textAlign: "center" }}>
          <StaticImage
            filename="Home-Comfort-Air-COL-03-650.png"
            alt="home comfort air image"
          />
          <h1 className="p-3 text-dark cap fw-600 h4">Coolangatta Air Conditioning</h1>

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
              <h2 className="h5 cap fw-600">Air Conditioning Coolangatta </h2>
            </div>

            <p className="lead-20">
              Servicing Gold Coast
            </p>

            <p className="lead-20 mt-3">
            At Home Comfort Air, we are proud to serve the suburb of Coolangatta and the surrounding area on the Gold Coast. As a local company, we understand the unique needs of our customers in this beautiful and vibrant community. That's why we offer a range of air conditioning services to help keep   your home or business comfortable and well-maintained all year round.
            </p>

            <p className="lead-20">
            One of the services we offer in Coolangatta is the installation of new split systems and replacement units. These types of air conditioning units are perfect for homes and businesses that want to cool a single room or area. Split systems are easy to install and maintain, and they offer a high level of energy efficiency, making them a popular choice for many customers.
            </p>

            <p className="lead-20">
            At Home Comfort Air, we are committed to providing our customers with the best possible service. That's why we use state-of-the-art equipment and techniques to ensure that your air conditioning unit is installed correctly and efficiently. Our team of experienced technicians is skilled in working with all types of air conditioning units, and we take pride in our workmanship.
            </p>

            <p className="lead-20">
            If you live in Coolangatta or the surrounding area and are in need of air conditioning installation services, we encourage you to give Home Comfort Air a try. We are confident that you will be impressed with the quality of our service and the professionalism of our team. So, if you want to keep your home or business comfortable and well-maintained all year round, give us a call today!
            </p>

           
             <div className="wrapper-about-img m-3">
              <StaticImage
                filename="coolangatta2.JPG"
                alt="home comfort air image"
              />
             </div>

            <h2 className="h5 cap fw-600">About Coolangatta</h2>

            <p className="lead-20">
            Coolangatta is a suburb located on the Gold Coast in Queensland, Australia. It is known for its beautiful beaches, vibrant nightlife, and relaxed atmosphere, making it a popular destination for tourists and locals alike. The suburb is located just a short drive from the city center, making it easy for residents to access all the amenities and attractions the Gold Coast has to offer.
            </p>

            <p className="lead-20">
            One of the main attractions in Coolangatta is the beautiful beaches that the suburb is known for. The suburb is home to a number of popular beaches, including Kirra Beach, Greenmount Beach, and Snapper Rocks, which are popular for swimming, surfing, and sunbathing. The suburb is also home to a number of parks and reserves, including the Coolangatta Beachfront and the Tweed Mall, which offer a variety of recreational activities such as picnicking, playgrounds, and BBQs.
            </p>

            <p className="lead-20">
            In addition to its natural beauty, Coolangatta is home to a number of shops, restaurants, and cafes, as well as several schools and healthcare facilities. The suburb is known for its vibrant nightlife, with a number of bars and clubs offering live music and entertainment. Coolangatta is also home to a number of sporting facilities, including the Coolangatta and Tweed Heads Golf Club and the Tweed Coast Pro Surfing Reserve, which offer a range of programs and classes for people of all ages and skill levels.
            </p>

            <p className="lead-20">
            One of the things that makes Coolangatta such a special place is its proximity to the Gold Coast hinterland. The suburb is located just a short drive from a number of national parks and reserves, including the Lamington National Park and the Springbrook National Park, which offer a range of recreational activities such as hiking, picnicking, and birdwatching. These beautiful natural areas are a popular destination for nature lovers and offer a welcome respite from the hustle and bustle of city life.
            </p>

            <p className="lead-20">
            Overall, Coolangatta is a beautiful and vibrant suburb that offers something for everyone. Whether you are visiting for a day or considering moving to the area, there is always something to see and do in Coolangatta.
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
