// Esta funcion es llamada por la Home para darle al usuario un listado de productos 


export const getProducts = () => {
    return new Promise((resolve, reject) => {
        resolve(
            [
                {id:1, productName: "Nike Force A1", price: '$15000', image: 'https://images.complex.com/complex/images/c_scale,f_auto,q_auto,w_768/fl_lossy,pg_1/iot1dbjmzr7z6kfkoxrb/nike-air-force-1-lead-1' },
                {id:2, productName: "Nike Force A1 black", price: '$13000', image: 'https://i8.amplience.net/i/jpl/jd_047951_b?qlt=92&w=600&h=425&v=1' },
                {id:3, productName: "Adidas Star ", price: '$14000', image: 'https://i.pinimg.com/originals/a2/d2/09/a2d209e547ab5a52b502e48e94642a19.jpg' },
                {id:4, productName: "Adidas Star black", price: '$12000', image: 'https://picture-cdn.wheretoget.it/cgx2ij-l-610x610-shoes-adidas-adidas+shoes-adidas+superstars-adidas+originals-superstar-black-black+shoes-sneakers-black+sneakers-tumblr-instagram-beautiful-pretty-cute-black.jpg' },
        ])
    })
}

//Esta funcion devuelve un objeto para mostrar en detalle el producto seleccionado
export const getProduct = () => {
    return new Promise((resolve, reject) => {
        resolve(            
            [
                {id:1, productName: "Nike Force A1", price: '$15000', description: 'Zapato ligero y de suela muy delgada: ... Zapato deportivo ligero, generalmente con cordones y suela de goma: se puso el chandal y las zapatillas y se fue a correr. Pieza de cuero, goma, etc., que sirve para mantener herméticamente adheridas dos partes diferentes', image: 'https://images.complex.com/complex/images/c_scale,f_auto,q_auto,w_768/fl_lossy,pg_1/iot1dbjmzr7z6kfkoxrb/nike-air-force-1-lead-1' },
                {id:2, productName: "Nike Force A1 black", price: '$13000', description: 'Zapato ligero y de suela muy delgada: ... Zapato deportivo ligero, generalmente con cordones y suela de goma: se puso el chandal y las zapatillas y se fue a correr. Pieza de cuero, goma, etc., que sirve para mantener herméticamente adheridas dos partes diferentes', image: 'https://i8.amplience.net/i/jpl/jd_047951_b?qlt=92&w=600&h=425&v=1' },
                {id:3, productName: "Adidas Star ", price: '$14000', description: 'Zapato ligero y de suela muy delgada: ... Zapato deportivo ligero, generalmente con cordones y suela de goma: se puso el chandal y las zapatillas y se fue a correr. Pieza de cuero, goma, etc., que sirve para mantener herméticamente adheridas dos partes diferentes' , image: 'https://i.pinimg.com/originals/a2/d2/09/a2d209e547ab5a52b502e48e94642a19.jpg' },
                {id:4, productName: "Adidas Star black", price: '$12000', description: 'Zapato ligero y de suela muy delgada: ... Zapato deportivo ligero, generalmente con cordones y suela de goma: se puso el chandal y las zapatillas y se fue a correr. Pieza de cuero, goma, etc., que sirve para mantener herméticamente adheridas dos partes diferentes' , image: 'https://picture-cdn.wheretoget.it/cgx2ij-l-610x610-shoes-adidas-adidas+shoes-adidas+superstars-adidas+originals-superstar-black-black+shoes-sneakers-black+sneakers-tumblr-instagram-beautiful-pretty-cute-black.jpg' },
        ]    
        )
    })
}