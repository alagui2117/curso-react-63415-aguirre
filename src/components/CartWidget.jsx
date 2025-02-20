import {FaShoppingCart} from 'react-icons/fa'
import {useNavigate} from "react-router-dom";

function CartWidget({cartCount,  cart}){
    const navigate = useNavigate()

    const onClickCart = () => {
        navigate("/cart", {state: {cart}})
    }
    return (
        <>
        <button className='button flex-row has-background-text-85' onClick={onClickCart}>
            <FaShoppingCart className='title is-4' />
            <span>{cartCount}</span>
        </button>
        
        </>
    )
}

export default CartWidget;