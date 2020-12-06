import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { Button } from 'react-bootstrap';
import "./ItemDetail.scss";
import useAppContext from "../Context/AppContext";



const ItemDetail = ({ product }) => {
  
  const { parametro } = useParams();
  const [quantity, setQuantity] = useState(1);


  const {addProduct} = useAppContext()
 
  useEffect(() => {
    console.log(parametro);
  }, [parametro]);

  const counterHandler = (counter) => {  // ver esto
      setQuantity(counter);
  }

  const addProductToCart = () => {
       addProduct(product, quantity);

       console.log({...product, quantity});
  }

  return (
    <div className="detail-content">
      <div className="title-detail">
        <h2>{product.productName}</h2>
        <h3>{product.price}</h3>
      </div>
      <div className="image-detail">
        <img src={product.image} alt="image" />        
        <div>
          <p>{product.description}</p>
          <ItemCount maxValue={10} minValue={0} initialValue={0} onAdd={counterHandler} />
          
          <Button variant="light" onClick={addProductToCart}>
            <Link to='/Cart'>Agregar al carrito </Link>
          </Button>

          <Button variant="dark">
            <Link to={"/"}> Volvamos al Listado </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
