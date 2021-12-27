// import React from "react"
// import Product from "../Products/Product"
// import { graphql, useStaticQuery  } from "gatsby"

// const query = graphql`
//   {
//     allStrapiProduct {
//       nodes {
//         categories {
//           brand
//         }
//       }
//     }
//   }
// `

//   const {
//     allStrapiProduct: { nodes: categories },
//   } = useStaticQuery(query)

//     return (
//     <section>
//       <h1>Hello from Starpi categories, Categories!</h1>
//       <div className="product-grid midea">
//         {categories.map(product => {
//           console.log(product)
//           return <Product key={product.id} {...product} />
//         })}
//       </div>
//     </section>
//   )



// export default GetCategories