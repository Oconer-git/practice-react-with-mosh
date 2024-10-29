import { useState } from "react";

//function
interface Props{
    items: string[];
    heading: string;
}

function ListGroup({items, heading} : Props) {
    const [selectedIndex, setSelectedIndex] = useState(0);
    return (
        <>
            <h1>{heading}</h1>
            {items.length === 0 && <p>no items</p>}
            <ul className="w-24">    
                {items.map((item, index) => (
                    <li className={`p-2 cursor-pointer ${
                                    selectedIndex === index ? "bg-blue-400" : "bg-white"
                                    }`}
                        key={item}
                        onClick={() => {setSelectedIndex(index)}}
                        >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default ListGroup;