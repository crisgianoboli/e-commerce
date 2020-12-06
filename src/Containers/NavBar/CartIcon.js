import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import useAppContext from '../../Components/Context/AppContext';
import './CartIcon.scss';

const CartIcon = () => {

    const { productsCount } = useAppContext()

    return (
        <div>
            <Link to='/Cart'>
               <div>{productsCount()}</div>         
               <FiShoppingCart className="cart-icon"/>
            </Link>
        </div>
    )
}

export default CartIcon