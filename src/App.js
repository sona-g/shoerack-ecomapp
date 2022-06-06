import './App.css';
import React, {useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Cart from './pages/Cart'
import Home from './pages/Home'
import Login from './pages/Login'
import ProductDetails from './pages/ProductDetails'
import Products from './pages/Products'
import Register from './pages/Register';
import Header from './components/Header';
import WishlistTab from './pages/WishlistTab';


function App() {
 // const { id } = useParams();
   // const [productInfo, setProductInfo] = useState([]);
  const [cartItems, setCartItems] =  useState([]);

  const [wishlist, setWishlist] = useState([]);
  // const [searchInput, setSearchInput] = useState('');



  const toAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id)
    if(exist) {
      setCartItems(cartItems.map((x) => x.id === product.id ? {...exist, qty: (exist.qty + 1)} : x
        ));
    } else {
      setCartItems([...cartItems, {...product, qty: 1}])
    }
    };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id)
    if(exist) {
      setCartItems(cartItems.filter((x) => x.id !== product.id))
  } else {
    setCartItems([...cartItems, {...product}])
  }
}

const wishlistProducts = (liked) => {
    if (wishlist.includes(liked.id)) {
      setWishlist(wishlist.filter((x) => x !== liked.id));
    } else {
      setWishlist([...wishlist, liked.id]);
    }
  };
  
  return (
    <>
    <BrowserRouter> 
    <Header cartItems ={cartItems} toAdd ={toAdd} onRemove ={onRemove} 
    // setSearchInput={setSearchInput}
    />
    <Routes>
      <Route path="/" element={<Home />}/>
    <Route path="/pages/login" element={<Login />} />
         <Route path="/pages/products" element={<Products wishlistProducts={wishlistProducts} wishlist={wishlist}/>  } />
         {/* searchInput={searchInput} */}
      <Route path="/pages/products/:id" element={<ProductDetails toAdd ={toAdd} />} />
      <Route path="/pages/cart" element={<Cart cartItems ={cartItems} toAdd ={toAdd} onRemove ={onRemove}/>}/>
      <Route path="/pages/register" element={<Register />} />
      <Route path="/pages/wishlist" element={<WishlistTab wishlist={wishlist}/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;