import './App.css';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import Popup from './Component/PopupSignup';
import Footer from './Component/Footer';
import ProductsDetail from './Component/ProductDetail';
function App() {
  return (
    <div className="App">
        <Popup/>
        <Navbar/>
        <ProductsDetail/>
        <Footer/>
    </div>
  );
}

export default App;
