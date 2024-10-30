import { useState } from "react";
import styles from "./ListGroup.css"
import styled from 'styled-components';

const List = styled.ul`
    list-style: none;
    padding: 0;
`;

interface ListItemProps {
    active: boolean;
}

const ListItem = styled.li<ListItemProps>`
    padding: 5px 0;
    background: ${props => props.active ? 'blue' : 'none'};
`;

interface Props{
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}

function ListGroup({items, heading, onSelectItem} : Props) {
    const [selectedIndex, setSelectedIndex] = useState(0);
    return (
        <List>
            <h1>{heading}</h1>
            {items.length === 0 && <p>no items</p>}
            <ul>    
                {items.map((item, index) => (
                    <ListItem 
                        active={index === selectedIndex}
                        key={item}
                        onClick={() => {setSelectedIndex(index); onSelectItem(item);}}
                        >
                        {item}
                    </ListItem>
                ))}
            </ul>
        </List>
    )
}

export default ListGroup;