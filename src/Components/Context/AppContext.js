import { createContext, useState, useEffect } from 'react';
import { getFirestore } from '../../firebase';

export const AppContext = createContext();

export const AppProvider = ({children}) => {

    const [products, setProducts] = useState();
    useEffect(() => {
        
        //referencia
        const db = getFirestore();
        const productColection = db.collection('productos');
        // con esta linea traemos un producto por id
        // const idProduct = productColection.doc('') 

        // pedimos los datos a la base de datos
        productColection.get().then((querySnapshot) => {
            if (querySnapshot.size === 0) {
              console.log("No results!");
            }
            setProducts(
              querySnapshot.docs.map((doc) => {
                return { id: doc.id, ...doc.data() };
              })
            );
          })
    }, []);


    return <AppContext.Provider value={{products}}>  
        {children}  
    </AppContext.Provider>

}
