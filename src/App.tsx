
import { useState } from 'react';
import './App.css';


function App() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: 'Hacob'
    }
  })

  const [pizza, setPizza] = useState({
    name: 'Spicy Pepperoni',
    toppings: ['Mushroom', 'Pepperoni']
  })

  const [cart, setCart] = useState({
    discount: .1,
    items: [
      {id: 1, title: 'Product 1', quantity: 1},
      {id: 2, title: 'Product 2', quantity: 2},
    ]
  })

  const handleClickGame = () => {
    setGame({...game, player:{...game.player, name:'Jacob'}})
  }

  const handleClickPizza = () => {
    setPizza({...pizza, toppings:[...pizza.toppings, 'Cheese']})
  }

  const handleClickCart = () => {
    setCart({...cart, items: cart.items.map(item => item.id === 1 ? {...item, quantity: item.quantity + 1} : item)})
  }
  
  return (
    <div>
      <section>
          {/* exercise 1 */}
          <p>{game.player.name}</p>
          <button onClick={handleClickGame}>Click to change name</button>
      </section>
      <section>
        {/* exercise 2 */}
        {pizza.toppings.map(item => <p key={item}>{item}</p>)}
        <button onClick={handleClickPizza}>Click to add toppings</button>
      </section>
      <section>
        {/* exerceise 3 */}
        {cart.items.map(item => <p>title:{item.title} quantity:{item.quantity}</p>)}
        <button onClick={handleClickCart}>Click to change quantity of cart</button>
      </section>
    </div>
  )
}

export default App;