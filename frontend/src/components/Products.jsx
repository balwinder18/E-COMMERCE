import React, { Fragment, useEffect ,useState } from 'react';
import './Products.css'

import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../actions/productActions';
import Loader from './Loader';
import Product from './Product';
import { useParams } from 'react-router-dom';
import Pagination from 'react-js-pagination';

import { Typography , Slider} from '@mui/material';
import Metadata from './Metadata';

 const categories = [
   "laptop",
   "phones",
   "television",
   "pcs",
   "tablets"
 ]

const Products = () => {
    const dispatch  = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const [price, setPrice] = useState([0,25000]);
    const [category , setCategory] = useState("");
    

    const {products,loading,productscount,resultperpage } = useSelector((state)=>state.products);
     
    const {keyword} = useParams();
    const setcurrentpageno=(e)=>{
      setCurrentPage(e);
        
    }
    const pricehandler = (event , newprice)=>{
      setPrice(newprice);
    }
    useEffect(() => {
      
    dispatch(getProduct(keyword,currentPage,price,category));
    
     
    }, [dispatch,keyword,currentPage,price,category])
    
  return (
    <Fragment>
      {loading ? <Loader/>: (<Fragment>
        <Metadata title={"products - ECOMMERCE"}/>
        <h2 className="productsheading">
            Products
        </h2>
        <div className="products">
            {products && products.map((product)=>(
                    <Product product={product} key={product._id}/>
                ))}

                
            </div>


            <div className="filter">
              <Typography>Price</Typography>
              <Slider value={price} onChange={pricehandler} valueLabelDisplay='auto' aria-labelledby='range-slider' min={0} max={25000}/>
                 
             <Typography>Categories</Typography>
             <ul className="categorybox">
               {categories.map((category)=>(
                <li className="categoryitem" key={category} onClick={()=>setCategory(category)}>
                     {category}
                </li>
               ))}
             </ul>

            </div>



            <div className="paginationbox">
            {resultperpage < productscount && (
              <Pagination 
              activePage={currentPage}
               itemsCountPerPage={resultperpage} 
               totalItemsCount={productscount} 
               onChange={setcurrentpageno}
               nextPageText="next"
               prevPageText="prev"
               firstPageText="First"
               lastPageText="last"
               itemClass="page-item"
               linkClass="page-link"
               activeClass='pageItemActive'
               activeLinkClass='pageLinkActive'
             
               />
            )}
            </div>

      </Fragment>) }
    </Fragment>
  )
}

export default Products