import React, { Fragment, useState } from 'react';
import './search.css'
import { useNavigate } from "react-router-dom"
import Metadata from './Metadata';

const Search = ({history}) => {
  const navigate = useNavigate();
  const [keyword,setKeyword] = useState("");

  const Searchsubmithandler = (e)=>{
    e.preventDefault();
    if(keyword.trim()){
      navigate(`/products/${keyword}`);

    } else {
       navigate("/products");
    }
  }

  return (
  <Fragment>
    <Metadata title={"serach - ECOMMERCE"}/>
    <form  className="searchbox" onSubmit={Searchsubmithandler}>
      <input type="text" placeholder="Search products" onChange={(e)=> setKeyword(e.target.value)} />
      <input type="Submit" value="Search" />
    </form>
  </Fragment>
  );
}

export default Search;