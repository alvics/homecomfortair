import React from "react"
import { Link } from "gatsby"
import { Tabs, Tab, Panel } from "@bumaga/tabs"

import Layout from "../components/ui/Layouts/layout"
import SEO from "../components/seo"

const MultiHeadSystemsPage = () => (
  <Layout>
    <SEO title="Split Systems A/C" />
    <h1>Hi from the Multi Head Systems</h1>
    <Tabs>
      <div>
        <Tab>
          <button>Tab 1</button>
        </Tab>
        <Tab>
          <button>Tab 2</button>
        </Tab>
        <Tab>
          <button>Tab 3</button>
        </Tab>
      </div>

      <Panel>
        <div>
          <h3>Heading 1</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            molestiae, beatae exercitationem pariatur iure nostrum.
          </p>
        </div>

        <p>Panel 1</p>
      </Panel>

      <Panel>
        <div>
          <h3>Heading 2</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            molestiae, beatae exercitationem pariatur iure nostrum. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Ipsa molestiae, beatae
            exercitationem pariatur iure nostrum.Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Ipsa molestiae, beatae exercitationem
            pariatur iure nostrum.Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ipsa molestiae, beatae exercitationem pariatur
            iure nostrum.
          </p>
        </div>
        <p>Panel 2</p>
      </Panel>

      <Panel>
        <div>
          <h3>Heading 3</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            molestiae, beatae exercitationem pariatur iure nostrum. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Ipsa molestiae, beatae
            exercitationem pariatur iure nostrum.
          </p>
        </div>
        <p>panel 3</p>
      </Panel>
    </Tabs>

    <p>Welcome to page 3</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default MultiHeadSystemsPage
