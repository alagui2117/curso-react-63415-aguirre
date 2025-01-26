import Logo from '../assets/images/logo.jpeg'
import CartWidget from './CartWidget'
import {Link} from 'react-router-dom'
function Navbar({ cartCount }) {
    return(
    <>
        <nav className="navbar has-background-text-85" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link to="/">
                    <figure className='image mt-6 is-128x128'>
                        <img className='is-16by9' src={Logo} />
                    </figure>    
                </Link>
                
            </div>
            <div className="navbar-menu">
                <div className="navbar-start">
                    <h1 className="navbar-item title is-4">
                        FuturoTech
                    </h1>
                    <Link className='navbar-item' to="/category/auriculares">
                        Auriculares
                    </Link>
                    <Link className='navbar-item' to="/category/parlantes">
                        Parlantes
                    </Link>

                    <Link className='navbar-item' to="/category/notebooks">
                        NoteBooks
                    </Link>
                </div>

                <div className='navbar-end mr-4'>
                    <div className='navbar-item'>
                        <CartWidget cartCount={cartCount}></CartWidget>
                    </div>  
                </div>
            </div>
        </nav>

    </>
    )

}

export default Navbar
