import  { useEffect, useState } from "react";
import {getProducts, getProductsByCategory} from "../asyncProducts";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList.jsx";

const ItemListContainer = ({ greeting, setCartCount, handleAddToCart, handleRemoveFromCart }) => {
  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    const fetchProducts = categoryId ? getProductsByCategory : getProducts;
    fetchProducts(categoryId)
      .then((resp) => setProducts(resp))
      .catch((err) => console.error(err));
  }, [categoryId]);



  return (
    <div>
      <h3 className="is-size-3 has-text-centered mb-5 text-capitalize">{greeting} {categoryId}</h3>
      <ItemList
        products={products}
        onAddToCart={handleAddToCart}
        onRemoveFromCart={handleRemoveFromCart}
      />
    </div>
  );
};

export default ItemListContainer;
