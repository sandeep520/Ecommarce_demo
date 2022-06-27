import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Products from "./component/Products";
import Cart from "./component/Cart";
import Login from "./component/Login";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./component/ProductDetails";
import SignUp from "./component/SignUp";
import CheckOut from "./component/CheckOut";
import { useState } from "react";
import Footer from "./component/Footer";
import AboutPage from "./component/AboutPage";
import ContactPage from "./component/ContactPage";
// import PrivateRoute from './component/Routing/PrivateRoute'
// import PublicRoute from './component/Routing/PublicRoute'

function App() {
  const [user, setUser] = useState(null);

  const logout = () => {
    setUser(false);
  };

  return (
    <div className="App">
      <Navbar user={user} logout={logout} />
      <Routes>
        {/* <Route path="/" element={<Home/>}/> */}

        {!user && (
          <>
          <Route excat path="/" element={<Home data={()=> setUser(true)} />} />
            <Route path="/login" element={<Login data={()=> setUser(true)}/>} />
            <Route path="/signup" element={<SignUp data={() => setUser(true)}/>} />

          </>
        )}

        {user && (
          <>
          <Route excat path="/" element={<Home />} />
            <Route excat path="/product" element={<Products />} />
            <Route excat path="/cart" element={<Cart />} />
            <Route excat path="/check" element={<CheckOut />} />
            <Route excat path="/products/:id" element={<ProductDetails />} />
            <Route excat path="/about" element={<AboutPage />} />
            <Route excat path="/contact" element={<ContactPage />} />

          </>
        )}
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
