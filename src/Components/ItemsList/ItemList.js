import { useEffect, useState } from 'react';
import Item from '../Item/Item';
import '../Item/item.scss'

const ItemList = ({ items }) => {
    // Recibir los items y hacer un map 

    console.log(items);

    return (
        <div id="ItemList">
            {items.map((item, idx) => {
                return(
                    <Item key={idx} item={item}/>
                )
            })}
        </div>
    )
}

export default ItemList;