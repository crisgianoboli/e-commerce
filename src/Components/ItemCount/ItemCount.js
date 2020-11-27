import React, { useState } from "react";
import './ItemCount.scss';

const ItemCounter = ({ initialValue, maxValue, minValue, onAdd }) => {
  const [counter, setCounter] = useState(initialValue);

  const decrement = () => {
    if (counter === minValue) {
      return alert("No puede pedir cantidades negativas");
    }
    setCounter(counter - 1);

    console.log(decrement);
  };

  const increment = () => {
    if (counter === maxValue) {
      return alert("Comunicarse por ventas al por mayor");
    }

    setCounter(counter + 1);
  };

  return (
    <div className="btns-container">
      <h2 className="btn-counter">{counter}</h2>
      <div className="btns-container">
        <button onClick={decrement} className="btn-dec"> - </button>
        <button onClick={increment} className="btn-inc"> + </button>
        <button className="btn-buy">Comprar {counter} </button>
      </div>
    </div>
  );
};

export default ItemCounter;
