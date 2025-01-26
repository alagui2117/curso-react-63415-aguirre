import React, { useState, useEffect } from "react";
import { getProductsById } from "../asyncProducts";
import { useParams } from "react-router-dom";

const ItemDetailsContainer = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductsById(itemId)
      .then((resp) => setProduct(resp))
      .catch((err) => console.error(err));
  }, [itemId]);

  return (
    <div>
      {product ? (
        <div>
          <h2>{product.name}</h2>
          <p>{product.descrip}</p>
          <p>${product.price}</p>
          <img src={product.img} alt={product.name} />
        </div>
      ) : (
        <p>Cargando producto...</p>
      )}
    </div>
  );
};

export default ItemDetailsContainer;
