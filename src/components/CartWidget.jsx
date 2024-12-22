import {FaShoppingCart} from 'react-icons/fa'

function CartWidget(){
    return (
        <>
        <button className='button flex-row has-background-text-85'>
            <FaShoppingCart className='title is-4' />
            <span>2</span>
        </button>
        
        </>
    )
}

export default CartWidget;