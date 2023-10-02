import { useState, useEffect } from "react";
import {useMediaQuery, AppBar, Toolbar, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import { useTheme } from '@mui/material/styles';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Header(props) {
    const theme = useTheme();
    const navigate =useNavigate()
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    var products=useSelector((state)=>state.products)
    var totalproducts=Object.keys(products)
  return (
    <div style={{ width: "100vw" }}>
      <AppBar position="static" style={{ background: "#fff" }}>
        <Toolbar>
          <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
            <div style={{ color: "#000", fontFamily: "Poppins", fontSize:24 }}>
              {matches?`QuickShopee`:`QS`}
            </div>

            <div style={{display:'flex',justifyContent:'center',width:'80%',paddingLeft:3,paddingRight:3}}>
           <FormControl sx={{ m: 1, width:matches?`60%`:`80%`}} variant="outlined">
          <OutlinedInput
            id="outlined-adornment-weight"
            endAdornment={<InputAdornment position="end"><SearchOutlinedIcon/></InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
          />
          </FormControl>
            </div>

            <div
              style={{
                color: "#2980b9",
                marginLeft: "auto",
                
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Badge badgeContent={totalproducts.length} color="success">
              <ShoppingCartIcon onClick={()=>navigate("/cart")} />
              </Badge>
              <PersonIcon style={{paddingLeft:'3%'}} />
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
