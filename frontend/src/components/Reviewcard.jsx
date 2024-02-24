import React from 'react'
import Reactstars from 'react-rating-stars-component'
import profile from '../images/profile.jpg'

const Reviewcard = ({review}) => {
    const options={
        edit:false,
        color: "rgba(20,20,20,0.5)",
        activeColor:"tomato",
        size: window.innerwidth > 600 ? 20:25,
        isHalf:true,
        value:review.rating
     }

  return (
   <div className="reviewcard">
    <img src={profile} alt="user"  />
    <p>{review.name}</p>
    <Reactstars {...options}/>
    <span>{review.comment}</span>
   </div>
    
  )
}

export default Reviewcard;