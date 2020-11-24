import { useEffect, useState } from 'react';
import { getProduct } from '../../api/Products';
import ItemDetail from '../../Components/ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    // traer un producto en praticular
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState({});


    useEffect(() => {
      setLoading(true)
      setTimeout(() => {
        getProduct()
          .then(
          (response) => {
            setProduct(response)
            setLoading(false)
          },
          (err) => {
              console.error(err);
          })
          .finally(() => {})
      }, 3000)
      }, [])

    return <div id="itemDetailContainer">{loading ? <h2> Loading </h2> : <ItemDetail product={product}/>}</div>
}

export default ItemDetailContainer;