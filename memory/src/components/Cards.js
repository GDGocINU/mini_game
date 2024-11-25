import { useState } from "react"
import Card from './Card'

function Cards() {
    const [items, setItems] = useState([
        { id: 1, img: '/img/1.jpeg', stat:"active"},
        { id: 1, img: '/img/1.jpeg', stat:" "},
        { id: 2, img: '/img/2.jpeg', stat:"correct "},
        { id: 2, img: '/img/2.jpeg', stat:" "},
        { id: 3, img: '/img/3.jpeg', stat:" "},
        { id: 3, img: '/img/3.jpeg', stat:"wrong"},
        { id: 4, img: '/img/4.jpeg', stat:" "},
        { id: 4, img: '/img/4.jpeg', stat:" "},
        { id: 5, img: '/img/5.jpeg', stat:" "},
        { id: 5, img: '/img/5.jpeg', stat:" "},
        { id: 6, img: '/img/6.jpeg', stat:" "},
        { id: 6, img: '/img/6.jpeg', stat:" "},
        { id: 7, img: '/img/7.jpeg', stat:" "},
        { id: 7, img: '/img/7.jpeg', stat:" "},
        { id: 8, img: '/img/8.jpeg', stat:" "},
        { id: 8, img: '/img/8.jpeg', stat:" "}

    ].sort(() => Math.random() - 0.5))

    const [prev, setPrev] = useState(-1)

    function handleClick(id){
    }

    return (
        <div className="container">
            { items.map((item, index) => (
                <Card key={index} item={item} id={index} handleClick={handleClick}/>
            )) }
        </div>
    )


}

export default Cards