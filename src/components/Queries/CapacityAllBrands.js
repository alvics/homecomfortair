// import React from "react"
// import { graphql } from "gatsby"

// const CapacityAllBrands = ({
//   data: {
//     getBrands: {
//       nodes: { capacity, heating, brand },
//     },
//   },
// }) => {
//   render(
//     <div>
//       <thead>
//         <tr>
//           <th scope="col">Air Conditioner</th>
//           <th scope="col">Capacity</th>
//           <th scope="col">Application Area</th>
//           <th scope="col">Size Room</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <th scope="row">{brand} .?brand</th>
//           <td>{capacity}</td>
//           <td>{capacity}</td>
//           <td>{capacity}</td>
//         </tr>
//         <tr>
//           <th scope="row">{brand} ?brand</th>
//           <td>{heating}</td>
//           <td>{heating}</td>
//           <td>{heating}</td>
//         </tr>
//         <tr>
//           <th scope="row">{brand} ?brand</th>
//           <td colspan="2">Larry the Bird</td>
//           <td>@twitter</td>
//         </tr>
//       </tbody>
//     </div>
//   )
// }

// export const query = graphql`
//   {
//     getBrands: allStrapiProduct(filter: { brand: { eq: $brand } }) {
//       nodes {
//         capacity
//         heating
//         brand
//       }
//     }
//   }
// `

// export default CapacityAllBrands
