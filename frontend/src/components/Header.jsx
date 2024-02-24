import React from "react";
import {ReactNavbar} from "overlay-navbar";
import { MdAccountCircle } from 'react-icons/md';
import { MdSearch } from 'react-icons/md';
import { MdAddShoppingCart } from 'react-icons/md';


import logo1 from "../../src/images/logo1.png"
const Header =()=>{

    const options = {
        logo :logo1,
        logoWidth:"5vmax",
        navColor1:"#dadada",
        link1Text:"Home",
        link2Text:"Products",
        link3Text:"Contact",
        link4Text:"About",
        link1Url:"/",
        link2Url:"/products",
        link3Url:"/Contact",
        link4Url:"/About",
        link1Size:"1.3vmax",
        link1Color:"rgb(35,35,35,0.8)",
        nav1justifycontent:"flex-end",
        nav2justifycontent:"flex-end",
        nav3justifycontent:"flex-start",
        nav4justifycontent:"flex-start",
        link1ColorHover:"#eb4834",
        link1Margin:"1vmax",
       
        profileIcon: true,
        profileIconColor: 'rgba(35, 35, 35,0.8)',
profileIconUrl: '/login',
ProfileIconElement: MdAccountCircle,
searchIcon: true,
searchIconColor: 'rgba(35, 35, 35,0.8)',
SearchIconElement: MdSearch,
cartIcon: true,
cartIconColor: 'rgba(35, 35, 35,0.8)',
CartIconElement: MdAddShoppingCart,
profileIconColorHover: '#eb4034',
searchIconColorHover: '#eb4034',
cartIconColorHover: '#eb4034',
cartIconMargin: '1vmax',
         
        
    }
    return (
        <ReactNavbar {...options}/>
    )
} 

export default Header;