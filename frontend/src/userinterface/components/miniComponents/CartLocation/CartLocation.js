import React,{useState} from "react";
import './CartLocation.css'
import { useNavigate } from "react-router-dom";
import  PhoneNumberPopUp from "../../PopUpComponent/PhoneNumberPopUp"
export default function CartLocation(props){
    const [status,setStatus]=useState(false)
    var navigate=useNavigate()
    const handleClick=()=>{
    if(props.btnTitle=="Go")  
    setStatus(true)
    else
    navigate('/makepayment')

    }
     const showAddress=()=>{
        return props.userAddress.map((item)=>{
       return(<div style={{flexDirection:'column',display:'flex'}}>
        <div>{item.username}</div>
        <div>{item.addressone}</div>
        <div>{item.addrestwo}</div>
        <div>{item.city},{item.state},{item.zipcode}</div>

       </div>)

        })
      

     }


    return(

   
                 <div className="cart__location">
                      <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                      
                     <div style={{padding:'5px',color:'var(--red)',display:'flex',justifyContent:'center',alignItems:'center'}}> <svg width="16" height="22" viewBox="0 0 258 382" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M122.384 380.616C120.721 379.862 116.37 376.014 112.714 372.066C81.1189 337.94 40.1783 265.928 17.0914 203.871C-1.60249 153.622 -4.64457 120.146 6.41385 86.3725C21.4011 40.6 60.7699 6.55079 105.139 0.987359C116.952 -0.493914 143.821 -0.270254 154.912 1.4017C179.47 5.10389 201.03 16.1777 219.454 34.5531C237.085 52.1378 248.236 72.1882 254.691 97.9131C257.061 107.359 257.338 110.333 257.345 126.457C257.353 142.346 257.034 145.924 254.63 156.957C242.852 210.999 206.251 289.212 166.486 345.31C157.046 358.627 143.191 374.811 138.269 378.271C133.425 381.676 126.857 382.645 122.384 380.616ZM133.885 369.322C138.088 365.786 151.914 348.781 160.606 336.457C195.855 286.481 232.16 209.816 243.735 160.917C250.697 131.506 248.91 103.835 238.491 79.7366C222.524 42.8054 189.427 16.0289 153.585 11.0449C143.536 9.64757 113.912 9.63998 104.599 11.0335C57.1766 18.1239 18.2745 59.1624 10.8514 109.93C9.20494 121.19 10.1889 143.748 12.859 155.958C26.8172 219.787 80.9421 324.778 121.763 367.208C127.036 372.69 129.395 373.1 133.885 369.322ZM117.028 202.83C109.449 201.571 98.7216 197.677 92.0915 193.778C84.8026 189.491 71.3519 176.025 67.0423 168.7C54.632 147.605 53.7254 122.479 64.5648 100.041C68.4129 92.0757 70.5224 89.2062 78.2605 81.4119C86.1123 73.503 88.7527 71.5485 96.9075 67.6091C117.6 57.6128 139.183 57.3363 159.291 66.8098C205.785 88.715 215.118 150.717 177.088 185.042C160.539 199.978 138.736 206.435 117.028 202.83ZM142.278 192.467C153.693 190.048 163.256 184.667 172.519 175.449C185.958 162.075 191.597 147.409 190.586 128.457C189.725 112.321 184.187 99.8314 172.741 88.2104C161.541 76.8388 148.368 70.9942 132.143 70.1976C113.927 69.3033 99.5407 74.6238 86.4075 87.1118C73.9999 98.9099 68.052 111.715 67.2028 128.457C66.2394 147.451 71.8781 162.096 85.2961 175.449C100.977 191.053 120.886 196.999 142.278 192.467Z" fill="var(--red)"/>
              </svg>
              </div>
  
                      <p className="heading3 cart__locationcontent">Your Delivery Address</p>
                      {showAddress()}
      

                      </div>
                      <button className="regularbutton1 cart__locationbutton" onClick={handleClick}> {props.btnTitle} </button>

                      <PhoneNumberPopUp setStatus={setStatus} status={status} setBtnTitle={props.setBtnTitle} setUserAddress={props.setUserAddress} userAddress={props.userAddress}  />

                     </div>
               
 
    )
}