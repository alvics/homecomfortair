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
        title="Eagleby Air Conditioning | Gold Coast Split System Air Conditioning"
        description={`Supply and install new bedroom split system air conditioning from $1099, We install all major brands of air conditioning units. Contact us today! PH:0404 602 657`}
        keywords={[
          `Eagleby,Gold,Coast,Air,Conditioning,
Split systems,Ipswich,Brisbane,Specials`,
        ]}
      />

      <div className="container  body-wrapper">
        <div className="contact pt-2" style={{ textAlign: "center" }}>
          <StaticImage
            filename="Home-Comfort-Air-COL-03-650.png"
            alt="home comfort air image"
          />
          <h1 className="p-3 text-dark cap fw-600 h4">Eagleby Air Conditioning</h1>

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
              <h2 className="h5 cap fw-600">Air Conditioning Eagleby </h2>
            </div>

            <p className="lead-20">
              Servicing Gold Coast
            </p>

            <p className="lead-20 mt-3">
            At Home Comfort Air, we are proud to serve the suburb of Eagleby and the surrounding area on the Gold Coast. As a local company, we understand the unique needs of our customers in this vibrant and growing community. That's why we offer a range of air conditioning services to help keep your home or business comfortable and well-maintained all year round.
            </p>

            <p className="lead-20">
           One of the services we offer in Eagleby is the installation of new split systems and ducted systems. Split systems are perfect for homes and businesses that want to cool a single room or area, while ducted systems offer a more centralized and discreet solution for cooling multiple rooms or areas. These types of air conditioning units are easy to install and maintain, and they offer a high level of energy efficiency, making them a popular choice for many customers.
            </p>

            <p className="lead-20">
            At Home Comfort Air, we are committed to providing our customers with the best possible service. That's why we use state-of-the-art equipment and techniques to ensure that your air conditioning unit is installed correctly and efficiently. Our team of experienced technicians is skilled in working with all types of air conditioning units, and we take pride in our workmanship.
            </p>

            <p className="lead-20">
            In addition to our air conditioning services, we also offer split system cleaning and maintenance to ensure healthier fresher air to your room.
            </p>

            <p className="lead-20">
           If you live in Eagleby or the surrounding area and are in need of air conditioning installation services, we encourage you to give Home Comfort Air a try. We are confident that you will be impressed with the quality of our service and the professionalism of our team. So, if you want to keep your home or business comfortable and well-maintained all year round, give us a call today!
            </p>

           
             <div className="wrapper-about-img m-3">
              <StaticImage
                filename="eagleby2.jpg"
                alt="home comfort air image"
              />
             </div>

            <h2 className="h5 cap fw-600">About Eagleby</h2>

            <p className="lead-20">
            Eagleby is a suburb located on the Gold Coast in Queensland, Australia. It is known for its beautiful natural surroundings, growing community, and easy access to amenities and attractions. The suburb is located just a short drive from the city center, making it easy for residents to access all the amenities and attractions the Gold Coast has to offer.
            </p>

            <p className="lead-20">
            One of the things that sets Eagleby apart from other suburbs on the Gold Coast is its beautiful natural surroundings. The suburb is home to a number of parks and reserves, including the Eagleby Wetlands and the Jimboomba State Forest, which offer a variety of recreational activities such as hiking, picnicking, and birdwatching. The suburb is also home to a number of sporting facilities, including the Eagleby Leagues Club and the St. Bernardine's Primary School, which offer a range of programs and classes for people of all ages and skill levels.
            </p>

            <p className="lead-20">
            In addition to its natural beauty, Eagleby is home to a number of well-regarded schools, healthcare facilities, and other amenities. The suburb is known for its growing community and well-maintained homes, making it a popular choice for families and professionals looking for a peaceful and safe place to live.
            </p>

            <p className="lead-20">
            Despite its peaceful atmosphere, Eagleby is by no means a quiet or boring suburb. The suburb is home to a number of restaurants, cafes, and bars, as well as several sporting facilities, including the Eagleby Leagues Club and the St. Bernardine's Primary School. These facilities offer a range of programs and classes for people of all ages and skill levels, ensuring that there is always something to do in Eagleby.
            </p>

            <p className="lead-20">
            Overall, Eagleby is a beautiful and peaceful suburb that offers something for everyone. Whether you are visiting for a day or considering moving to the area, there is always something to see and do in Eagleby.
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
                <h5 className="range">Our standard range 
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
