
import { useState } from 'react';
import './App.css';

function App() {
  // [false, true]
  const [person, setPerson] = useState({
    firstName: 'Donell',
    lastName: 'Oconer'
  })

  return (
    <div>
      <h1>{person.firstName +" "+ person.lastName}</h1>
    </div>
  )
 
}

export default App;