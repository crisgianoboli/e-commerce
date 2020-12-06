import { createContext, useContext, useState } from 'react';

const AppContext = createContext();
const useAppContext = () => useContext(AppContext)

export const AppProvider = ({children}) => {

    const [products, setproducts] = useState([]);

    //{id, imagen, text, count}
    const addProduct = (product, quantity) => {
        /* setproducts([...products, {...product, quantity}]); */
        // buscar si en el array existen
        const existing = products.find((p) => p.id === product.id)
        
        //si existe sumar cantidades
        if(existing) {
            existing.quantity += quantity;
            setproducts([...products])
        }
        else {
            // si no existe agregar
            setproducts([...products, {...product, quantity}])
        }
     
    }

    //REVISAR AL AGREGAR, QUE GUARDE LA INFO DE LOS PRODUCTOS ANTES ELEGIDOS
    
    //get product count
    const productsCount = () => {
        return products.reduce((acc, p) => (acc += p.quantity), 0)
    }

    //editar cantidades es


    //eliminar cantidades



    // total de productos



    // eliminar un item del carrito

    
    return <AppContext.Provider value={{products, addProduct, productsCount}}> 
            {children}
    </AppContext.Provider>

}

export default useAppContext