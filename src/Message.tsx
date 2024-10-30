import React, { useState } from 'react'

const Message = () => {
    const [customer, setCustomer] = useState({
        name: 'John',
        address: {
            city: 'San Francisco',
            zipCode: 94111
        }
    })

    const handleClick = () => {
        setCustomer({
            ...customer,
            address: { ...customer.address, zipCode: 2414 }
        });
    };

    return (
        <div>
              <p>{JSON.stringify(customer)}</p>
              <button onClick={handleClick}>Button</button>
        </div>
    )
}

export default Message
