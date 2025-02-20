import {useLocation, useNavigate} from "react-router-dom";
import {FaTrash     } from 'react-icons/fa'
import {useState} from "react";
import {saveOrder} from "../asyncOrders.js";
import Swal from "sweetalert2";


const CartDetail = ({setCartCount}) => {
    const location = useLocation();
    const navigate = useNavigate()
    let {cart} = location.state || {}
    let [cartShow, setCartShow] = useState(cart);
    const removeProductOfCart = (index) => {
        const newCartShow = [...cartShow];
        newCartShow.splice(index, 1);
        setCartShow(newCartShow);
        setCartCount(newCartShow.length)
    }
    const cleanCart = () => {
        setCartShow([])
        setCartCount(0)

        navigate("/", {state: {cart: []}})
    }
    const sendOrder = async () => {
        let order = {
            product: cartShow,
            total: cartShow.reduce((total, item) => total + item.price * item.quantity, 0)
        }
        await saveOrder(order)
        setCartShow([])
        setCartCount(0)
        Swal.fire({
            icon: 'success',
            title: 'Tu orden se ha realizado con exito',
            timer: 2000
        }).then(() => navigate("/"))
    }
    return (
        <div >
            {cartShow && cartShow.map((item, index) => (
                <div className={"card-content"} key={item.id}>
                    <div className="media mt-5">
                        <div className="media-left">
                            <figure className="image is-128x128">
                                <img
                                    src={item.img}
                                    alt="Placeholder image"
                                />
                            </figure>
                        </div>
                        <div className="media-content">
                            <p className="title mt-4 is-4">{item.name}</p>
                            <p className="subtitle mt-2 is-6">${item.price}</p>
                        </div>
                        <footer className="card-footer mr-4 mt-4">
                            <div>
                                <p className="subtitle mr-2"> Cantidad: {item.quantity}</p>
                                <p className="subtitle mr-2"> Subtotal: ${item.quantity * item.price}</p>
                            </div>

                            <FaTrash
                                className='title is-4 ml-2'
                                style={{ color: 'red' }}
                                onClick={() => removeProductOfCart(index)}
                            />

                        </footer>
                    </div>
                </div>

            ))}
            <div className={"is-full is-flex is-justify-content-end"} >

                <button className={"button is-info is-light "} onClick={cleanCart}>Vaciar carrito</button>
                <button className={"button is-primary ml-5 mr-5 "} onClick={() => sendOrder()} >Ordenar</button>
            </div>

        </div>
    )
};

export default CartDetail
