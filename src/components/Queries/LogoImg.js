import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const Logo = () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "images/Home-Comfort-Air-logo-650.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <div>
        <Image
          fluid={data.file.childImageSharp.fluid}
          alt="My Image"
          style={{ width: "200%", height: "200%" }}
        />
      </div>
    )}
  />
)

export default Logo