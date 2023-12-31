import React,{createRef} from "react";
import Slider from "react-slick";
import { useMediaQuery,Paper, Button } from "@mui/material";
import {serverURL} from '../../administrator/services/FetchNodeServices'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';
import { useTheme } from '@mui/material/styles';
export default function ProductComponent(props)
{  
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down('sm'));
  const lg = useMediaQuery(theme.breakpoints.down('lg'));
  const md = useMediaQuery(theme.breakpoints.down('md'));
  const xs = useMediaQuery(theme.breakpoints.down('xs'));
  var sliderRef=createRef()
      var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: xs?1:sm?2:md?3:lg?4:7,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,

      };

const showImages=()=>{

    return props.products.map((item)=>{
      return(<div style={{margin:2}}><Paper style={{paddingBottom:10,display:'flex', flexDirection:'column', justifyContent:'center',alignItems:'center',width:180,height:250}} variant="outlined" elevation={2} >
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

    })
}
const handleBackClick=()=>{
  sliderRef.current.slickPrev()
}

const handleForwardClick=()=>{
    sliderRef.current.slickNext()

}

    return(
 <div>
 <div style={{padding:5,display:'flex',justifyContent:'space-between',alignItems:'center'}}>
 <div style={{fontFamily:'Poppins',fontSize:!lg?22:16,fontWeight:'bold',marginBottom:10}}>
 {props.title}
 </div>
 {!lg?<><div style={{display:'flex',flexDirection:'row',width:'4%'}}>
 <div>
  <ArrowBackIosNewIcon style={{color:'#000'}} onClick={handleBackClick} />   
 </div>
 <div>
 <ArrowForwardIos style={{color:'#000'}} onClick={handleForwardClick} />   
 </div>
 </div> </>:<></>}  
</div>

<Slider {...settings} ref={sliderRef} >
    {showImages()}  
</Slider>

 </div>   
    )
}