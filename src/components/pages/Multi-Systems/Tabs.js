// Display the dropdown button in Mobile Nav Menu
import React from "react"
// import { Link } from "gatsby"

const Tabs = () => {
  return (
    <section className="mt-5">
      <Tabs>
        <div className="grid-300">
          <Tab>
            <div className="card">
              <button className="btn btn-primary p-20">Daikin Systems</button>
            </div>
          </Tab>
          <Tab>
            <div className="card">
              <button className="btn btn-primary p-20">Samsung Systems</button>
            </div>
          </Tab>
          <Tab>
            <div className="card">
              <button className="btn btn-primary p-20">
                Mitsubishi Systems
              </button>
            </div>
          </Tab>
          <Tab>
            <div className="card">
              <button className="btn btn-primary p-20">Midea Systems</button>
            </div>
          </Tab>
        </div>

        <Panel>
          <div className="grid-col-2 section">
            <div className="p-20">
              <h5>Daikin Split Systems</h5>
              <p>
                Daikin Split Systems are the ferrari when it comes to air
                conditioning systems. It's clearly the winner in innovations and
                technology over most brands, like the ferrari it's not the
                cheapest on the block but Daikin air conditioner are hard to
                beat, if you can afford one that is. I would highly recommend
                the Daikin air conditioning systems for your home or space.
              </p>
            </div>
            <div>
              <StaticImage
                className="rounded"
                filename="cas.jpg"
                alt="ducted air image"
              />
            </div>
          </div>
        </Panel>

        <Panel>
          <div className="grid-col-2 section">
            <div className="p-20">
              <h5>Samsung Split Systems</h5>
              <p>
                Samsung Air Conditioning is one of our top choices, it's
                reputation for technology and innovations is one of the best. As
                a Samsung Air Conditioning Specialist you will be comfortable at
                home or your office with a Samsung air conditioner.
              </p>
            </div>
            <div>
              <StaticImage filename="cas.jpg" alt="ducted air image" />
            </div>
          </div>
        </Panel>

        <Panel>
          <div className="grid-col-2 section">
            <div>
              <StaticImage filename="cas.jpg" alt="ducted air image" />
            </div>
            <div className="p-20">
              <h5>Mitsubishi Split Systems</h5>
              <p>
                Whether it’s consistent heating and cooling for the home or
                office, Mitsubishi Electric offers you state-of-the-art
                technology that is quiet, simple to use, energy efficient and
                above all, reliable.
              </p>
            </div>
          </div>
        </Panel>

        <Panel>
          <div>
            <h3>Midea Split Systems</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              molestiae, beatae exercitationem pariatur iure nostrum. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Ipsa molestiae,
              beatae exercitationem pariatur iure nostrum.
            </p>
          </div>
          <p>panel 3</p>
        </Panel>
      </Tabs>
    </section>
  )
}

export default Tabs
