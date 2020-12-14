import Item from '../Item/Item';


const ItemList = ({ items }) => {
    // Recibir los items y hacer un map 


    return (
        <div id="ItemList" className="item-container">
            {items?.map((item, idx) => {
                return(
                    <Item key={idx} item={item}/>
                )
            })}
        </div>
    )
}

export default ItemList;