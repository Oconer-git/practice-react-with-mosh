
import { useState } from 'react';
import './App.css';
import produce from 'immer';

function App() {
  const [bugs, setBugs] = useState([
    {id: 1, title: 'Bug 1', fixed: false},
    {id: 2, title: 'Bug 2', fixed: false},
  ]);

  const handleClick = () => {
    //updating array of objects
    // setBugs(bugs.map(bug => bug.id === 1 ? {...bug, fixed: true} : bug));

    // update bugs with the use of immer
    setBugs(produce(draft => {
      const bug = draft.find(bug => bug.id === 1);
      if(bug) bug.fixed = true;
    }))
  }

  return (
    <div>
      {bugs.map(bug => 
        <p key={bug.id}>
          title:{bug.title} {bug.fixed ? 'fixed' : 'new'}
        </p>
      )}
      <button onClick={handleClick}>button</button>
    </div>
  )
}

export default App;