import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from 'react-router-dom'

const NavBar =  () => {
    return (
        <nav className='NavBar'>
            <Link to='/'>
                <h3 className="titulo-react">Ecommerce</h3>
            </Link>
                <div className='Categories'>
                    <NavLink to={`/category/remeras`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Remera </NavLink>
                    <NavLink to={`/category/buzo`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Buzo </NavLink>
                    <NavLink to={`/category/campera`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Campera </NavLink>
                </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar