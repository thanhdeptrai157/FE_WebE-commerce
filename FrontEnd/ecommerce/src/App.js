import './App.css';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import Popup from './Component/PopupSignup';
import Footer from './Component/Footer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductsDetail from './Component/ProductDetail';
import Category from './Component/Category';
import Cart from './Component/Cart';
function App() {
 
  return (
    <div className="App">
      <Router>
        <Popup />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductsDetail />} />
          <Route path="/category" element={<Category />} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
