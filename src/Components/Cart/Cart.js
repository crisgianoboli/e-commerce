import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../Context/CartContext";
import {Form} from '../Form/Form';
import {getFirestore} from '../../firebase/index';
import "./Cart.scss";

const Cart = () => {
  const [cart, setCart] = useContext(CartContext);//  agregar setCart para eliminar, editar items
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


  // obtener total de compra
  const getGrandTotal = () => {
    return cart.reduce((acc, p) => (acc += p.item.price * p.quantity), 0);
  };

  // borrar productos 
  const deleteProduct = (id) => {
   cart.splice(
      cart.findIndex((p) => p.id === id),
      1  
    ); 

    setCart([...cart]);

  };


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
        alert("El Id de tu compra es: " + docRef.id);
        
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
      <h3>Total de su orden ${getGrandTotal()}</h3>
      <button onClick={deleteProduct}>Borrar</button>
      <Form addOrder = {addOrder}/>
    </div>
  );
};

export default Cart;
