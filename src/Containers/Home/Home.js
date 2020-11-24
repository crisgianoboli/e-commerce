import { useEffect, useState } from 'react';
import ItemList from '../../Components/ItemsList/ItemList';
import { getProducts } from '../../api/Products';
import home from './home.scss';

const Home = () => {
    //llamado a la promise o api, que devuelve un listado de productos para la HOME

    const [items, setItems] = useState([])


    useEffect(() => {
        setTimeout(() => {
            getProducts()
        .then(
        (response) => {
          setItems(response)
        },
        (err) => {
            console.error(err);
        })
        .finally(() => {})

        }, 3000);
    }, [])

    return (
        <div id="Home" className="home-container">
            <h2 className="greeting">Goes Shop</h2>
            {/* llamar al ITEM LIST */}
            <ItemList items={items} />
        </div>
    )
}

export default Home;