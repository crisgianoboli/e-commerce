import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './CartIcon.scss';

const CartIcon = () => {
    return (
        <div>
            <Link to='/cart'>
               <FiShoppingCart className="cart-icon"/>
            </Link>
        </div>
    )
}

export default CartIcon