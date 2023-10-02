import {useState,useEffect} from "react"
import Header from "../components/Header"
import { Grid } from "@mui/material"
import CategoryListComponent from "../components/CategoryListComponent"
 
import SingleProductDetails from "../components/SingleProductDetails"
 
import Footer from "../components/Footer/Footer"
import { postData,getData } from "../../administrator/services/FetchNodeServices"
import { useNavigate,useLocation } from "react-router-dom"
export default function ProductViewWithCategory(props)
{  const [subCategory,setSubcategory]=useState([])
  const [subCategoryId,setSubcategoryId]=useState('')
  const [subCategoryName,setSubcategoryName]=useState('')
  const [productList,setProductList]=useState([])
   const location=useLocation()
   const navigate=useNavigate()
   //console.log("location",location.state.categoryid)

 
  const fetchAllSubcategory=async()=>{
    var result=await postData('userinterface/fetch_all_subcategory_by_categoryid',{categoryid:location.state.categoryid})
   
    setSubcategory(result.data)

  }

  const fetchAllProductsSubcategory=async(scid)=>{
    var result=await postData('userinterface/fetch_all_products_by_subcategory',{subcategoryid:scid})
    console.log(result.data) 
    setProductList(result.data)

  }
  const fetchAllProductByCategory=async()=>{
    var result=await postData('userinterface/fetch_all_products_by_categoryid',{categoryid:location.state.categoryid})
    console.log(result.data) 
    setProductList(result.data)

  }
 useEffect(function(){
  fetchAllProductByCategory()

  },[])
  const getSubCategoryId=(scid,sname)=>{
    setSubcategoryName(sname)
    setSubcategoryId(scid)
    fetchAllProductsSubcategory(scid)
  }
   
 
  useEffect(function(){
    
    fetchAllSubcategory()


  },[])

const listofProducts=()=>{
  return productList.map((item)=>{
   
    return <SingleProductDetails item={item} url={"/selectproduct"}/>

  })

}

    return(
        <div  >
          <Header />  
          <div style={{marginTop:'1%',display:'flex',marginLeft:'3%',marginRight:'3%',alignItems:'center',flexDirection:'column'}}>
          <Grid container spacing={2}>
            <Grid item xs={2}>
             <CategoryListComponent data={subCategory} getSubCategoryId={getSubCategoryId} />
            </Grid>
            <Grid item xs={10}>
            <div style={{padding:5,fontFamily:'Poppins',fontSize:24,fontWeight:'bold'}}>
              {subCategoryName} ({productList.length}) Items
              </div>  
            <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
            {listofProducts()} 
            </div>
            </Grid>
            </Grid>  
           
          
          <div style={{width:'100%',marginTop:20}}>
          <Footer/>
          </div>
         
                   

          </div>
        </div>
    )
}
