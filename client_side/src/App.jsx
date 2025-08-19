import { Navbar } from "./Components/Routing/Navbar/Navbar.jsx";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Components/Routing/Home/Home";
import { Products } from "./Components/Routing/Products/Products";
import { Profile } from "./Components/Routing/Profile/Profile.jsx";
import { Cart } from "./Components/Routing/Cart/Cart.jsx";
import { Toaster } from "react-hot-toast";
import { Favourite } from "./Components/Routing/WishList/Favourite.jsx";
import "./index.css";
function App() {
  return (
    <div>
      <Toaster />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Favourite" element={<Favourite />} />
      </Routes>
    </div>
  );
}

export default App;
