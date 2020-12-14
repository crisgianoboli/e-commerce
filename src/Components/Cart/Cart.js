import React, {useContext} from 'react';
import {CartContext} from '../Context/CartContext';


const Cart = () => {

    const [cart] = useContext(CartContext); // , setCart agregar para eliminar editar items
    return (
        //traer el valor del itemCounter, producto, detalle de lo que compra y medios de pago
        
        <div className="cart-section">
         {cart.map((item) => (
                <div>
            <h1> {item.item.name}</h1>
            <p>{item.quantity}</p>            
            </div>
            ))}
            
        </div>
    )
}

export default Cart
