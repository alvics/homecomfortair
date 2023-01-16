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
        title="Advancetown Air Conditioning | Gold Coast Split System Air Conditioning"
        description={`New installation bedroom split system air conditioning from $1099, We install all major brands of air conditioning units. Advancetown air conditioning.`}
        keywords={[
          `Advancetown,installation,Air,Conditioning,
Split,systems,clean,service`,
        ]}
      />

      <div className="container  body-wrapper">
        <div className="contact pt-2" style={{ textAlign: "center" }}>
          <StaticImage
            filename="Home-Comfort-Air-COL-03-650.png"
            alt="home comfort air image"
          />
          <h1 className="p-3 text-dark cap fw-600 h4">Advancetown Air Conditioning</h1>

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
              <h2 className="h5 cap fw-600">Air Conditioning Advancetown </h2>
            </div>


            <section>

              <p className="lead-20">
                Servicing Gold Coast
              </p>

                <p className="lead-20 mt-3">
              Advancetown's beautiful natural surroundings and small-town charm, is also home to a number of amenities and services that make it a convenient place to live. One of these services is the availability of reliable and efficient air conditioning services provided by Home Comfort Air.
                </p>

            </section>

            <section>
                <p className="lead-20">
                Home Comfort Air is a local company that specialises in providing air conditioning services to Advancetown and the surrounding area. Our team of experienced technicians is skilled in repairing and maintaining all types of air conditioning units, ensuring that residents of the town have access to high-quality air conditioning services
                </p>
            </section>

            <section>
            <p className="lead-20">Whether you need a simple repair or a full system installation, Home Comfort Air has the expertise and equipment to get the job done. We offer competitive pricing and flexible scheduling, making it easy to get the air conditioning services you need at a time that is convenient for you.
            </p>
            </section>

            
            <section>
            <p className="lead-20">If you live in Advancetown and are in need of air conditioning services, be sure to consider Home Comfort Air. Our team of professionals will ensure that your air conditioning unit is running smoothly and efficiently, so you can stay comfortable in your home all year round.
              </p>
            </section>
            
            <section>
             <div className="wrapper-about-img m-3">
              <StaticImage
                filename="advancetown.JPG"
                alt="home comfort air image"
              />

             </div>
           </section>

           <section>
           <h2 className="h5 cap fw-600">About Advancetown</h2>

            <p className="lead-20">Advancetown is a small town located in the Gold Coast hinterland of Queensland, Australia. It is known for its beautiful natural surroundings, with a mix of eucalyptus forests and rolling hills. The town is located just a short drive from the Gold Coast, making it a convenient place to live for those who want to be close to the city but still enjoy a more laid-back and rural lifestyle.
            </p>
           </section>
            
           <section>
           <p className="lead-20">One of the main attractions in Advancetown is the Advancetown Lake, which is a popular spot for boating, fishing, and other water sports. The lake is surrounded by beautiful forests, making it a great place to enjoy a picnic or take a hike. The town is also home to a number of parks and reserves, including the Advancetown Common and the Upper Beechmont Conservation Park, which offer a variety of recreational activities such as hiking, horse riding, and birdwatching.
            </p>
           </section>
            
            <section>
            <p className="lead-20">In addition to its natural beauty, Advancetown is home to a number of small businesses, including a café, a general store, and a few pubs. The town is also home to a number of farms and small-scale agriculture, making it a great place to buy fresh produce and locally-grown products.
              </p>
            </section>
            
            <section>
            <p className="lead-20">Overall, Advancetown is a charming and peaceful town that offers a unique blend of natural beauty, recreational opportunities, and small-town charm. It is a great place to visit or to call home for those who want to escape the hustle and bustle of city life.
            </p>
            </section>
            

             <section>
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
             </section>

           


             <div className="mt-5">
                <h5 className="range">Our standard range 
                <small class="text-muted"> air conditioners</small>
                </h5>
                </div>

            <div className="mt-2">
              <HaierProducts />
            </div>
          </div> {/* End Col-8  */}

          
    
         
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


             

          </div>{/* End Row  */}
          
        </div> {/* End Container  */}

                        <div className="mt-2">
                          <Link to="/products">View all split systems ></Link>
                        </div>
       

      
    </Layout>
  )
}

export default ServiceArea
