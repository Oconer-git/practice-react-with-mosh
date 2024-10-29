import { Fragment } from "react/jsx-runtime";
let items = [
    'New York',
    'Makati',
    'Tokyo',
    'Paris',
    'Bangkok'
]
items = [];

const getMessage = () => {
    return items.length === 0 ? <p>no items</p> : null
}

function ListGroup() {
    return (
        <Fragment>
            <h1>List</h1>
            {getMessage()}
            <ul>    
                {items.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </Fragment>
    )
}

export default ListGroup;