
import {useState,useEffect} from "react"
import Header from "../components/Header"
import BannerComponent from "../components/BannerComponent"
import CircleScrollComponent from "../components/CircleScrollComponent"
import ProductComponent from "../components/ProductComponent"
import DealSlider from "../components/DealSlider"
import Footer from "../components/Footer/Footer"
import { postData,getData } from "../../administrator/services/FetchNodeServices"
export default function Home(props)
{  const [banners,setBanners]=useState([])
  
  const [productsMilk,setProductsMilk]=useState([])
  const [trending,setTrending]=useState([])
  const [category,setCategory]=useState([])
 
  const fetchAllBanners=async()=>{
    var result=await getData('userinterface/fetch_all_banners')
    var images=result.data.banners.split(",")
    setBanners(images)

  }
  
  const fetchAllCategories=async(status)=>{
    var result=await postData('userinterface/fetch_all_category',{status:status})
    if(status=='Continue')
    setCategory(result.data)
    else if(status=="Trending")
    setTrending(result.data)

  }

  const fetchProducts=async(subcategoryname)=>{
    var result=await postData('userinterface/fetch_products_by_subcategory',{subcategoryname:subcategoryname})
    
    setProductsMilk(result.data)

  }
  useEffect(function(){
    fetchAllBanners()
    fetchAllCategories('Continue')
    fetchAllCategories('Trending')
    fetchProducts('Milk, Bread & Butter')
    


  },[])
    return(
        <div  >
          <Header />  
          <div style={{marginTop:'1%',display:'flex',marginLeft:'3%',marginRight:'3%',alignItems:'center',flexDirection:'column'}}>
          
           
          <div style={{width:'100%'}}>
          <BannerComponent images={banners}/>
          </div>
          <div style={{width:'100%'}}>
          <DealSlider />
          </div>
          <div style={{width:'100%',marginTop:20}}>
          <CircleScrollComponent category={category} title="Popular Categories"/>
          </div>
          <div style={{width:'100%',marginTop:20}}>
          <ProductComponent title="Milk, Bread & Butter" products={productsMilk}/>
          </div>
          <div style={{width:'100%',marginTop:20}}>
          <CircleScrollComponent category={trending} title="Trending Products"/>
          </div>

          <div style={{width:'100%',marginTop:20}}>
          <Footer/>
          </div>
         
                   

          </div>
        </div>
    )
}
