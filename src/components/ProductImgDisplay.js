// Here's an example of a Gatsby component that displays a large product image with smaller images of the product under the large image. 
// And when a user clicks on one of the smaller images, that image is displayed in the large image:


import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const ProductImages = () => {
    const [activeImage, setActiveImage] = useState(null)
    const data = useStaticQuery(graphql`
        query {
            allFile(filter: {
                sourceInstanceName: {eq: "images"}, 
                relativeDirectory: {eq: "products/brands/Haier"}
            }) {
                edges {
                    node {
                        childImageSharp {
                            fixed(width: 150, height: 150) {
                                ...GatsbyImageSharpFixed
                            }
                            fluid(maxWidth: 800) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
        }
    `)

    return (
        <div className="product-images-container">
            <div className="product-large-image">
                {activeImage ? (
                    <Img fluid={activeImage.childImageSharp.fluid} alt="Large Product Image" />
                ) : (
                    <Img fluid={data.allFile.edges[0].node.childImageSharp.fluid} alt="Large Product Image" />
                )}
            </div>
            <div className="product-small-images">
                {data.allFile.edges.map((edge, index) => (
                    <div key={index} className="product-small-image">
                        <Img fixed={edge.node.childImageSharp.fixed} onClick={() => setActiveImage(edge.node)}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductImages
