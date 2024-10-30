import { useState } from "react";
import './ListGroup.css'

//function
interface Props{
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}

function ListGroup({items, heading, onSelectItem} : Props) {
    const [selectedIndex, setSelectedIndex] = useState(0);
    return (
        <>
            <h1>{heading}</h1>
            {items.length === 0 && <p>no items</p>}
            <ul className="list-group">    
                {items.map((item, index) => (
                    <li className={ selectedIndex === index ? "list-group-item active" : "list-group-item"}
                        key={item}
                        onClick={() => {setSelectedIndex(index); onSelectItem(item);}}
                        >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default ListGroup;