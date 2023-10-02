import { useState } from "react";
import { useStyles } from "../components/UserInterfaceCss";
import Divider from "@mui/material/Divider";
import Header from "../components/Header";
import Footer from "../components/Footer/Footer";
import SelectProductShowImages from "../components/SelectProductShowImages";
import SelectProductName from "../components/SelectProductName";
import WhyShopQuickshopee from "../components/WhyShopQuickshopee";
import SelectProductDetails from "../components/SelectProductDetails";
import { useLocation,useNavigate } from "react-router-dom";
export default function ShowProduct(props) {
    const classes = useStyles()
    const location=useLocation()
    const navigate=useNavigate()
    //console.log("location",location.state.categoryid)
    const [refresh,setRefresh ]=useState(false)
    var product=location.state.product
    const refreshPage=()=>{
    setRefresh(!refresh)

    }
    return (
        <div >
            <Header />

            <div className={classes.homeMainDiv}>

                <div style={{ width: '100%', display: 'flex' }}>
                    <div style={{ width: '50%' }}>
                        <SelectProductShowImages product={product} />
                        <Divider style={{ width: "98%", paddingTop: '5%', marginLeft: '0%' }} />
                        <SelectProductDetails   />

                    </div>
                    <Divider orientation="vertical" flexItem style={{ marginLeft: '2%', }}></Divider>
                    <div style={{ width: '50%' }}>
                        <SelectProductName product={product} refreshPage={refreshPage} />
                        <WhyShopQuickshopee />
                    </div>
                </div>

                <div style={{ width: "100%", marginBottom: 50 }}>
                    <Footer />
                </div>

            </div>
        </div>

    )
}