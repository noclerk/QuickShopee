import { Button } from "@mui/material"
import Box from '@mui/material/Box';
import {useState,useEffect}  from "react"
import { postData } from "../../administrator/services/FetchNodeServices";
import PlusMinusComponent from "./PlusMinusComponenet";
import { useDispatch,useSelector } from "react-redux";


export default function SelectProductUnit({product,refreshPage}) {
   const [units,setUnits]=useState([])
   const [selectedProduct,setSelectedProduct]=useState(product)
   const cart=useSelector((state)=>state.products)
   const cartItems=Object.values(cart)
   const searchInCart=()=>{
   var searchProduct=cartItems.filter((item)=>{
     return item.productlistid==product.productlistid

   }) 
   console.log("Serach Product",searchProduct)
   if(searchProduct?.length!=0)
    setSelectedProduct(searchProduct[0])
   else
     { product['qty']=0
       setSelectedProduct(product)}
   }
   useEffect(()=>{
  searchInCart()

   },[])
   const dispatch=useDispatch()
   const fetchAllSubcategory=async()=>{
        var result=await postData('userinterface/fetch_all_products_by_productid',{productid:product.productid})
       
        setUnits(result.data)
    
      }
 useEffect(function(){
    fetchAllSubcategory()
 },[])
 const handleClick=(item,index)=>{
 item['qty']=0
  setSelectedProduct(item)
   
 }
    const fillAllUnits = () => {
        return units.map((item,index) => {
            return (
                <Box onClick={()=>handleClick(item,index)} style={{  cursor: 'pointer', width: '20%', borderRadius: 20,  border:item.productlistid==selectedProduct.productlistid?'3px solid #74b9ff':'1px solid #718093', marginLeft: '2%', marginTop: '2%' }}  >
                    {item.offer==0 ? <> </> : <>
                        <div style={{ borderBottomRightRadius:8,borderBottomLeftRadius:8, width: '50%', marginLeft: '25%', background: '#70a1ff' }}>
                            <div style={{  padding: 2, display: 'flex', justifyContent: 'center', fontSize: 12, fontFamily: 'Poppins', fontWeight: 'bold', color: 'white' }}>
                                {parseInt(((item.rate-item.offer)/item.rate)*100)} % OFF
                            </div>
                        </div>
                    </>}

                    {item.offer == 0 ? <>
                        <div style={{ marginTop: '15%' }}>

                            <div style={{ display: 'flex', justifyContent: 'center', fontSize: 13, fontFamily: 'Poppins', fontWeight: 700 }}>
                               {item.weight} 
                            </div>

                            {item.stock == 0 ? <>
                                <div style={{ display: 'flex', justifyContent: 'center', fontSize: 14, fontFamily: 'Poppins', color: '#7f8c8d' }}>
                                    Out Of Stock
                                </div>
                            </> : <>

                                <div style={{ display: 'flex', justifyContent: 'center', fontSize: 15 }}>

                                    <div style={{ fontFamily: 'Poppins' }} >
                                        {item.offer == 0 ? <> &#8377;{item.rate} </> : <s> &#8377;{item.rate}</s>}
                                    </div>

                                    <div style={{ marginLeft: '8%', fontFamily: 'Poppins', fontWeight: 'bold' }}>
                                        {item.offer == 0 ? <></> : <>  &#8377;{item.offer} </>}
                                    </div>

                                </div>
                            </>}
                        </div>
                    </> : <>
                        <div style={{ display: 'flex', justifyContent: 'center', fontSize: 13, fontFamily: 'Poppins', fontWeight: 700 }}>
                        {item.weight} 
                          
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'center', fontSize: 15 }}>

                            <div style={{ fontFamily: 'Poppins', }} >
                                {item.offer == 0 ? <> &#8377;{item.rate} </> : <s>&#8377;{item.rate}</s>}
                            </div>

                            <div style={{ marginLeft: '8%', fontFamily: 'Poppins', fontWeight: 'bold' }}>
                                {item.offer == 0 ? <></> : <>  &#8377;{item.offer} </>}
                            </div>

                        </div>
                    </>}

                </Box>
            )
        })
    }

    const handleQtyChange=(value)=>
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
      refreshPage()
     }
    return (
        <div style={{ width: '95%', padding: 5, marginLeft: '3%', fontFamily: 'Poppins', fontSize: 13 }}>
            <div style={{ fontWeight: 'bold', }}>
                Select Unit
            </div>
            <div style={{ display: 'flex',flexWrap:'wrap' }}>
                {fillAllUnits()}
            </div>
            <PlusMinusComponent qty={selectedProduct?.qty} onChange={handleQtyChange}/>

        </div>
    )
}