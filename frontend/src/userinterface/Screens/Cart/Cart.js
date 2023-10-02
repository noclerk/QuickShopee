import React,{useState} from "react";
import {serverURL} from '../../../administrator/services/FetchNodeServices'
import './Cart.css'
import { useTheme } from "@mui/material/styles";
import { List, useMediaQuery,ListItem,ListItemButton,ListItemText } from "@mui/material";
import { Grid} from "@mui/material"


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowBackIosOutlined,ArrowForwardIosOutlined,LocalOfferOutlined,ArrowRightOutlined } from "@mui/icons-material";
import { createRef } from "react";
import CartDelivery from "../../components/miniComponents/CartDelivery/CartDelivery";
import CartProduct from '../../components/miniComponents/CartProduct/CartProduct'
import CartOffers from "../../components/miniComponents/CartOffers/CartOffers";
import CartBill from "../../components/miniComponents/CartBill/CartBill";
import CartLocation from "../../components/miniComponents/CartLocation/CartLocation";
import Header from "../../components/Header";
import ProductPriceList from "../../components/ProductPriceList"
import { useSelector } from "react-redux";
export default function Cart(){
  const [refresh,setRefresh]=useState(false)
  const [userAddress,setUserAddress]=useState([])
  const [btnTitle,setBtnTitle]=useState("Go")
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down('md'));
  const cart=useSelector((state)=>state.products)
  const cartData=Object.values(cart)
  
  const pageRefresh=()=>{
  setRefresh(!refresh)

  }
  
  return(
      <div>
           <Header />
      
        <div className="cart__container">
          
            <div className="cart__top">
                <div>
                <div style={{fontWeight:'bold',fontSize:18}}>Cart({cartData.length} Items)</div>
                </div>
                <div>
               <button className="regularbutton1">Empty</button>
                </div>
            </div>
         <Grid container spacing={3}>
            <Grid item xs={sm?12:6}>
                <div className="cart__left">
                <CartProduct cartData={cartData} pageRefresh={pageRefresh} />
                <CartDelivery/>
                </div>
            </Grid>
            <Grid item xs={sm?12:6}>
                <div className="cart__right">
                     
                     
                      <CartOffers/>

                      <CartBill pageRefresh={pageRefresh}/>

                      <CartLocation btnTitle={btnTitle} setBtnTitle={setBtnTitle} setUserAddress={setUserAddress} userAddress={userAddress}/>


                 
                

                </div>
            </Grid>


         </Grid>
        </div>
        </div>
    )
}

