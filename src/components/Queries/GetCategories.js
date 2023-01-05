// import { StaticQuery, graphql, Link } from "gatsby"

// const ProductsList = () => (
//   <StaticQuery
//     query={graphql`
//       {
//      allStrapiProduct {
//       edges {
//         node {
//           room_sizes {
//             id
//             size
//           }
//           brand
//         }
//       }
//     }
//   }
// `}

//     render={data => (
      
//       <div>
//         {data.allStrapiProduct.edges.map(({ node }) => (
//           <div key={node.id}>
//             <h3>{node.room_size.brand}</h3>
//             <p>Room size: {node.room_sizes.size}</p>
//             <Link to={`/products/${node.id}`}>View product</Link>
//           </div>
//         ))}
//       </div>
//     )}
//   />
// )

// export default ProductsList

