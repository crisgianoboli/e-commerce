import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { Button } from 'react-bootstrap';
import "./ItemDetail.scss";
import {CartContext} from "../Context/CartContext";



const ItemDetail = ({ product }) => {
  
  const [quantity, setQuantity] = useState(1);

  const [cart, setCart] = useContext(CartContext); 
 

  const counterHandler = (counter) => {  // ver esto
      setQuantity(counter);
  }

  const addProductToCart = () => {

    const existing = cart.find((p) => p.id === product.id)
    if (existing) {
      existing.quantity += quantity
      setCart([...cart])
    } else {
      setCart([...cart, {quantity: quantity, item: product}])
    }      

    /* setCart([...cart, {quantity: quantity, item: product}]) */
    //agregar funcionalidad de si agrego el mismo producto que no me agregue de nuevo el producto, sino la cantidad
  }

  return (
    <div className="detail-content">
      <div className="title-detail">
        <h2>{product.productName}</h2>
        <h3>{product.price}</h3>
      </div>
      <div className="image-detail">
        <img src={product.image} alt="product" />        
        <div>
          <p>{product.description}</p>
          <ItemCount maxValue={10} minValue={0} initialValue={0} onAdd={counterHandler} />
          
          <Button variant="light" onClick={addProductToCart}>
            <Link to='/Cart'>Agregar al carrito </Link>
          </Button>

          <Button variant="dark">
            <Link to={"/"}> Volver al listado </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;


/* 
const addToCart = () => {
    const sameId = cart.some((element) => element.item.id === item.id);

    // Si el producto ya está agregado al carrito, aumenta la cantidad.
    if (sameId) {
      cart.forEach((element) => {
        if (element.item.id === item.id) {
          const newCart = cart.filter((el) => el.item.id !== item.id);
          setCart([
            ...newCart,
            {
              item: item,
              quantity: element.quantity + parseInt(counter),
            },
          ]);
        }
      });
    } else {
      // Si el producto no está agregado al carrito, lo añade.
      setCart([...cart, { item: item, quantity: parseInt(counter) }]);
    }
  };
*/