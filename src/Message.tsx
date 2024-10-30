import React, { useState } from 'react'

const Message = () => {
    const [drink, setDrink] = useState({
        title: "Americano",
        price: 5,
    })

    const handleClick = () => {
        setDrink({...drink, price:6})
    }

    return (
        <div>
            <p>{drink.price}</p>
            <button onClick={handleClick}>Button</button>
        </div>
    )
}

export default Message
