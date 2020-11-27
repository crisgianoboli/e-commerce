import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { Button } from 'react-bootstrap';
import "./ItemDetail.scss";

const ItemDetail = ({ product }) => {
  // Recibir los items y hacer un map
  const { parametro } = useParams();

  useEffect(() => {
    console.log(parametro);
  }, [parametro]);

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
          <ItemCount maxValue={8} minValue={0} initialValue={0} onAdd={0} />
          {/* Button "AGREGAR AL CARRITO" */}
          <Button variant="light">Agregar al carrito</Button>

          <Button variant="dark">
            <Link to={"/"}> Volvamos al Listado </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
