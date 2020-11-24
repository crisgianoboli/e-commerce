// Esta funcion es llamada por la Home para darle al usuario un listado de productos 
export const getProducts = () => {
    return new Promise((resolve, reject) => {
        resolve(
            [
                {id:1, productName: "Nike Force A1", price: '$15000', image: '../image/nike-force.jpg' },
                {id:2, productName: "Nike Force A1 black", price: '$13000', image: '../image/nike-force-black.jpg' },
                {id:3, productName: "Adidas Star ", price: '$14000', image: '../image/adidas.jpg' },
                {id:4, productName: "Adidas Star black", price: '$12000', image: '../image/adidas1.jpg' },
        ])
    })
}

//Esta funcion devuelve un objeto para mostrar en detalle el producto seleccionado
export const getProduct = () => {
    return new Promise((resolve, reject) => {
        resolve(            
            {id:1, productName: "Nike Force A1", price: '$15000', reviews: '100', image: '../image/nike-force.jpg' },    
        )
    })
}