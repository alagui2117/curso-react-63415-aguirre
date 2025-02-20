import './App.css'
import Navbar from './components/Navbar'
import 'bulma/css/bulma.min.css'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import ItemDetailsContainer from './components/ItemDetailsContainer'
import CartDetail from "./components/CartDetail.jsx";

function App() {

    const [cartCount, setCartCount] = useState(0);
    const [cart, setCart] = useState([]);


    const cleanCart = (product) => {
        setCart((prevCart) =>{

            return [...prevCart, product]
        } );
        setCartCount((prevCount) => prevCount + 1);
    };
    const handleAddToCart = (product) => {
        setCart((prevCart) =>{

          const indexCart = prevCart.findIndex(item => item.id === product.id)
          if (indexCart === -1) {
              product.quantity =1
              setCartCount((prevCount) => prevCount + 1);
              return [...prevCart, product]
          } else{
              prevCart[indexCart].quantity = prevCart[indexCart].quantity + 1

              return prevCart;
          }

        } );

    };

    const handleRemoveFromCart = (product) => {
        setCart((prevCart) => {
            const index = prevCart.findIndex((item) => item.id === product.id);
            if (index !== -1) {
                const newCart = [...prevCart];
                newCart.splice(index, 1);
                setCartCount((prevCount) => prevCount - 1);
                return newCart;
            }
            return prevCart;
        });
    };
      return (
        <BrowserRouter>
          <Navbar cartCount={cartCount} cart={cart} addCart={handleAddToCart} removeCart={handleRemoveFromCart} cleanCart={cleanCart} />
          <Routes>
            <Route
            path="/"
            element={
              <ItemListContainer
                greeting="Bienvenido a Futurotech!"
                setCartCount={setCartCount}
                handleAddToCart={handleAddToCart}
                handleRemoveFromCart={handleRemoveFromCart}

              />
            }
            ></Route>
            <Route
              path="/category/:categoryId"
              element={
                <ItemListContainer
                greeting="Categoria"
                setCartCount={setCartCount}
                handleAddToCart={handleAddToCart}
                handleRemoveFromCart={handleRemoveFromCart}
                />
              }
            >
            </Route>
            <Route
              path="/cart/"
              element={
                  <CartDetail
                      greeting="Categoria"
                      setCartCount={setCartCount}
                  />
               }
              >
            </Route>
            <Route path="/item/:itemId" element={<ItemDetailsContainer />} />
            <Route path="*" element={<h1>404 NOT FOUND</h1>} />
          </Routes>
        </BrowserRouter>
      )
}

export default App
