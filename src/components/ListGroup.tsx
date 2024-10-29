import { Fragment } from "react/jsx-runtime";
import { MouseEvent } from "react";

let items = [
    'New York',
    'Makati',
    'Tokyo',
    'Paris',
    'Bangkok'
]

const handleClick = (event: MouseEvent) => {
    console.log(event);
}
function ListGroup() {
    return (
        <Fragment>
            <h1>List</h1>
            {items.length === 0 && <p>no items</p>}
            <ul className="w-24">    
                {items.map((item, index) => (
                    <li className="border border-black p-1" 
                        key={item}
                        onClick={handleClick}
                        >
                        {item}
                    </li>
                ))}
            </ul>
        </Fragment>
    )
}

export default ListGroup;