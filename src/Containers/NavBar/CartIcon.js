import {useContext} from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import {CartContext} from '../../Components/Context/CartContext'
import './CartIcon.scss';

const CartIcon = () => {

    const [cart] = useContext(CartContext);

    const getQuantity = () => {
        let counterProduct = 0;
        cart.forEach(order => { counterProduct += order.quantity });
        return counterProduct;
    }

    return (
        <div>
            <Link to='/Cart'>  
               {getQuantity()}     
               <FiShoppingCart className="cart-icon"/>
            </Link>
        </div>
    )
}

export default CartIcon