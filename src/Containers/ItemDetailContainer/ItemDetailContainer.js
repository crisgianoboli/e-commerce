import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../firebase";
import ItemDetail from "../../Components/ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  // traer un producto en praticular
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const docRef = db.collection("productos").doc(id);

    docRef
      .get()
      .then(function (doc) {
        if (doc.exists) {
          setProduct({id: doc.id, ...doc.data()});
          setLoading(false);
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch(function (error) {
        console.log("Error getting document:", error);
      });
  }, [id]);

  return (
    <div id="itemDetailContainer">
      {loading ? <h2> Loading </h2> : <ItemDetail product={product} />}
    </div>
  );
};

export default ItemDetailContainer;
