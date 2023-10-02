import React, { useState } from "react";
import './CartProduct.css'
import { serverURL } from "../../../../administrator/services/FetchNodeServices";
import PlusMinusComponent from "../../PlusMinusComponenet";
import { useDispatch } from "react-redux";
export default function CartProduct({cartData,pageRefresh}){
     
     var dispatch=useDispatch()
      const handleQtyChange=(selectedProduct,value)=>
      {  var product=selectedProduct  
          
        if(value>=1)
       {
       
       
       product['qty']=value
       
       dispatch({type:'ADD_PRODUCT',payload:[product.productlistid,product]})
       }
       else
       { product['qty']=0
         dispatch({type:'DELETE_PRODUCT',payload:[product.productlistid,product]})
       }
       pageRefresh()
      }
   

    return(
        <div>
              <div className="cart__left_items" id="cartitems"> 
                   
                   {
                     cartData.map((item)=>{
                        console.log("image fetched")
                        return(
                            <div className="cart__item">
                                <div className="cart__itemcontent">
                                <div className="cart__itemcontent_img">
                                <img src={`${serverURL}/images/${item.picture}`} width='100%'/>
                                </div>
                                <div className="cart__itemcontent_price" >
                                    <div>{item.productlistname}</div>
                                    {item.offer>0?<div>&#8377;{item.offer}/{item.weight}</div>:<div>&#8377;{item.offer}/{item.weight}</div>}
                                    <div>{item.weight}</div>
                                    {item.offer>0?<div style={{display:'flex',justifyContent:'center',alignItems:'center'}}><s>&#8377; {item.rate*item.qty}</s><div style={{paddingLeft:'4px'}}>&#8377; {item.offer*item.qty}</div></div>:
                                      <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}><div>&#8377; {item.rate*item.qty}</div></div>}
                                </div>

                                </div>
                                <div>
                                <PlusMinusComponent qty={item?.qty} 
                                onChange={(value)=>handleQtyChange(item,value)}
                                />
  
                                </div>

                            </div>
                        )
                     })
                   }

                 </div>
        </div>
    )
}