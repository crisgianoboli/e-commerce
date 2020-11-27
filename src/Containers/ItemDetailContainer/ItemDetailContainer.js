import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../api/Products';
import ItemDetail from '../../Components/ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    // traer un producto en praticular
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState({});
    const { id } = useParams();

    useEffect(() => {
      setLoading(true)
      setTimeout(() => {
        getProduct()
          .then(
          (response) => {
            response.forEach(element => {
              if(Number(id) === element.id) {
                setProduct(element);
              }
            });
            setLoading(false)
          },
          (err) => {
              console.error(err);
          })
          .finally(() => {})
      }, 3000)
      }, [id])

    return <div id="itemDetailContainer">{loading ? <h2> Loading </h2> : <ItemDetail product={product}/>}</div>
}

export default ItemDetailContainer;