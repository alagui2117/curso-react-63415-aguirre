import {FaShoppingCart} from 'react-icons/fa'

function CartWidget({cartCount}){

    return (
        <>
        <button className='button flex-row has-background-text-85'>
            <FaShoppingCart className='title is-4' />
            <span>{cartCount}</span>
        </button>
        
        </>
    )
}

export default CartWidget;