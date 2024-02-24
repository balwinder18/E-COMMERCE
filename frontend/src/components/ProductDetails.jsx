import React ,{Fragment, useEffect} from 'react'
import './productdetials.css'
import Carousel from 'react-material-ui-carousel'
import {useDispatch,useSelector} from 'react-redux';
import { getProductDetails } from '../actions/productActions';
import { useParams } from 'react-router-dom';
import Reactstars from 'react-rating-stars-component';
import Reviewcard from './Reviewcard';
import Loader from './Loader'
import Metadata from './Metadata';
 
 



const ProductDetails = ({match}) => {

  


   const {id} = useParams();

  const dispatch = useDispatch();
  const {product,loading} = useSelector((state)=> state.productDetails);
  

  useEffect(() => {
    
  
    dispatch(getProductDetails(id));
   
  
    
  }, [dispatch,id ]);



  const options={
    edit:false,
    color: "rgba(20,20,20,0.5)",
    activeColor:"tomato",
    size: window.innerwidth > 600 ? 20:25,
    isHalf:true,
    value:product.rating
 }
  


  return (
    
    <Fragment>
    {loading ? (<Loader/>):(
      <Fragment>
        <Metadata title={`${product.name}-ECOMMERCE`}/>
      <div className='productdetails'>
      <div>
       <Carousel>
         { product.image && product.image.map((item,i)=>(
              <img className='carouselimage' key={item.url} src={item.url} alt={`${i} slide`}/>
         ))}
      </Carousel>
      </div>
      <div>       
      <div className="detailsblock1">
         <h2>{product.name}</h2>
         <p>Product # {product._id}</p>
       </div>
       <div className="detailsblock2">
         <Reactstars {...options}/>
         <span>({product.numOfReviews} reviews)</span>
       </div>
       <div className="blockdetails3">
         <h1>{`₹${product.price}`}</h1>
         <div className="blockdetails31">
           <div className="blockdetails311">
             <button>-</button>
             <input type="number" value={1} />
             <button>+</button>
             
           </div>{" "}
           <button>ADD TO CART</button>
         </div>
         <p>
           Status:{" "}
           <b className={product.Stock>1 ? "redcolor" : "greencolor"}>
             {product.Stock<1 ? "outstock" : "inStock"}
           </b>
         </p>
       </div>   
         
         <div className="blockdetails4">
           description : <p>{product.description}</p>
         </div>
         <button>Submit review</button>
         </div>
      </div> 
       
       <h3 className="reviewheading">Reviews</h3>
       {product.reviews && product.reviews[0] ? (
          <div className="reviews">
           {product.reviews && product.reviews.map((review)=><Reviewcard review={review} />)}
          </div>
       ) :(
         <p className="noreviews">No review yet</p>
       )}
       
     </Fragment>
    )} 

    </Fragment>
  )
}

export default ProductDetails;