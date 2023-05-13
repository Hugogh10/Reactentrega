import './Cart.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'

const Cart =() => {
    const {cart, clearCart, totalQuantity, total} = useContext(CartContext)
    
    if(totalQuantity === 0) {
        return (
            <div>
                <h1>No hay item en el carrito</h1>
                <Link to='/' className='Option'>Productos</Link>
            </div>
        )
    }

    return (
        <div className='modal-overlay'>
            <h1 className='modal-header'>Carrito</h1>
            { cart.map(p =>  <CartItem key={p.id} {...p}/>) }
            <h3>total: ${total}</h3>
            <button onClick={() => clearCart()} className='Button'>Limpiar carrito</button>
            <Link to='/checkout' className='Option'>Checkout</Link>
        </div>
    )
}

export default Cart