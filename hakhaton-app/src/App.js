import logo from './logo.svg';
import './App.css';
import NavBar from './components/Header/NavBar';
import { BrowserRouter , Routes , Route } from "react-router-dom";
import Home from './components/Header/Home';
import Products from './components/Header/Products';
import Cart from './components/Header/Cart';
import About from './components/Header/About';
import Login from './components/Header/Login';

function App() {
  return (
   <>
   <BrowserRouter>
   <NavBar />
   <Routes>

   <Route path="/" element={<Home />} />
   <Route path="/products" element={<Products />} />
   <Route path="/about" element={<About />} />
   <Route path="/cart" element={<Cart />} />
   <Route path="/login" element={<Login />} />
   </Routes>
   </BrowserRouter>
  
   </>
  )
}

export default App;
