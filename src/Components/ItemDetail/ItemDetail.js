import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const ItemDetail = ({ product }) => {
    // Recibir los items y hacer un map 
    const { parametro } = useParams();

    useEffect(() => {
        console.log(parametro);
    }, [parametro])


    return (
        <div>
            <h2>{product.productName}</h2>
            <h3>{product.price}</h3>
            <img src={product.image}/>
            <p>{product.reviews}</p>

            {/* CONTADOR  itemCount */}
            {/* Button "AGREGAR AL CARRITO" */}
            <button>Agregar al carrito</button>  

            <button>
                <Link to={"/"}> Volvamos al Listado  </Link>
            </button>  
        </div> 
    )
}

export default ItemDetail;