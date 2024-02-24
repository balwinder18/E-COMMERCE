import React , {useEffect} from 'react'
import '../components/Home.css'
import Product from './Product.jsx' 
import Metadata from './Metadata.jsx'
import { getProduct } from '../actions/productActions.js'
import { useDispatch, useSelector } from 'react-redux';
import Loader from './Loader.jsx'




const Home = () => {
  const dispatch = useDispatch();
  const {loading,products,error} = useSelector(state=>state.products)

  useEffect(() => {
    if(error) {
      return alert.error(error);
    }
    dispatch(getProduct())
  }, [dispatch,error])
  
  return (
    <>
   {loading ? (<Loader/>) : 
   (<>
   <Metadata title="Ecommerce"/>
    <div id="banner">
     <p>Welcome to our app</p>
     <h1>Find amazing products</h1>

     <a href="#container">
         <button>scroll </button>
     </a>
    </div>

    <h2 className="homeheading">Featured Products</h2>

    <div className="container" id="container">
        {products &&products.map(product=>(
         <Product product={product} />
        )) }
    </div>
</>)}
</>
  )
}

export default Home