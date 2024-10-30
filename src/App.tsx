import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import { useState } from "react";
import './App.css';
import { FcAbout } from "react-icons/fc";

function App() {
  const cities = ['New York', 'Miami', 'Los Angeles', 'San Francisco'];
  const handleSelectItem = (item: string) => {
    console.log(item);
  }
  return (
    <div>
      <FcAbout color="pink" size="40"/>
      <ListGroup items={cities} heading="Miami" onSelectItem={handleSelectItem}/>
    </div>
  )
 
}

export default App;