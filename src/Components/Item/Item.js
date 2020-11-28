import "./item.scss";
import { Button, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <div id="Item" className="item-container">
      <Carousel>
        <Carousel.Item className="item-content-div">
          <img src={item.image} alt="image nike" />
          <Carousel.Caption>
            <h2>{item.productName}</h2>
            <p>{item.price}</p>
            <Button variant="light">
              <Link to={"/detail/" + item.id} activeClassName="me-activo">
                {" "}
                Vemos los detalles{" "}
              </Link>
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>

    /* <div id="Item" className="item-container">
            <div className="item-content-div">
               <h2>{item.productName}</h2>
               <p>{item.price}</p>
               <img src={item.image} alt="image nike"/>
            </div>
            <Button variant="light" >
               <Link to={"/detail/"+item.id} activeClassName="me-activo" > Vemos los detalles  </Link>
             </Button> 
        </div> */
  );
};

export default Item;
