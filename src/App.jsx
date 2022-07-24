import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Products from "./components/Products";
import {  BrowserRouter,
  Route,
  Routes
 } from "react-router-dom"


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
     

        <Route exact path ="/"  element ={<Home/>}/>
         
        

        <Route path ="/products" element={<Products/>}/>
        <Route path ="/product" element={<Product/>}/>
         

         <Route path="/productlist" element={<ProductList/>}/>
       
        </Routes>
    
    </BrowserRouter>
  );
  
};











export default App;