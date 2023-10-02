import { Routes,BrowserRouter as Router,Route } from "react-router-dom";

import AdminLoginInterface from "./administrator/adminlogin/AdminLoginInterface";
import Dashboard from "./administrator/adminlogin/Dashboard";
import Home from "../src/userinterface/Screens/Home"
import SelectProduct from "./userinterface/Screens/SelectProduct"
import ProductViewWithCategory from "./userinterface/Screens/ProductViewWithCategory";
import Cart from "./userinterface/Screens/Cart/Cart"
import MakePayment from "./userinterface/Screens/MakePayment";
function App() {
  return (
    <div> 
     <Router>
      <Routes>
        <Route element={<AdminLoginInterface/>} path="/adminlogininterface"/>  
        <Route element={<Dashboard />} path="/dashboard/*"/>  
        <Route element={<Home />} path="/home"/>  
        <Route element={<ProductViewWithCategory />} path="/productviewwithcategory"/>  
        <Route element={<SelectProduct />} path="/selectproduct"/> 
        <Route element={<Cart />} path="/cart"/> 
        <Route element={<MakePayment />} path="/makepayment"/> 
            
      </Routes>
      </Router> 
       
      
    </div>
  );
}

export default App;
