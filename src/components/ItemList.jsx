import React, { useState } from "react";
import { Link } from "react-router-dom";

const ItemList = ({ products, onAddToCart, onRemoveFromCart }) => {
  return (
    <div className="fixed-grid has-3-cols mx-3">
    <div className="grid">
      {products.map((product) => (
        <div className="" key={product.id}>
          <div className="card ">
            <div className="card-image mb-5" >
                <figure className="image is-16by9">
                    <img
                        src={product.img}
                        className="image "
                        alt={product.name}
                        style={{ objectFit: "cover", height: "200px" }}
                    />
                </figure>
            
            </div>
            <div className="card-content is-flex-direction-column">
              <h5 className="has-text-centered is-size-5 ">{product.name}</h5>
              <p className="has-text-centered">{product.descrip}</p>
              <p className="has-text-centered is-size-3">${product.price}</p>
              <div className="card-footer">
                <Link to={`/item/${product.id}`} className="card-footer-item button is-link">
                  Más info
                </Link>
                <button
                  className="button is-primary card-footer-item "
                  onClick={() => {
                    onAddToCart(product)
                  }
                      }
                >
                  Agregar al carrito
                </button>
                <button
                  className="button is-danger card-footer-item"
                  onClick={() => onRemoveFromCart(product)}
                >
                  Eliminar del carrito
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default ItemList;
