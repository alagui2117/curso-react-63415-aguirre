import Logo from '../assets/images/logo.jpeg'
import CartWidget from './CartWidget'

function Navbar() {
    return(
    <>
        <nav className="navbar has-background-text-85" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <figure className='image mt-6 is-128x128'>
                    <img className='is-16by9' src={Logo} />
                </figure>    
            </div>
            <div className="navbar-menu">
                <div className="navbar-start">
                    <h1 className="navbar-item title is-4">
                        FuturoTech
                    </h1>
                    <a href="#" className="navbar-item">Inicio</a>
                    <a href="#" className="navbar-item">Accesorios</a>
                    <a href="#" className='navbar-item'>Herramientas</a>
                    <a href="#" className='navbar-item'>Contactanos</a>
                </div>

                <div className='navbar-end mr-4'>
                    <div className='navbar-item'>
                        <CartWidget></CartWidget>
                    </div>  
                </div>
            </div>
        </nav>

    </>
    )

}

export default Navbar
