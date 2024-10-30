
import { useState } from 'react';
import './App.css';

function App() {
  const [isVisible, setVisibility] = useState(false);
  const [isApproved, setApproved] = useState(true);

  const handleClick = () => {
    setVisibility(true);
    console.log(isVisible);
  }

  return (
    <div>
      <button onClick={handleClick}>click</button>
    </div>
  )
 
}

export default App;