import { useState } from "react";
import { AppBar,Toolbar,Grid, Paper, Avatar, Button } from "@mui/material";
import { serverURL } from "../../administrator/services/FetchNodeServices";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from "react-router-dom";

export default function CategoryListComponent({data,getSubCategoryId}){
    const navigate=useNavigate()
   const handleClick=(item)=>{
    getSubCategoryId(item.subcategoryid,item.subcategoryname)

   }   
   const listView=()=>{
    return data.map((item)=>{
   return     <ListItem disablePadding>
   <ListItemButton onClick={()=>handleClick(item)}>
     <ListItemIcon>
     <Avatar style={{width:35, height:35}} src={`${serverURL}/images/${item.icon}`}/>
     </ListItemIcon>
     <ListItemText primary ={<span style={{ fontFamily:"Poppins", fontSize:"100%"}}>{item.subcategoryname}</span>} />
   </ListItemButton>
   </ListItem>


    })
   }
     
    return(
          <div>
           <div style={{display:"flex", justifyContent:"center", flexDirection:"column"}}>
          
            <Paper elevation={5} style={{flexDirection:"column", display:"flex", background:"#ebd6ff", alignItems:"center", justifyContent:"center",display:"flex", paddingRight:0, padding:"5%", fontSize:"130%", fontWeight:650, color:"#8e44ad", marginBottom:"5%"}}>
            <Avatar style={{width:45, height:45}} src={``}/>
            Top Categories
            </Paper></div>

            <List>
           
           {listView()}
            </List>
           </div>
           )
}