import React,{createRef} from "react";
import Slider from "react-slick";
import {serverURL} from '../../administrator/services/FetchNodeServices'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';
import { useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';
export default function BannerComponent(props)
{  var sliderRef=createRef()
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,

      };
 
const showImages=()=>{

    return props.images.map((item)=>{
      return(<div>
         <img src={`${serverURL}/images/${item}` } width='100%'/>
      </div>)

    })
}
const handleBackClick=()=>{
  sliderRef.current.slickPrev()
}

const handleForwardClick=()=>{
    sliderRef.current.slickNext()

}

    return(
 <div style={{position:'relative'}}>
{matches?<><div style={{position:'absolute',top:'45%',left:'1%',zIndex:1,width:40,height:40,borderRadius:20,background:'#fff',opacity:0.7,display:'flex',alignItems:'center',justifyContent:'center' }}>
 <ArrowBackIosNewIcon style={{color:'#000'}} onClick={handleBackClick} />   
 </div></>:<></>}
<Slider {...settings} ref={sliderRef}>
    {showImages()}  
</Slider>

{matches?<><div style={{position:'absolute',top:'45%',right:'1%',zIndex:1,width:40,height:40,borderRadius:20,background:'#fff',opacity:0.7,display:'flex',alignItems:'center',justifyContent:'center' }}>
 <ArrowForwardIos style={{color:'#000'}} onClick={handleForwardClick} />   
 </div></>:<></>}   
 </div>   
    )
}