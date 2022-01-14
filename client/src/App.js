import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import Login from "./pages/Login"
import Product from "./pages/Product";
import WishList from './pages/WishList'
import Home from "./pages/Home";
import CadUser from "./pages/CadUser";
import Profile from "./pages/Profile";
import CadProduct from './pages/CadProduct'
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path ='/Login' element={<Login/>} />
      <Route path ='/CadUser' element= {<CadUser/>} />
      <Route path ='/CadProduct' element={<CadProduct/>} />
      <Route path = '/Profile' element={<Profile/>} />
      <Route path='/WishList' element={<WishList/>} />
      <Route path='/Product' element={<Product/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
