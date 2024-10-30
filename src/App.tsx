
import { useState } from 'react';
import './App.css';
import Message from './Message';
function App() {
  const [bugs, setBugs] = useState([
    {id: 1, title: 'Bug 1', fixed: false},
    {id: 2, title: 'Bug 2', fixed: false},
  ]);

  const handleClick = () => {
    //updating array of objects
    setBugs(bugs.map(bug => bug.id === 1 ? {...bug, fixed: true} : bug));
  }

  return (
    <div>
      <p>{JSON.stringify(bugs)}</p>
      <button onClick={handleClick}>button</button>
    </div>
  )
}

export default App;