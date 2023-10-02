import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
    header:{
        background:'#fff',
        display:'flex',
        alignItems:'center',
        width:'99%',
    },
    headingText:{
        color:'#000',
        fontFamily:'Poppins',
        fontSize:24,
    },
    headerIcon:{
        display:'flex',
        color:'#2980b9',
        marginLeft:'auto',
        display:'flex',
        justifyContent:'space-between',
    },
    accountIcon:{
        paddingLeft:'3%'
    },
    searchBar:{
        width:'80%',
        paddingLeft:3,
        paddingRight:3,
        display:'flex',
        justifyContent:'center',
    },
    homeMainDiv:{
        display:'flex',
        flexDirection:'column',
        width:'95%',
        alignItems:'center',
        marginLeft:'3%',
        marginRight:'3%',
        marginTop:'1%',
    },
    bannerHomeSubDiv:{
        width:'100%',
    },
    arrowLeftCircle:{
        position:'absolute',
        top:'45%',
        left:'1%',
        color:'#fff',
        zIndex:1,
        width:40,
        height:40,
        borderRadius:20,
        background:'#fff',
        opacity:0.7,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    arrowRightCircle:{
        position:'absolute',
        top:'45%',
        right:'1%',
        color:'#fff',
        zIndex:1,
        width:40,
        height:40,
        borderRadius:20,
        background:'#fff',
        opacity:0.7,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    arrow:{
        color:'green'
    },
    circleImages:{
        width:180,
        height:180,
        borderRadius:90,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        padding:2,
    },
    circleImagesWithResponsive:{
        width:90,
        height:90,
        borderRadius:45,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        padding:2,
    },
    circleComponentHomeSubDiv:{
        width:'100%',
        marginTop:20,
    },
    circleCompnentHeadingText:{
        fontFamily:'Poppins',
        fontSize:22,
        fontWeight:'bold',
    },
    circleCompnentHeadingTextWithResponsive:{
        fontFamily:'Poppins',
        fontSize:16,
        fontWeight:'bold',
    },
    circleComponentArrowDiv:{
        display:'flex',
        flexDirection:'row',
    },
    circleComponentNameAndArrow:{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        padding:5,
        marginBottom:10,
    },
    circleComponentImageAndName:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
    },
    circleComponentText:{
        fontFamily:'Poppins',
        textAlign:'center',
        width:180,
        margin:5,
        fontSize:15,
        fontFamily:700
    },
    circleComponentTextWithResponsive:{
        fontFamily:'Poppins',
        textAlign:'center',
        width:90,
        margin:5,
        fontSize:12,
        fontFamily:700
    },
    divider:{
        width:"100%",
        paddingTop:'5%', 
        marginBottom:'10%'
    },
    footerHeadingText:{
        paddingLeft: '20%',
        width: '100%', 
        color: 'red', 
        fontFamily: 'bold', 
        fontSize: 30,
        fontFamily:'Poppins',
    },
    footerHeadingTextWithResponsive:{
        width: '100%', 
        color: 'red', 
        fontFamily: 'bold', 
        fontSize: 30,
        fontFamily:'Poppins',
        paddingTop:'10%'
    },
    footerIcon:{
        paddingLeft: '6%', 
        paddingTop: '5%', 
        display: 'flex', 
        justifyContent: 'space-evenly'
    },
    footerIconWithResponsive:{
        width:'40%',
        paddingTop: '5%', 
        display: 'flex', 
        justifyContent: 'space-evenly'
    },
    footerText:{
        padding: 10
    },
    footerAppStore:{
        paddingLeft: '10%', 
        paddingTop: '10%',
        paddingRight:'10%',
    },
    footerAppStoreWithResponsive:{
        paddingTop: '10%',
        width:'100%',
    },
    productComponentPaperCSS:{
        display:'flex',
        flexDirection:'column',
        width:160,
        height:250,
        justifyContent:'center',
        alignItems:'center',
    },
    productComponentImage:{
        padding:2,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:158,
        
    },
    productComponentText:{
        fontFamily:'Poppins',
        fontSize:'16',
        width:160,
        margin:5,
        fontFamily:700,
        textAlign:'center', 
    },
    productComponentRateAndWeightDiv:{
        display:'flex',
        flexDirection:'column',
        width:158,
        padding:2,
        fontFamily:'Poppins',
    },
    productComponentWeight:{
        paddingLeft:10,
        fontSize:12
    },
    categoryShowImages:{
        width:50,
        height:50,
        borderRadius:25,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        padding:2,
        background:'#ecf0f1'
    },
})