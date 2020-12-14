import { useContext } from "react";
import { AppContext } from '../../Components/Context/AppContext'
import ItemList from "../../Components/ItemsList/ItemList";
import "./home.scss";

const Home = () => {

  const {products} = useContext(AppContext);

  return (
    <div id="Home" className="home-container">
      <h2 className="greeting">Goes Shop</h2>
      {/* llamar al ITEM LIST */}
      <ItemList items={products} />
    </div>
  );
};

export default Home;
