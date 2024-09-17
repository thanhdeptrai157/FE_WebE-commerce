import './App.css';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import Popup from './Component/PopupSignup';
import Footer from './Component/Footer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductsDetail from './Component/ProductDetail';
import Category from './Component/Category';
function App() {

  return (
    <div className="App">
      <Router>
      <Popup />
      <Navbar />
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductsDetail />} />
        </Routes> */}
        <Category />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
