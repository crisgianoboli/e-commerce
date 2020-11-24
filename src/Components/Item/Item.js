import { useEffect, useState } from 'react';
import './item.scss';
import { Link } from 'react-router-dom';

const Item = ({item}) => {
    // Recibir los items y hacer un map 
    return (
        <div id="Item" className="item-container">
            <div clasName="item-content-div">
               <h2>{item.productName}</h2>
               <p>{item.price}</p>
            </div>
            <button>
               <Link to={"/detail/"+item.id} activeClassName="me-activo"> Vemos los detalles  </Link>
             </button> 
            {/* ver aca como hacer para pasar el parametro por ID */}
        </div>
    )
}

export default Item;