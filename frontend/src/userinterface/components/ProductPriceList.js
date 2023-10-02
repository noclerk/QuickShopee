import {Paper, Button} from "@mui/material";
import {React} from "react";
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
export default function ProductPriceList(){

    return(
        <div>
            <div style={{display:"flex", justifyContent:"end", marginBottom:"2.8%", marginTop:"-2%"}}>
                            <Button style={{color:"#ff3399", borderColor:"#ff3399"}} variant="outlined">Empty Cart</Button>
                        </div>
                        <Paper elevation={4} style={{cursor:"pointer", padding:"2%", paddingTop:"2%",paddingLeft:"4%", flexDirection:"row", display:"flex", width:"100%"}}>
                        <NewReleasesIcon style={{fontSize:35, color:"green"}}/>
                        <div style={{display:"flex", paddingLeft:"3%", paddingTop:"1%", paddingRight:"5%", fontSize:"110%", fontWeight:530}}>Avail Offer/Coupons</div>
                        <div><ArrowRightIcon style={{paddingTop:"15%", color:"#ff00e6", fontSize:"170%", display:"flex", alignSelf:"flex-end"}}/></div>
                    </Paper>
                    <Paper elevation={4} style={{width:"100%", display:"flex", padding:"3%",paddingTop:"3%", flexDirection:"column", alignItems:"center", marginTop:"3%"}}>
                        <div style={{width:"100%", display:"flex", justifyContent:"space-between", paddingBottom:"2%"}}>
                          <div style={{fontWeight:600}}>Item Total</div> 
                           <div style={{width:"14%", justifyContent:"space-between", display:"flex", flexDirection:"row", color:"grey", fontSize:"85%", fontWeight:"bold"}}><s>₹990 </s><div style={{fontWeight:600, color:"red"}}> ₹620</div> </div>
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
                           <div style={{width:"8%", justifyContent:"space-between", display:"flex", flexDirection:"row", fontSize:"130%", fontWeight:600}}>₹625</div>
                          
                        </div>
                    </Paper>
        </div>
    )
}