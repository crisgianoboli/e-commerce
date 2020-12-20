import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../Context/CartContext";
import {Button} from 'react-bootstrap';
import {Form} from '../Form/Form';
import {getFirestore} from '../../firebase/index';
import "./Cart.scss";

const Cart = () => {
  const [cart] = useContext(CartContext);//  agregar setCart para eliminar, editar items
  const [total, setTotal] = useState(0);
  const [orderId, setOrderId] = useState("");


  useEffect(() => {
    let totalCart = 0;
    cart.forEach((cartItem)=> {
      /* totalCart += cartItem.quantity * cartItem.item.price */ //misma resolucion
      totalCart = totalCart + cartItem.quantity * cartItem.item.price
    })
    setTotal(totalCart);
  }, [cart]);

  const addOrder = (dataBuyer) => {
    let newOrder = {
      buyer: dataBuyer,
      items: cart, 
      date : Date.now(),  // investigar dar formato a date
      total: total
    }
    const db = getFirestore();

    db.collection("orders")
      .add(newOrder)
      .then(function (docRef) {
        setOrderId(docRef.id);
        alert("el id de tu compra es:", orderId);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  }
  return (
    //traer el valor del itemCounter, producto, detalle de lo que compra y medios de pago

    <div className="cart-section">
        <h2> Productos a comprar </h2>
      {cart.map((item) => (
        <div className="buy-items-section">
          <div className="buy-items">
            <h3>Producto: {item.item.name}</h3>
            <img src={item.item.image} alt="" p />
            <p>Cantidad: {item.quantity}</p>
            <p>Precio: {item.item.price}</p>
          </div>
        </div>
      ))}
      <Button variant="dark">Comprar</Button>
        <Form addOrder = {addOrder}/>
    </div>
  );
};

export default Cart;
