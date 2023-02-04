import React from 'react'

import { graphql, useStaticQuery } from 'gatsby';




const GoogleReviews = () => {

    const data = useStaticQuery(graphql`
    query {
      allGoogleReview {
        edges {
          node {
            author_name
            id
            rating
            text
            relative_time_description
            language
            position
            profile_photo_url
          }
        }
      }
    }
  `)

  return (

      
        <div className="container">
  {/* <h5><a href="https://g.page/r/CRG91xqs7wZTEAg/review" target="_blank">Write a review</a></h5> */}
       <h5 className='fst-italic'>From our customers</h5>
         {data.allGoogleReview.edges.map(review => (
        <div className="row">
      
        <div className="col col-4" key={review.node.id}>
          <p style={{textAlign: "left", paddingLeft:15,}}>
           <img style={{width: 40 }} src={review.node.profile_photo_url} alt={review.node.author_name} />
            </p>

            <p style={{textAlign: "left", marginTop: -20, fontSize:15}}>
             <strong style={{ marginTop: -35}}>{review.node.author_name}</strong> 
            </p>

            <div  style={{ marginTop: -25}}>
              <p className='rating' style={{width: 70, display:'block',height:20 }}></p>
            </div>

            <p style={{marginTop:-30}} className='mb-2'><small className="text-muted" >{review.node.relative_time_description}</small></p>
         
           <small>
           <p className="mb-2" style={{textAlign: "left", marginTop: -5}}>
             <span style={{ color: `#5B5B66`, fontWeight:'bold'}}> Positive:</span>  <small className="text-muted">Professionalism, Punctuality, Quality, Responsiveness, Value</small>
           </p>
            
            
          </small>
      
          <p style={{ fontSize:14, color: "#15141A"}}>
             {review.node.text}
          </p>
           <small>
          <p  style={{ marginTop:-15}}>
         
             <span style={{ color: `#5B5B66`, fontWeight:'bold', marginTop:-15}}> Service:</span> <small className="text-muted"> Install AC</small>
          </p>
          </small>
        
        </div>
        
        </div>
            ))}
        
    
    </div>
  );
};

export default GoogleReviews