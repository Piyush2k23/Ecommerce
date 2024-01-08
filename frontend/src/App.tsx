import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
// import ProductPage from "./pages/ProductPage";
// import Cart from "./pages/Cart";
import Home from "./pages/Home";
// import { Provider } from "react-redux";
// import store from "./app/store";
// import ShoppingInformation from "./pages/ShoppingInformation";
// import AboutUs from "./pages/AboutUs";
// import ContactUs from "./pages/ContactUs";


function App() {
 
  return (
    <>
    {/* <Provider store={store}> */}
    <Navbar/>
    <Routes>
         <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          {/* <Route path="productPage" element={<ProductPage />} />
          <Route path="cart" element={<Cart />} />
          <Route path="shopping-information" element={<ShoppingInformation />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="contact" element={<ContactUs />} /> */}



           {/* <Route path="contact" element={<Contact />} />
           <Route path="*" element={<NoPage />} />   */}
    </Routes>
    {/* </Provider> */}
    </>
  )
}

export default App;
