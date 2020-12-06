import React from 'react';
import useAppContext from '../Context/AppContext';


const Cart = () => {

    const { products } = useAppContext()
    console.log(products);
    return (
        //traer el valor del itemCounter, producto, detalle de lo que compra y medios de pago
        <div className="cart-section">
            {products.map((product) => (
            <h1> {product.productName}  </h1>
            ))}
            
        </div>
    )
}

export default Cart
