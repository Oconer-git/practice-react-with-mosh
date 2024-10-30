import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Like from "./components/Like";
import './App.css';
import { FcAbout } from "react-icons/fc";

function App() {
  const cities = ['New York', 'Miami', 'Los Angeles', 'San Francisco'];
  const handleSelectItem = (item: string) => {
    console.log(item);
  }
  const buttonClick = () => {
    console.log('clicked');
  }

  return (
    <div>
      <Like onClick={() => {console.log('clicked')}}/>
    </div>
  )
 
}

export default App;