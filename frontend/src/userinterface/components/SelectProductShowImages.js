import { useState,createRef,useEffect } from "react";
import { postData, serverURL } from "../../administrator/services/FetchNodeServices";
import {  Paper, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


export default function SelectProductShowImages({product}) {
    const theme = useTheme()
    const [getImages,setImages]=useState([])
    const lg = useMediaQuery(theme.breakpoints.down('lg'))
    const md = useMediaQuery(theme.breakpoints.down('md'))
    const sm = useMediaQuery(theme.breakpoints.down('sm'))
    const matches = useMediaQuery(theme.breakpoints.up('md'))
    const sliderRef = createRef()
    const [image,setImage]=useState('')

    const fetchAllPictures=async()=>{
        var result=await postData('userinterface/fetch_all_multipleimages_by_productid',{productlistid:product.productlistid})
        var pic=result.data[0].pictures.split(",")
        setImages(pic )
        setImage(`${serverURL}/images/${pic[0]}`)


    }
   useEffect(function(){
  fetchAllPictures()

   },[])
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: sm ? 3 : md ? 3 : lg ? 4 : 5,
        slidesToScroll: 1,
        autoplay: false,
        autoplayspeed: '5000',
        arrows:false
    }

    const handleForwardIcon = () => {
        sliderRef.current.slickNext()
    }

    const handleBackIcon = () => {
        sliderRef.current.slickPrev()
    }

    const handleChangeImage=(item)=>{
     setImage(`${serverURL}/images/${item}`)
    } 
    const showImages = () => {
        return getImages.map((item) => {
            return (
                <div onClick={()=>handleChangeImage(item)} style={{ margin: 1 }}>
                    <Paper style={{ width: 60, height: 60, padding: 5 }} variant='outlined' elevation={3}>
                        <img src={`${serverURL}/images/${item}`} width='100%' />
                    </Paper>
                </div>
            )
        })
    }


    return (
        <div>
            <div style={{ width: '40%', marginTop: '10%', marginLeft: '25%' }}>
                <img src={image} width='100%' />
            </div>


            <div style={{ width: '70%', marginTop: '10%', marginLeft: '6%', display: 'flex', }}>
                <div style={{ display: 'flex', width: '92%' }}>
                    <div style={{ width: '6%', marginTop: '3%', marginRight: 10 }}>
                        {matches ? <> <div style={{ top: '45%', left: '1%', color: '#fff', zIndex: 1, width: 40, height: 40, borderRadius: 20, background: '#ecf0f1', opacity: 0.7, display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
                            <ArrowBackIosNewIcon style={{ padding: 10, color: '#000' }} onClick={handleBackIcon} />
                        </div></> : <></>}
                    </div>
                    <div style={{ width: '95%',marginLeft:8 }}>
                        <Slider {...settings} ref={sliderRef}>
                            {showImages()}
                        </Slider>
                    </div>
                </div>

                <div style={{ width: '6%', marginTop: '3%', paddingLeft: 15, }} >

                    {matches ? <> <div style={{ color: '#fff', width: 40, height: 40, borderRadius: 20, background: '#ecf0f1', opacity: 0.7, }}>
                        <ArrowForwardIosIcon style={{ padding: 10, color: '#000' }} onClick={handleForwardIcon} />
                    </div></> : <></>}
                </div>
            </div>


        </div>
    )
}