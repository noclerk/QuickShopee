import { Dialog, Button, TextField, FormControlLabel, Radio, RadioGroup} from "@mui/material";
import { FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import { postData } from "../../../administrator/services/FetchNodeServices";
import { Grid, Paper } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import { useEffect, useState } from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
export default function AddressPopUp(props) {
    const [title, setTitle]=useState("")
    const [name, setName]=useState("")
    const [addressOne, setAddressOne]=useState("")
    const [addressTwo, setAddressTwo]=useState("")
    const [state, setState]=useState("")
    const [city, setCity]=useState("")
    const [zipcode, setZipCode]=useState("")
    const [emailid, setEmailid]=useState("")
    const [selectedAddress, setSelectedAddress]=useState("");
    const [getDOpen, setDOpen] = useState(props.status)
    const handleSubmit=async()=>{
    var body={emailid:emailid, mobileno:props.mobileno, addressone:addressOne, addresstwo:addressTwo, city:city, state:state, pincode:zipcode, username:title+" "+name, addressstatus:selectedAddress}
    var result=await postData("userinterface/add_address", body)    
     setDOpen(false)    
}
    useEffect(function () {
        setDOpen(props.status)
    }, [props])
    return (
        <Dialog
            style={{paddingTop:"8%", height:"70%", display: "flex", flexDirection:"column", borderRadius:"5px", alignItems: "center", justifyContent: "center"}}
            fullScreen
            open={getDOpen}
            keepMounted
        >
            <Grid style={{ display: "flex", justifyContent: "center" }}>
                <Grid style={{backgroundImage: `url(${"assets/map.jpg"})`, display: "flex", flexDirection:"column", justifyContent: "start" }} item xs={5.5}>
                    <Grid style={{ display: "flex", width: "100%", padding: "3%", justifyContent: "center" }}>
                        <Paper style={{color: "grey", display:"flex", justifyContent:"center", alignItems: "center", padding: "2%" }}>E.g. Sector 32 or Kormangala or park <ArrowDropDownIcon /> 
                        </Paper>
                    </Grid>
                </Grid>

                <Grid style={{ padding: "2%"}} item xs={6.5}>
                    <Grid style={{ display: "flex", flexDirection: "column", padding: "2%" }}>
                        <Grid style={{ display: "flex", justifyContent: "end" }}><ClearIcon style={{ color: "#fff", cursor: "pointer", fontSize: "100%", height: "5%", width: "5%", borderRadius: "70%", background: "grey" }} />
                        </Grid>
                            <Grid style={{ flexDirection: "row", fontWeight: "bold", fontSize: 18 }}>
                            Enter complete address
                            </Grid>
                        <Grid style={{ color: "grey", paddingTop: "4%", fontFamily: "Righteous" }}>
                            This allow us to find easily and give you timely delivery experience
                        </Grid>
                        <Grid style={{ marginTop: "6%", display: "flex", flexDirection: "row" }}>
                            <Grid style={{display:"flex", flexDirection:"row"}} item xs={12}>
                                <FormControl  size="small" style={{width:"30%", marginRight:"3%"}} fullWidth>
                                <InputLabel id="demo-simple-select-label">Title</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={title}
                                label="Title"
                                onChange={(event)=>{setTitle(event.target.value)}}
                                >
                                <MenuItem value={"Mr"} >Mr</MenuItem>
                                <MenuItem value={"Mrs"} >Mrs</MenuItem>
                                <MenuItem value={"Miss"} >Miss</MenuItem>
                                </Select>
                                </FormControl>
                                <TextField onChange={(event)=>{setName(event.target.value)}} size="small" style={{cursor:"pointer",width:"70%"}} placeholder="Receiver's name"></TextField>
                            </Grid>
                        </Grid>
                        
                        <Grid style={{marginTop:"3%", display:"flex", flexDirection:"column"}}>
                        <TextField onChange={(event)=>{setAddressOne(event.target.value)}} style={{marginBottom:"3%"}} size="small" fullWidth placeholder="Address 1"></TextField>
                        <TextField onChange={(event)=>{setAddressTwo(event.target.value)}} size="small" fullWidth placeholder="Address 2"></TextField>
                        </Grid>
                        
                        <Grid style={{ display: "flex", marginTop:"3%", justifyContent:"space-between", flexDirection: "row"}} item xs={12}>
                            <TextField onChange={(event)=>{setCity(event.target.value)}} size="small" style={{marginRight:"3%"}} placeholder="City"></TextField>
                            <TextField onChange={(event)=>{setState(event.target.value)}} size="small" placeholder="State"></TextField>
                        </Grid>
                        
                        <Grid style={{marginTop:"3%", display: "flex", justifyContent:"space-between", flexDirection: "row"}} item xs={12}>
                            <TextField onChange={(event)=>{setZipCode(event.target.value)}} size="small" style={{width:"30%", marginRight:"3%"}} placeholder="Pin Code"></TextField>
                            <TextField onChange={(event)=>{setEmailid(event.target.value)}} type="email"  size="small" style={{width:"70%"}} placeholder="Email address"></TextField>
                        </Grid>
                        
                        <Grid style={{ display: "flex", flexDirection: "column" }}>
                            <Grid style={{ color: "grey", marginTop: "6%", fontFamily: "Righteous" }}>
                                Save address as
                            </Grid>
                            <Grid  style={{ display: "flex",  marginTop: "3%", width: "100%" }}>
                            <FormControl>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                          onChange={(event)=>{setSelectedAddress(event.target.value)}}
                        >
                 <FormControlLabel value="Home" control={<Radio />} label="Home" />
                 <FormControlLabel value="Work" control={<Radio />} label="Work" />
                 <FormControlLabel value="Other" control={<Radio />} label="Other" />
                         </RadioGroup>
                  </FormControl>
                            </Grid>
                           
                        </Grid>
                        <Grid style={{ marginTop: "10%", justifyContent: "center", display: "flex" }}>
                            <Button onClick={()=>handleSubmit()} fullWidth style={{marginBottom:"2%", background: " #00d100", width: "100%" }} variant="contained">Save Address</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Dialog>
        );
}