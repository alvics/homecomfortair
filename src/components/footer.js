import React from "react"
import StaticImage from "../components/StaticQueryImages"
// import { graphql, useStaticQuery } from "gatsby"
// import Image from "gatsby-image"

// const getImage = graphql`
//   {
//     fluid: file(relativePath: { eq: "sensitive-logo_40.png" }) {
//       childImageSharp {
//         fluid {
//           src
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `

const Footer = () => {
  //  const data = useStaticQuery(getImage)
  return (
    <>
      <div className="banner-blue">
        <div
          className="text-white grid-col-2"
          style={{
            margin: `0 auto`,
            maxWidth: 1440,
            padding: `0 1.0875rem 1.45rem`,
            color: `white`,
          }}
        >
          <div className="footer-img-wrapper flex">
            <StaticImage
              id="sensitive-img"
              filename="sensitive-logo.png"
              alt="ducted air image"
            />
            <div className="sensitive-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
              est veritatis provident possimus omnis veniam quia inventore
              tenetur soluta consequatur.
            </div>
          </div>

          <div className="footer-img-wrapper arctick flex">
            <StaticImage
              id="sensitive-img"
              filename="logo-arctick.png"
              alt="ducted air image"
            />
            <div className="h4 sensitive-heading">
              Home Comfort Air <br />A Sensitive Smart Choice
            </div>
          </div>
        </div>
      </div>

      <div className="banner-green"></div>

      <footer id="footer-main">
        <div className="grid-300">
          <section class="footer-1 text-center">
            <h4>Services 1</h4>
            <p>Our Service a</p>
            <p>Our Service b</p>
            <p>Our Service c</p>
            <p>Our Service d</p>
          </section>

          <section className="footer-2 text-center">
            <h4>Services 2</h4>
            <p>Our Service a</p>
            <p>Our Service b</p>
            <p>Our Service c</p>
            <p>Our Service d</p>
          </section>

          <section className="footer-3 text-center">
            <h4>Services 3</h4>
            <p>Our Service a</p>
            <p>Our Service b</p>
            <p>Our Service c</p>
            <p>Our Service d</p>
          </section>

          <section className="footer-4 text-center">
            <h4>Services 4</h4>
            <p>Our Service a</p>
            <p>Our Service b</p>
            <p>Our Service c</p>
            <p>Our Service d</p>
          </section>
        </div>
      </footer>
      <div className="text-center">
        <span style={{ fontSize: "12px" }}>
          {" "}
          © {new Date().getFullYear()}
          <a href="https://ewebdesigns.com.au">Powered by | eWebDesigns</a>
        </span>
      </div>
    </>
  )
}

export default Footer
