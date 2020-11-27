import './item.scss';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Item = ({item}) => {
    // Recibir los items y hacer un map 
    return (
        <div id="Item" className="item-container">
            <div className="item-content-div">
               <h2>{item.productName}</h2>
               <p>{item.price}</p>
               <img src={item.image} alt="image nike"/>
            </div>
            <Button variant="light" >
               <Link to={"/detail/"+item.id} activeClassName="me-activo" > Vemos los detalles  </Link>
             </Button> 
        </div>
    )
}

export default Item;