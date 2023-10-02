import { Dialog, DialogTitle, DialogContent, DialogContentText, Button} from "@mui/material";
import {FormControl, OutlinedInput, InputAdornment} from "@mui/material";
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import { useEffect, useState } from "react";
import { postData } from "../../../administrator/services/FetchNodeServices";
import OtpPopUp from "./OtpPopUp";
export default function PhoneNumberPopUp(props){
    const [status, setStatus]=useState(false)
    const [mobileno,setMobileno]=useState('')
    const [otpGen,setOtpGen]=useState('')
    
    const generateOtp=async()=>{
      var otp=parseInt(Math.random()*8999)+1000
      var result=await postData('sms/sendotp',{otp:otp,mobileno:mobileno})
      setOtpGen(otp)
      alert(otp)
 
    } 
 
    const handleClick=()=>{
      generateOtp()
      setStatus(true)
   
    }
    const [getDOpen, setDOpen]=useState(props.status)
    useEffect(function(){
    
     setDOpen(props.status)
    },[props])
    return (
        <div>
          <Dialog
          fullWidth
            open={getDOpen}
            keepMounted
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle style={{color:"grey", display:"flex", alignItems:"center", justifyContent:"center", background:"#ffff"}}>Phone Number Verification</DialogTitle>
            <DialogContent style={{background:"#e6e6f0"}}>
              <DialogContentText style={{display:"flex", marginTop:"7%", justifyContent:"center", fontFamily:"Poppins", fontWeight:600}}>
                Enter your phone number to Login/Sign up
              </DialogContentText>
              <FormControl style={{ marginTop:"6%", justifyContent:"center", display:"flex", alignItems:"center"}}>
          <OutlinedInput onChange={(event)=>setMobileno(event.target.value)}
           style={{width:"60%", background:"#fff"}} startAdornment={<InputAdornment position="start"><PhoneIphoneIcon/>+91</InputAdornment>}
          />
        </FormControl>
                <div style={{display:"flex", justifyContent:"center", alignItems:"center", marginTop:"3%"}}>
                <Button onClick={handleClick} variant="contained" style={{background:"#009c00", width:"60%"}} >Next</Button>
                </div>
                <div style={{display:"flex", justifyContent:"center", color:"grey", fontWeight:"bold", marginTop:"3%"}}>By continuing, you agree to our</div>
                <div style={{justifyContent:"center", fontWeight:600, display:"flex", marginBottom:"4%", marginTop:"2%", color:"green", cursor:"pointer"}}><u>Terms of service</u> <div style={{marginLeft:"3%"}}><u>Privacy policy</u></div></div>
            </DialogContent>
          </Dialog>
         <OtpPopUp setUserAddress={props.setUserAddress} userAddress={props.userAddress} otp={otpGen} setStatus={props.setStatus}  setBtnTitle={props.setBtnTitle}   mobileno={mobileno} status={status}     />
        </div>
      );
}