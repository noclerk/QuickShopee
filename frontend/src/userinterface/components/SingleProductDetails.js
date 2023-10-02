import React,{createRef} from "react";
import Slider from "react-slick";
import { useMediaQuery,Paper, Button } from "@mui/material";
import {serverURL} from '../../administrator/services/FetchNodeServices'
 
import { useNavigate } from "react-router-dom";
export default function SingleProductDetails(props)
{ var item=props.item
   var navigate=useNavigate()
   const handleClick=(item)=>{
  
   navigate(props.url,{state:{product:item}})

   }
 
    

   


     
      return(<div onClick={()=>handleClick(item)}  style={{margin:2}}><Paper style={{cursor:'pointer', paddingBottom:10,display:'flex', flexDirection:'column', justifyContent:'center',alignItems:'center',width:180,height:250}} variant="outlined" elevation={2} >
        <div style={{padding:2,display:'flex',justifyContent:'center',alignItems:'center',width:178}}>
         <img src={`${serverURL}/images/${item.picture}` } width='70%'/>
         </div>
         <div style={{fontFamily:'Poppins',fontSize:14,fontWeight:700,margin:5,textAlign:'center',width:180}}>{item.productlistname}</div>
         <div style={{ display:'flex',flexDirection:'column',width:178,fontFamily:'Poppins',padding:2}} >
            <div style={{paddingLeft:10,fontSize:12}}>{item.weight}</div>
            <div style={{ display:'flex',flexDirection:'row',justifyContent:'space-between'}}>   
            <div style={{ display:'flex',flexDirection:'column'}}>   
            <div style={{paddingLeft:10,fontSize:12}}>{item.offer==0?<>&#8377; {item.rate}</>:<s>&#8377; {item.rate}</s>}</div>
            <div style={{paddingLeft:10,fontSize:12}}>{item.offer==0?<></>:<>&#8377; {item.offer}</>}</div>
            </div>
            <div style={{paddingRight:10}}>
                <Button variant="outlined">Add</Button>
            </div>
            </div>
         
         </div>
      </Paper></div>)

    
} 


