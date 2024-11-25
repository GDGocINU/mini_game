function Card({item, id, handleClick}){
    const itemClass = item.stat ? " active " + item.stat : "";
    
    return (
        <div ClassName={"card" + itemClass} onClick={() => handleClick(id)}>
            <img src = {item.img} alt = " " />
            
        </div>
    )
}

export default Card