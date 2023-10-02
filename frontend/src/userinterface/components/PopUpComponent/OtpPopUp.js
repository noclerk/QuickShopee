import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, TextField } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useEffect, useState } from "react";
import AddressPopUp from "./AddressPopUp";
import {postData} from "../../../administrator/services/FetchNodeServices"
import { useDispatch } from "react-redux";
export default function OtpPopUp(props){
    var dispatch=useDispatch() 
    const [status, setStatus]=useState(false)
    const [getInputOtp,setInputOtp]=useState('')
    const [getDOpen, setDOpen]=useState(props.status)
    const [handleDialog,setHandleDilog]=useState(true)
  
    const handleClick=async()=>{
      if(parseInt(props.otp)==parseInt(getInputOtp))
      { var mobilenostatus=await postData('userinterface/check_mobile_no',{mobileno:props.mobileno})
        if(mobilenostatus.status)   
        {
             var addressstatus=await postData('userinterface/check_address_by_mobile_no',{mobileno:props.mobileno})
             if(addressstatus.status)
              { setDOpen(false) 
                setStatus(false)
                //phonenumber ka status
                props.setStatus(false)
                setHandleDilog(false)
                props.setBtnTitle('Proceed For Payment')
                props.setUserAddress(addressstatus.data)
                dispatch({type:'ADD_USER',payload:[addressstatus.data[0]]})

              }
               
              else
              {  
                setStatus(true)}
              
              }
      
      else
      {
        setStatus(true)
      }

      }
      else
        alert('Invalid Otp')  
    }
   
    useEffect(function(){
       if(handleDialog)
       setDOpen(props.status)
    },[props])
    const checkOtp=(event)=>{
      var inputOtp=''
     if((document.getElementById('first').value).length==1)
      {
        document.getElementById('second').focus()
        inputOtp+=document.getElementById('first').value
      }
      if((document.getElementById('second').value).length==1)
      {
        document.getElementById('third').focus()
        inputOtp+=document.getElementById('second').value
      }
    if((document.getElementById('third').value).length==1)
      {
        document.getElementById('fourth').focus()
        inputOtp+=document.getElementById('third').value
      }
      if((document.getElementById('fourth').value).length==1)
      {
        inputOtp+=document.getElementById('fourth').value
        setInputOtp(inputOtp)
      }

    }  
    return (
        <div>
          <Dialog
          fullWidth
            open={getDOpen}
            keepMounted
            aria-describedby="alert-dialog-slide-description"
          >
            <div style={{cursor:"pointer", display:"flex", justifyContent:"start", alignItems:"center", color:"green", padding:"1.5%", fontWeight:"bolder"}}><ArrowBackIosIcon style={{paddingTop:".3%"}} fontSize="18%"/>Back</div>
            <DialogTitle style={{color:"grey", display:"flex", alignItems:"center", justifyContent:"center", background:"#ffff"}}>Phone Number Verification</DialogTitle>
            <DialogContent style={{background:"#e6e6f0"}}>
              <DialogContentText style={{display:"flex", marginTop:"7%", justifyContent:"center", fontFamily:"Poppins", fontWeight:600}}>
                Enter 4 digit code sent to your phone {`+91XXXXXX${props.mobileno.substring(6)}`}
              </DialogContentText>
              <div style={{display:"flex", marginTop:"4%", marginLeft:"15%", alignItems:"center", justifyContent:"center", width:"70%"}}>
              <TextField id="first" onChange={(event)=>checkOtp(event)} style={{width:"15%", marginRight:"5%"}}></TextField>
              <TextField id="second" onChange={(event)=>checkOtp(event)} style={{width:"15%", marginRight:"5%"}}></TextField>
              <TextField id="third" onChange={(event)=>checkOtp(event)} style={{width:"15%", marginRight:"5%"}}></TextField>
              <TextField id="fourth" onChange={(event)=>checkOtp(event)} style={{width:"15%"}}></TextField>
              </div>
                <div style={{display:"flex", justifyContent:"center", alignItems:"center", marginTop:"3%"}}>
                <Button onClick={handleClick} variant="contained" style={{background:"#009c00", width:"60%"}} >Next</Button>
                </div>
                <div style={{display:"flex", justifyContent:"center", color:"grey", fontWeight:"bold", marginTop:"3%", marginBottom:"5%"}}>Resend Code in (20 secs)</div>
            </DialogContent>
          </Dialog>
          <AddressPopUp mobileno={props.mobileno} status={status}/>
        </div>
      );
}