import "./item.scss";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
   

    <div id="Item">
            <div className="box">
                <h2 className="name-product">{item.productName}</h2>
                <p className="price-product">{item.price}</p>
                <button className="buy">
                <Link to={"/detail/"+item.id} className="btn-buy"> Comprar </Link>
                </button>
                <img src={item.image} alt="nike" className="product"/>
            </div> 
        </div>
  );
};

export default Item;
