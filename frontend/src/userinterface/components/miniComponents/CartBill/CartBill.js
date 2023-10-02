import React,{useEffect} from "react";
import './CartBill.css'
import { Paper } from "@mui/material";
import { useSelector } from "react-redux";

export default function CartBill(props){
 useEffect(function(){
   props.pageRefresh() 

 })

  const cart=useSelector((state)=>state.products)
  const cartData=Object.values(cart)
  var totalOffer=cartData.reduce((p1,p2)=>{
   return p1+(p2.offer*p2.qty)
  },0)
  var totalAmount=cartData.reduce((p1,p2)=>{
    return p1+(p2.rate*p2.qty)
   },0)
   var totalSavings=totalAmount-totalOffer
   
    var cartitems = [
        {id:1,image:'Dairy.png',name:'Amul Milk',quantity:'100 ml',price:'100',dprice:'90'},
        {id:2,image:'Rice.png',name:'New Basmati rice',quantity:'10kg',price:'900',dprice:'870'},
        {id:3,image:'Edible oil.png',name:"Fresh coconut oil",quantity:'100 ml',price:'100',dprice:'88'},

      ]




    return(
      <Paper  elevation={2} style={{width:"100%", display:"flex", padding:"3%",paddingTop:"3%", flexDirection:"column", alignItems:"center", marginTop:"3%"}}>
      <div style={{width:"100%", display:"flex", justifyContent:"space-between", paddingBottom:"2%"}}>
        <div style={{fontWeight:600}}>Item Total</div> 
         <div style={{width:"14%", justifyContent:"space-between", display:"flex", flexDirection:"row", color:"grey", fontSize:"85%", fontWeight:"bold"}}><s>₹{totalAmount}  </s><div style={{fontWeight:600, color:"red"}}>₹{totalOffer}</div> </div>
      </div>
      <div style={{width:"100%", display:"flex", justifyContent:"space-between", paddingBottom:"2%"}}>
        <div style={{fontWeight:400, fontSize:"90%",color:"grey", display:"flex", flexDirection:"row"}}>Handling Charges <div style={{color:"#2ee317", fontWeight:600}}>(₹15 saved)</div> </div> 
         <div style={{width:"14%", justifyContent:"space-between", display:"flex", flexDirection:"row", color:"grey", fontSize:"85%", fontWeight:"bold"}}><s>₹20 </s><div style={{fontWeight:600, color:"#2ee317"}}> ₹5</div> </div>
      </div>
      <div style={{width:"100%", display:"flex", justifyContent:"space-between", paddingBottom:"2%"}}>
        <div style={{fontWeight:400, fontSize:"90%", display:"flex",color:"grey", flexDirection:"row"}}>Delivery Fee <div style={{color:"#2ee317", fontWeight:600}}>(₹35 saved)</div> </div> 
         <div style={{width:"14%", justifyContent:"space-between", display:"flex", flexDirection:"row", color:"grey", fontSize:"85%", fontWeight:"bold"}}><s>₹35 </s><div style={{fontWeight:600, color:"#2ee317"}}> ₹0</div> </div>
        
      </div>
      <div style={{width:"100%", display:"flex", justifyContent:"space-between", paddingBottom:"2%"}}>
        <div style={{fontWeight:500, fontSize:"130%", display:"flex", flexDirection:"row"}}>To Pay </div> 
         <div style={{width:"8%", justifyContent:"space-between", display:"flex", flexDirection:"row", fontSize:"130%", fontWeight:600}}>₹{totalOffer+5}</div>
        
      </div>
  </Paper>

    )
}