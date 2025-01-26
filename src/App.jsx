import './App.css'
import Navbar from './components/Navbar'
import 'bulma/css/bulma.min.css'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import ItemDetailsContainer from './components/ItemDetailsContainer'

function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <BrowserRouter>
      <Navbar cartCount={cartCount} />
      <Routes>
        <Route
        path="/"
        element={
          <ItemListContainer
            greeting="Bienvenido a Futurotech!"
            setCartCount={setCartCount}
          />
        }
        ></Route>
        <Route
          path="/category/:categoryId"
          element={
            <ItemListContainer
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
