import Item from "../Item/Item";

const Category = ({products}) => {
    return (
        <div id="ItemList" className="item-container">
            {products?.map((item, idx) => {
                return(
                    <Item key={idx} item={item}/>
                )
            })}
        </div>
    )
}

export default Category
