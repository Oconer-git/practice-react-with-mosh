import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import { useState } from "react";

function App() {
  const cities = ['New York', 'Miami', 'Los Angeles', 'San Francisco'];
  const handleSelectItem = (item: string) => {
    console.log(item);
  }
  return (
    <div>
      <ListGroup items={cities} heading="Miami" onSelectItem={handleSelectItem}/>
    </div>
  )
 
}

export default App;