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
        title="Bonogin Air Conditioning | Gold Coast Split System Air Conditioning"
        description={`Supply and install new bedroom split system air conditioning from $1099, We install all major brands of air conditioning units. Contact us today! PH:0404 602 657`}
        keywords={[
          `Bonogin,Gold,Coast,Air,Conditioning,
Split systems,Ipswich,Brisbane,Specials`,
        ]}
      />

      <div className="container  body-wrapper">
        <div className="contact pt-2" style={{ textAlign: "center" }}>
          <StaticImage
            filename="Home-Comfort-Air-COL-03-650.png"
            alt="home comfort air image"
          />
          <h1 className="p-3 text-dark cap fw-600 h4">Bonogin Air Conditioning</h1>

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
              <h2 className="h5 cap fw-600">Air Conditioning Bonogin </h2>
            </div>

            <p className="lead-20">
              Servicing Gold Coast
            </p>

            <p className="lead-20 mt-3">
            As a resident of Bonogin, you know the importance of having a reliable and efficient air conditioning system. Located on the Gold Coast in Queensland, Australia, the summer months can get quite hot and humid, making it essential to have a functioning air conditioning unit to stay comfortable in your home.
            </p>

            <p className="lead-20">
            This is where Home Comfort Air comes in. As a local company serving the Bonogin area, we have a team of experienced and knowledgeable technicians who are skilled in repairing and maintaining all types of air conditioning units. Whether you need a simple repair or a full system installation, Home Comfort Air has the expertise and equipment to get the job done.
            </p>

            <p className="lead-20">But what sets Home Comfort Air apart from other air conditioning companies in the area? One of our key advantages is our commitment to providing top-quality service. Our technicians are trained and certified to ensure that they have the skills and knowledge to get the job done right. We also use state-of-the-art equipment and techniques to ensure that your air conditioning unit is running smoothly and efficiently.
            </p>

            <p className="lead-20"> In addition to our high-quality services, Home Comfort Air also offers competitive pricing and flexible scheduling. This makes it easy for their customers in Bonogin to get the services they need at a time that is convenient for them.
            </p>

            <p className="lead-20">So if you are in need of air conditioning services in the Bonogin area, be sure to consider Home Comfort Air.</p>


             <div className="wrapper-about-img m-3">
              <StaticImage
                filename="bonogin.JPG"
                alt="home comfort air image"
              />
             </div>

            <h2 className="h5 cap fw-600">About Bonogin</h2>

            <p className="lead-20">Bonogin is a suburb located on the Gold Coast in Queensland, Australia. It is known for its beautiful natural surroundings and peaceful atmosphere, making it a popular destination for those seeking a quieter, more relaxed lifestyle. The suburb is located just a short drive from the city center, making it easy for residents to access all the amenities and attractions the Gold Coast has to offer.
            </p>

            <p className="lead-20">One of the main attractions in Bonogin is the Bonogin Valley Nature Reserve, which offers a range of recreational activities such as hiking, picnicking, and birdwatching. The reserve is home to a number of native plants and animals, making it a great place to enjoy the outdoors and learn about the local ecosystem. The suburb is also home to a number of parks and reserves, including the Bonogin Park and the Bonogin Creek Reserve, which offer a variety of recreational activities such as picnicking, playgrounds, and BBQs.
            </p>

            <p className="lead-20">In addition to its natural beauty, Bonogin is home to a number of shops, restaurants, and cafes. The suburb has a mix of local and chain stores, as well as a variety of dining options to suit every taste. There are also several schools and healthcare facilities in the area, making it a convenient and family-friendly place to live.
            </p>

            <p className="lead-20">Overall, Bonogin is a beautiful suburb that offers a great combination of natural beauty, recreational opportunities, and amenities. Whether you are visiting for a day or considering moving to the area, there is something for everyone in Bonogin.
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
