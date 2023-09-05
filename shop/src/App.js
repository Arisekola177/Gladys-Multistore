import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import ProductDetails from "./pages/ProductDetails";
import Products from "./components/Products";
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Footer from "./components/Footer";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <BrowserRouter>
    <div>
       <Navbar />
      <Routes>
      <Route path="/" element={ <Home />} />
      <Route path="/products" element={ <Products />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />}  />
      </Routes>
     
      <Footer />
     
     
    </div>
    </BrowserRouter>
  );
  
}

export default App;
