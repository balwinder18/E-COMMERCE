import React from 'react'
import { Link  } from 'react-router-dom';

import Reactstars from 'react-rating-stars-component'



  const Product = ({product}) => {
  
   const options={
      edit:false,
      color: "rgba(20,20,20,0.5)",
      activeColor:"tomato",
      size: window.innerwidth > 600 ? 20:25,
      isHalf:true,
      value:product.rating
   }
 
     return (
     <Link className='productcard' to={`/product/${product._id}`}>
        <img src={product.image[0].url}  alt="sampleimage"/>
        <p>{product.name}</p>
        <div>
            <Reactstars {...options}/> <span>{product.numofreviews} reviews</span>

        </div>
         <span>{`$${product.price}`}</span>
     </Link>
  )
}

export default Product;