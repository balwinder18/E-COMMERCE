import Header from './components/Header'
import './App.css';
import { BrowserRouter as Router,Routes ,Route} from 'react-router-dom';
import React from 'react';
import webfont from "webfontloader";
import Footer from './components/Footer';
import Home from './components/Home.jsx';
import Products from './components/Products.jsx';
import Search from './components/Search.jsx';
import Account from './components/Account.jsx'


import ProductDetails from './components/ProductDetails.jsx'
import LoginSignup from './components/LoginSignup.jsx';
function App() {
React.useEffect(()=>{
    webfont.load({
        google:{
            families:["Roboto", "Droid Sans" ,"Chilanka"]
        }
    })
},[])

    return(
        
       <Router>
           
           <Header/>
           <Routes >
           <Route  path="/" Component={Home} />
           <Route  path="/product/:id" Component={ProductDetails} />
           <Route  path="/products" Component={Products} />
           <Route path="/products/:keyword" Component={Products} />
           
           <Route  path="/search" Component={Search} />
           <Route  path="/login" Component={LoginSignup} />
           <Route  path="/account" Component={Account} />
           </Routes>
          <Footer/>
       </Router>
       
    );
    
    
}

export default App;
