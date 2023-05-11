import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import './CartItem.css'

const CartItem = ({ id, title, price, quantity }) => {
    const { removeItem } = useContext(CartContext)

    const handleRemove = () => {
        removeItem(id)
    }

    return (
        <div className="itemCarrito">
            <h4>{title}</h4>
            <p>Cantidad: {quantity}</p>
            <p>Precio: {price}</p>
            <p>SubTotal: {price * quantity}</p>
            <button className="btn btn-danger botonEliminar" onClick={handleRemove}>X</button>
        </div>
    )

}

export default CartItem